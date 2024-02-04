<template>
    <div>
        <div class="single-track">
            <div class="single-track-card">

                <div class="single-track-main">
                    <div class="single-track-image" :style="{ backgroundImage: 'url(' + getTrack.trackCover + ')' }"> </div>
                </div>
                <div class="single-track-control">
                    <div class="single-track-info">
                        <router-link :to="'/profile/' + getTrack.userId" class="track-artist single-track-name">{{
                            getTrack.userName
                        }}</router-link>
                        <router-link :to="'/track/' + getTrack.trackId" class="track-name single-track-name">{{
                            getTrack.trackTitle
                        }}</router-link>
                    </div>
                    <div class="buttons">
                        <button class="play player-button-play" @click="play(getTrack.trackId)"></button>
                        <button class="play player-button-pause" @click="pause"></button>
                    </div>
                    <div class="sliders">
                        <input type="range" class="seek-slider" min="0" max="100" :value="value" @input="seekTo()"
                            :class="(getTrack.trackId != currentUser.currentTrackId) ? 'hide' : ''" />
                    </div>
                    <div class="function-like single-function-like"
                        :class="(getUserInfoFromState(getTrack.userId).userId === currentUser.id) ? 'hide' : ''"
                        @click="likeTrack(getTrack.trackId)">
                        <svg class="like" :class="getLikedTracks.includes(getTrack.trackId) ? 'liked' : ''" width="800px"
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
                </div>

            </div>
            <div class="comment-section">
                <ul class="comment-base">
                    <li class="single-comment-unit" v-for="(comment, index) in getTrack.comments" :key="index">
                        <div class="single-comment">
                            <router-link :to="'/profile/' + comment.byUser" class="author-link"
                                :style="{ backgroundImage: 'url(' + getUserInfoFromState(comment.byUser).userAvatar + ')' }"></router-link>
                            <p class="comment-text">
                                {{ comment.content }}
                            </p>
                        </div>
                        <!-- <button class="reply">Ответить</button> -->
                    </li>
                </ul>
                <div class="message-send-section comment-section">
                    <textarea v-model="newComment" name="message-input" id="message-user-text" cols="30" rows="5"
                        minlength="3"></textarea>
                    <button :disabled="newComment.length < 3" class="send-message" @click="addNewComment">Оставить
                        комментарий</button>
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
    name: 'MusicsocialSingleTrack',

    data() {
        return {
            value: 0,
            newComment: ''
        };
    },

    mounted() {
        this.currentUser.player.ontimeupdate = () => {
            this.value = this.currentUser.player.currentTime * (100 / this.currentUser.player.duration)
        }
        // ,
        //     this.currentUser.player.onended = () => {
        //         this.currentUser.isPlaying = !this.currentUser.isPlaying

        //     }
    },
    created() {

    },
    computed: {
        ...mapGetters(['getSingleTrack', 'isPlaying', 'currentUser', 'getUserInfoFromState', 'getLikedTracks']),
        getTrack() {
            return this.getSingleTrack(this.$route.params.id)
        },
    },

    methods: {
        ...mapMutations(['likeTrack', 'addComment']),

        seekTo() {
            const seekSlider = document.querySelector('.seek-slider')
            let seekTo = this.currentUser.player.duration * (seekSlider.value / 100);
            this.currentUser.player.currentTime = seekTo;
        },
        pause() {
            this.currentUser.player.pause()
        },
        addNewComment() {
            this.addComment(
                {
                    byUser: this.currentUser.id,
                    trackId: this.getTrack.trackId,
                    content: this.newComment
                },
                this.newComment = '',
            )
        },

        ...mapActions(['play'])
    },
};
</script>

<style lang="scss">
.single-track {
    display: flex;
    flex-direction: column;
}

.single-track-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.single-track-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.single-track-image {
    height: 200px;
    width: 200px;
    background-position: center;
    background-size: cover;

}

.single-track-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.single-track-name {
    max-width: 250px;
}

.button-stop,
.button-play {
    padding: 10px 20px;
    max-width: 20px;
}

.single-track-control {
    max-width: 250px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
}

.sliders {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.volume-slider {
    max-width: 100px;
    height: 5px;
}

.single-function-like {
    width: 30px;
    height: 35px;
}

.comment-section,
.comment-base {
    list-style-type: none;
}

.comment-base {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.author-link {
    /* display: block; */
    height: 50px;
    width: 50px;
    // background-image: url(./img/icons/profile.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid rgba(174, 183, 194, 0.12);
    flex-shrink: 0;
}

.single-comment-unit {
    padding: 10px 0;
}

.single-comment {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
}

.reply {
    float: right;
}

.comment-section {
    padding: 10px 0;
}
</style>