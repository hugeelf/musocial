<template>
        <div class="featured-content">
            <h2 class="featured-content_title">Популярные музыканты</h2>
            <div class="featured-content_grid">
                <div class="featured-card" v-for="(topArtist, index) in featuredArtists" :key="index">
                    <div class="user-image" :style="{ backgroundImage: 'url(' + topArtist.userAvatar + ')' }"> </div>
                    <h3 class="user-name">{{ topArtist.userName }}</h3>
                    <div class="user-description">
                    <p class="user-about">
                        {{ topArtist.userBio }}
                    </p>
                    <router-link class="featured-card-button" :to="'/profile/' + topArtist.userId">На страницу</router-link>
                </div>
                </div>
            </div>
        </div>
        
</template>

<script>
import { mapGetters } from 'vuex';

mapGetters
export default {
    name: 'MusicsocialFeaturedArtistList',

    data() {
        return {

        };
    },

    mounted() {

    },
    computed: {
        ...mapGetters(['featuredArtists'])
    },

    methods: {

    },
};
</script>

<style lang="scss"></style>