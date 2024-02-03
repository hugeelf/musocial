<template>
    <div class="featured-content">
        <h2 class="featured-content_title">Новые треки</h2>
        <div class="featured-content_grid featured-music">
            <div v-for="(track, index) in newTracks" :key="index" class="featured-card music-card">
                <div class="track-main">
                    <div :style="{ backgroundImage: 'url(' + track.trackCover + ')' }" class="track-art">
                        <button class="play"></button>
                    </div>
                    <div class="track-info">
                        <router-link :to="'/track/' + track.trackId" class="track-name"
                      >{{ track.trackName }}</router-link
                    >
                        <router-link :to="'/profile/' + track.userId" class="track-artist">{{track.artistName}}</router-link>
                    </div>
                </div>
                <!-- <div class="sliders">
                    <input type="range" class="seek-slider" min="0" max="100" value="0" />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MusicsocialNewTracks',

    data() {
        return {

        };
    },
    computed: mapGetters(['newTracks']),
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>