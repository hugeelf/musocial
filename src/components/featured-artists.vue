<template>
    <div class="featured-content">
        <h2 class="featured-content_title">Популярные музыканты</h2>
        <div class="featured-content_grid">
            <div v-for="(artist, index) in topArtists" :key="index" class="featured-card">
                <div :style="{ backgroundImage: 'url(' + artist.userAvatar + ')' }" class="user-image"> </div>
                <h3 class="user-name">{{ artist.userName }}</h3>
                <div class="user-description">
                    <p class="user_about">
                        {{ artist.userInfo }}
                    </p>
                    <router-link class="featured-card_button" :to="'/profile/' + artist.id">На страницу</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MusicsocialFeaturedArtists',

    data() {
        return {

        };
    },
    computed: mapGetters(['topArtists']),
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>