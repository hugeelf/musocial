<template>
    <div>
        <div class="profile">
            <div class="profile-content">
                <div v-for="track in getUser[0].tracks" :key="track.trackId"
                    class="featured-card music-card profile-music-card">
                    <div class="track-main">
                        <div class="track-art" :style="{ backgroundImage: 'url(' + track.trackCover + ')' }">
                            <button class="play"></button>
                        </div>
                        <div class="track-info">
                            <router-link :to="'/track/' + track.trackId" class="track-name">{{ track.trackTitle
                            }}</router-link>
                            <router-link :to="'/profile/' + getUser[0].userId" class="track-artist">{{ getUser[0].userName
                            }}</router-link>
                        </div>
                    </div>
                    <div class="track-functions">

                        <div class="function-like" :class="(getUser[0].userId === currentUser.id) ? 'hide' : ''"
                            @click="like(track.trackId)">
                            <svg class="like" :class="getLikedTracksIds.includes(track.trackId) ? 'liked' : ''"
                                width="800px" height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
                                id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc />
                                <path
                                    d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
                                    fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="2" />
                            </svg>
                        </div>
                        <div class="function-comment"></div>
                        <!-- need router-link -->
                        <a href="#" class="function-style">{{ track.trackStyle }}</a>
                    </div>
                    <!-- <div class="sliders">
                        <input type="range" class="seek-slider" min="0" max="100" value="0" />
                    </div> -->
                </div>

            </div>
            <div class="profile-side">
                <div class="profile-img" :style="{ backgroundImage: 'url(' + getUser[0].userAvatar + ')' }"></div>
                <h2 class="profile-name">{{ getUser[0].userName }}</h2>
                <div class="profile-connects">
                    <div class="profile-like"> </div>
                    <div class="profile-send-message"></div>
                </div>
                <p class="profile-info">{{ getUser[0].userBio }}
                </p>
                <div class="profile-links">
                    <a v-for="(socialLink, socialName, index) in getUser[0].socialLinks" :key="index" :href="socialLink"
                        class="social-link" target="_blank" style="text-transform: uppercase;">{{ socialName }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'MusicsocialProfileView',

    data() {
        return {
        };
    },

    computed: {
        getUser() {
            return this.$store.getters.getUser(this.$route.params.id)
        },
        currentUser() {
            return this.$store.getters.currentUser
        },
        getLikedTracksIds() {
            return this.$store.getters.getLikedTracksByCurrentUser
        }
    },
    beforeMount() {
        window.scrollTo(0, 0)
    },
    mounted() {
    },

    methods: {
        ...mapMutations(['likeTrack']),
        like(id) {
            this.likeTrack(id)
        }
    },
};

</script>

<style lang="scss">
.profile {
    display: grid;
    grid-template-columns: 3fr minmax(200px, 1fr);
    gap: 40px;
}

.profile-content {
    display: grid;
    grid-template-columns: 1fr minmax(250px, 1fr);
    gap: 40px;
    height: fit-content;
}

.profile-side {
    height: fit-content;
    top: 22px;
    position: sticky;
    align-self: start;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.profile-img {
    width: 200px;
    height: 200px;
    background-image: url(../assets/img/icons/profile.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid rgba(174, 183, 194, 0.12);

}

.profile-connects {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.profile-like,
.profile-send-message {
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: contain;
}

.profile-like:hover,
.profile-send-message:hover {
    cursor: pointer;
}

.profile-like {
    background-image: url(../assets/img/icons/like.svg);
}

.profile-send-message {
    background-image: url(../assets/img/icons/mail.png);
}

.profile-info {
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    -webkit-line-clamp: 10;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.profile-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.track-functions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.function-like,
.function-comment {
    width: 15px;
    height: 15px;
    background-position: center;
    background-size: contain;
}

.liked path {
    fill: red;
}

.function-like:hover,
.function-comment:hover {
    cursor: pointer;
}

// .function-like {
//     background-image: url(../assets/img/icons/like.svg);
// }

.function-comment {
    background-image: url(../assets/img/icons/comment.svg);
}

.social-link {
    border: 1px solid rgba(174, 183, 194, 0.12);
    padding: 10px;
}</style>