<template>
    <div>
        <div class="profile">
            <div class="profile-content">
                <div v-for="track in getFavoritesTracks" :key="track.trackId"
                    class="featured-card music-card profile-music-card">
                    <div class="track-main">
                        <div class="track-art" :style="{ backgroundImage: 'url(' + track.trackCover + ')' }">
                            <button class="play"></button>
                        </div>
                        <div class="track-info">
                            <router-link :to="'/track/' + track.trackId" class="track-name">{{ track.trackTitle
                            }}</router-link>
                            <router-link :to="'/profile/' + track.userId" class="track-artist">{{ track.userName
                            }}</router-link>
                        </div>
                    </div>
                    <div class="track-functions">
                        <div class="function-like" @click="likeTrack(track.trackId)">
                            <svg class="like" :class="getLikedTracks.includes(track.trackId) ? 'liked' : ''" width="800px"
                                height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut"
                                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc />
                                <path
                                    d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
                                    fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="2" />
                            </svg>
                        </div>
                        <div class="function-comment"></div>
                        <a href="#" class="function-style">{{ track.trackStyle }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
    name: 'MusicsocialFavoritesView',

    data() {
        return {

        };
    },

    mounted() {

    },
    computed: {
        ...mapGetters(['getFavoritesTracks', 'getLikedTracks'])
    },

    methods: {
        ...mapMutations(['likeTrack'])
    },
};
</script>

<style lang="scss" scoped></style>