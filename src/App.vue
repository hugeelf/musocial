<template>
  <div id="app" class="app">
    <div class="main_grid">
      <div class="left_menu">
        <div class="login-block">
          <button class=" sign-in featured-card-button login-button">Регистрация</button>
          <button class=" sign-up featured-card-button login-button">Войти</button>
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
          <option value="">фильтр еще не работает</option>
          <option v-for="(styles, index) in allowedStyles" :key="index" :value="styles.id">
            <router-link :to="'/styles/' + styles.id"> {{ styles.style }}</router-link>
          </option>
        </select>

        <div class="player-section">
          <div class="player-main">
            <button class="main-player-button main-player-button-prev" @click="prev"
              :style="{ backgroundImage: 'url(' + require('../src/assets/img/icons/bacward.svg') + ')' }"></button>
            <button class="main-player-button main-player-button-play" @click="play(currentUser.currentTrackId)"
              :style="{ backgroundImage: 'url(' + require('../src/assets/img/icons/play.svg') + ')' }"></button>
            <button class="main-player-button main-player-button-pause" @click="pause"
              :style="{ backgroundImage: 'url(' + require('../src/assets/img/icons/pause.svg') + ')' }"></button>
            <button class="main-player-button main-player-button-next" @click="next"
              :style="{ backgroundImage: 'url(' + require('../src/assets/img/icons/bacward.svg') + ')' }"></button>
          </div>
          <div class="sliders">
            <input type="range" class="volume-slider" min="0" max="100" @input="volume()" />
          </div>
          <div class="track-info-section">
            <div class="player-track-cover"></div>
            <router-link :to="'/track/' + currentUser.currentTrackId" class="track-name player-track-name">{{
              getSingleTrack(currentUser.currentTrackId).trackTitle }}</router-link>
            <p class="player-track-name"></p>
          </div>
        </div>
      </div>

      <router-view class="main_content"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
    };
  },
  created() {
    this.currentUser.player.onended = () => {
      this.next()
    }
  },
  computed: {
    ...mapGetters(['allowedStyles', 'currentUser', 'getSingleTrack']),

  },
  methods: {
    ...mapActions(['play']),
    volume() {
      const volumeSlider = document.querySelector('.volume-slider')
      this.currentUser.player.volume = volumeSlider.value / 100
    },
    pause() {
      this.currentUser.player.pause()
    },
    prev() {
      let trackId = this.currentUser.currentTrackId
      if (trackId == 1) {
        trackId = 12
      }
      trackId--
      this.play(trackId)

    },
    next() {
      let trackId = this.currentUser.currentTrackId
      if (trackId == 11) {
        trackId = 0
      }
      trackId++
      this.play(trackId)

    },
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

.left_menu {
  border-right: 1px solid black;
}

.left_menu {
  min-width: 200px;
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

.main-menu_link:hover,
.login-button:hover,
.featured-card-button:hover {
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

.player-section {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.player-track-art {
  height: 50px;
  width: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.player-track-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-button-play {
  opacity: 1 !important;
}

.player-button-pause {
  opacity: 1 !important;
  background-image: url(./assets/img/icons/pause.svg) !important;
}

.featured-card-button {
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  padding: 5px 10px;
  cursor: pointer;
  background: rgba(174, 183, 194, 0.12);
  width: 100%;
  text-align: center;
}

.featured-card_button:hover {
  color: #64748b;
}

.login-button {
  max-width: fit-content;
}


.player-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.track-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-player-button-prev,
.main-player-button-play,
.main-player-button-pause,
.main-player-button-next {

  width: 30px;
  height: 30px;
  background-color: transparent;
  background-position: center;
  background-size: cover;
}

.main-player-button-next {
  transform: rotate(180deg);
}

.player-track-name {
  white-space: normal !important;

}
</style>
