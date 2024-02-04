<template>
    <div class="featured-content">
        <h2 class="featured-content_title">Популярные треки</h2>
        <div class="featured-content_grid featured-music">
            <div class="featured-card music-card" v-for="topTrack in topTracks" :key="topTrack.trackId">
                <div class="track-main">
                    <div :style="{ backgroundImage: 'url(' + topTrack.trackCover + ')' }" class="track-art">
                        <button class="play" @click="play(topTrack.trackId)"></button>
                    </div>
                    <div class="track-info">
                        <router-link :to="'/track/' + topTrack.trackId" class="track-name">{{ topTrack.trackTitle
                        }}</router-link>
                        <router-link :to="'/profile/' + topTrack.userId" class="track-artist">{{ topTrack.userName
                        }}</router-link>
                        <div class="track-functions">
                            <div class="function-like" @click="likeTrack(topTrack.trackId)">
                                <svg class="like" :class="getLikedTracks.includes(topTrack.trackId) ? 'liked' : ''"
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
                            <a href="#" class="function-style">{{ topTrack.trackStyle }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="featured-content_title" v-if="newTracks.length > 0">Новые треки</h2>
        <div class="featured-content_grid featured-music">
            <div class="featured-card music-card" v-for="newTrack in newTracks" :key="newTrack.trackId">
                <div class="track-main">
                    <div :style="{ backgroundImage: 'url(' + newTrack.trackCover + ')' }" class="track-art">
                        <button class="play" @click="play(newTrack.trackId)"></button>
                    </div>
                    <div class="track-info">
                        <router-link :to="'/track/' + newTrack.trackId" class="track-name">{{ newTrack.trackTitle
                        }}</router-link>
                        <router-link :to="'/profile' + newTrack.userId" class="track-artist">{{ newTrack.userName
                        }}</router-link>
                        <div class="track-functions">
                            <div class="function-like" @click="likeTrack(newTrack.trackId)">
                                <svg class="like" :class="getLikedTracks.includes(newTrack.trackId) ? 'liked' : ''"
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
                            <a href="#" class="function-style">Techno</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
export default {
    name: 'MusicsocialTopTracks',

    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['topTracks', 'newTracks', 'getLikedTracks'])
    },

    mounted() {

    },

    methods: {
        ...mapMutations(['likeTrack']),
        ...mapActions(['play'])
    },
};
</script>

<style lang="scss">
</style>