<template>
    <div>
        <featuredArtists />
        <featuredMusic />
        <newMusic />
    </div>
</template>

<script>
import featuredArtists from '@/components/featured-artists.vue';
import featuredMusic from '@/components/featured-tracks.vue'
import newMusic from '@/components/new-tracks.vue'
export default {
    name: 'MusicsocialMainContent',
    components: {
        featuredArtists,
        featuredMusic,
        newMusic
    },
    data() {
        return {

        };
    },
    beforeMount() {
        window.scrollTo(0, 0)
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss">
.main_content {
    padding: 10px;
    display: grid;
    gap: 40px;
}

.featured-content_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.featured-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.featured-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
}

.user-image {
    max-height: 200px;
    height: 300px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.user-name {
    padding: 10px;
}

.user-description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;

}

.user_about {
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    -webkit-line-clamp: 10;
    display: -webkit-box;
    -webkit-box-orient: vertical;

}

.featured-card_button {
    align-self: normal;
    text-align: center;
}

.featured-music {
    /* grid-template-columns: repeat(5, 1fr) */
    grid-template-columns: repeat(3, minmax(250px, 1fr));
}

.music-card {
    align-items: start;
}

.track-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
}

.track-art {
    position: relative;
    max-width: 100px;
    max-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-image: url(../assets/img/icons/album.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.track-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.play {
    cursor: pointer;
    height: 70px;
    width: 70px;
    background-image: url(../assets/img/icons/play.svg);
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    border: 0px solid transparent;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.play:hover {
    opacity: 0.9;
}

.sliders {
    width: 100%;
}

.seek-slider {
    width: 100%;
}

.track-name,
.track-artist {
    max-width: 150px;
}
</style>