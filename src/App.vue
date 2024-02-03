<template>
  <div id="app" class="app">
    <div class="main_grid">
      <div class="left_menu">
        <div class="login-block">
          <button class="login-button sign-in featured-card_button">Регистрация</button>
          <button class="login-button sign-up featured-card_button">Войти</button>
        </div>
        <router-link class="main-menu_link" to="/">
          <img src="./assets/img/icons/home.png" alt="На главную" class="main-menu_icon" />На главную</router-link>
        <router-link class="main-menu_link" :to="'/profile/' + currentUser.id">
          <img src="./assets/img/icons/profile.png" alt="" class="main-menu_icon" />Профиль</router-link>
        <router-link class="main-menu_link" to="/messages">
          <img src="./assets/img/icons/mail.png" alt="" class="main-menu_icon" />Сообщения</router-link>
        <router-link class="main-menu_link" to="/favorites/">
          <img src="./assets/img/icons/music.png" alt="" class="main-menu_icon" />Избранное</router-link>
        <input type="search" name="search" id="search-input" placeholder="Поиск еще не работает" class="search-section" />
        <select name="track-style-filter" id="tsf" class="style-filter">
          <option value="">-- фильтр по стилю --</option>
          <option v-for="(styles, index) in allowedStyles" :key="index" :value="styles.id">{{ styles.style }}</option>
        </select>
        <section class="player">
          <div :style="{ backgroundImage: 'url(' + getTrackForPlayer.trackCover + ')' }" class="player-track-art"></div>
          <div class="player-track-info">
            <router-link :to="'/track/' + getTrackForPlayer.trackId" class="track-name">{{ getTrackForPlayer.trackTitle }}</router-link>
            <router-link :to="'/profile/' + getTrackForPlayer.userId" class="track-artist">{{ getTrackForPlayer.userName }}</router-link>
          </div>
          <input type="range" :value="currentMusicTime" class="seek" @input="seekTo()">
          <button class="play player-button-play" v-if="!isPlaying" @click="play"></button>
          <button class="play player-button-play player-button-pause" v-else @click="play"></button>
          <input type="range" value="30" class="volume" @input="setVolume">
        </section>
      </div>

      <router-view class="main_content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: new Audio(),
      isPlaying: false,
      currentMusicTime: 0,
    };
  },
  computed: {
    getTrackForPlayer() {
      return this.$store.getters.getSingleTrack(this.$store.getters.getCurrentTrackId)
    },
    currentUser() {
      return this.$store.getters.currentUser
    },
    allowedStyles() {
      return this.$store.getters.styles
    },
    // currentTrackPosition(){
    //   return this.player.currentTime
    // },
  },
  methods: {
    play(){
      if( !this.isPlaying){
        this.player.play()
      }else{
        this.player.pause() 
      }
      this.isPlaying = !this.isPlaying  
      console.log(this.currentMusicTime);
    },
    // pause() {
    //   this.player.pause();
    //   this.isPlayed = false;
    // },
    seekTo(){
      const seekSlider = document.querySelector('.seek')
      let seekTo = this.player.duration * (seekSlider.value / 100);
      this.player.currentTime = seekTo;
    },
    setVolume(){
      const volumeSlider = document.querySelector('.volume')
      this.player.volume = (volumeSlider.value / 100)
    },
  },
  created() {
    this.player.onended = () => {
      this.pause()
    },
    this.player.ontimeupdate =()=>{
      this.currentMusicTime = this.player.currentTime * (100 / this.player.duration)
    },
    this.player.onchange = () =>{
      this.play()
    }
  },
  
}
</script>

<style lang="scss">
/* Reset and base styles  */
* {
  padding: 0px;
  margin: 0px;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Links */

a,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: inherit;
  font-weight: inherit;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button,
input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

.hide {
  display: none;
}

.app {
  padding: 10px 10px;
  max-width: 1280px;
  margin: 0 auto;
}

.main_grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 12fr;
  gap: 10px;
}

.menu-side,
.main_content {
  height: fit-content;
}

.left_menu,
.main_content {
  border: 1px solid rgba(174, 183, 194, 0.12);
  border-radius: 4px;
}

.left_menu {
  top: 10px;
  position: sticky;
  align-self: start;
  /* height: fit-content; */
  border: none;
  display: grid;
  gap: 5px;
}

.main-menu_link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 10px 0 10px 5px;
  border-radius: 4px;
}

.login-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: #344054;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main-menu_link:hover {
  color: #64748b;
  background: rgba(174, 183, 194, 0.12);
}

.main-menu_icon {
  max-height: 20px;
  /* display: none; */
}

.search-section,
.style-filter {
  padding: 5px 10px;
  border-radius: 4px;
  outline: none;
  padding: 10px 0 10px 5px;
}

.player {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  padding: 10px 0;
}

.player-track-art {
  height: 50px;
  width: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.player-track-info{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.player-button-play{
  opacity: 1 !important;
}
.player-button-pause{
  background-image: url(./assets/img/icons/pause.svg) !important;
}

.featured-card_button {
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  padding: 5px 10px;
  cursor: pointer;
  background: rgba(174, 183, 194, 0.12);
}

.featured-card_button:hover {
  color: #64748b;
}
</style>
