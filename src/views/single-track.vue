<template>
    <div class="single-track">
        <div class="single-track-info">
            <router-link :to="'/profile/' + getTrack.userId" class="track-artist single-track-artist">{{ getTrack.userName
            }}</router-link> <span> - </span>
            <router-link :to="'/track/' + getTrack.trackId" class="track-name single-track-name">{{ getTrack.trackTitle
            }}</router-link>
        </div>
        <div class="single-track-main">
            <div class="single-track-image" :style="{ backgroundImage: 'url(' + getTrack.trackCover + ')' }"></div>
        </div>
        <div class="single-track-control">
            <button class="button button-play">play</button>
            <button class="button button-stop"></button>
        </div>
        <!-- <div class="sliders">
            <input type="range" class="seek-slider" min="0" max="100" value="0" />
        </div> -->
        <div class="comment-section">
            <ul class="comment-base">
                <li v-for="comment in getTrack.comments" :key="comment.id" class="single-comment-unit">
                    <div class="single-comment">
                        <router-link  :to="'/profile/' + comment.byUser" class="author-link" :style="{ backgroundImage: 'url(' + getAvatar(comment.byUser) + ')' }"></router-link>
                        <p class="comment-text">
                            {{ comment.content }}
                        </p>
                    </div>
                    <!-- <button class="reply">Ответить</button> -->
                </li>
            </ul>
            <div class="message-send-section comment-section">
                <textarea v-model="newComment" name="message-input" id="message-user-text" cols="30" rows="5" minlength="3"></textarea>
                <button :disabled="newComment.length < 3" class="send-message" @click="addNewComment">Оставить комментарий</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'MusicsocialSingleTrack',

    data() {
        return {
            newComment: '',
        };
    },
    computed: {
        getTrack() {
            return this.$store.getters.getSingleTrack(this.$route.params.id)
        },
        currentUser() {
            return this.$store.getters.currentUser
        },
    },

    mounted() {
        
    },
    beforeMount() {
        window.scrollTo(0, 0)
    },

    methods: {
        ...mapMutations(['addComment', 'setCurrentTrack']),
        addNewComment(){
            this.addComment(
                {
                    byUser: this.currentUser.id,
                    trackId: this.getTrack.trackId,
                    content: this.newComment
                },
                this.newComment ='',
            )
        },
        getAvatar(userId){
            return this.$store.getters.getUserAvatar(userId)
        },
    },
};
</script>

<style lang="scss">
.single-track-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.single-track-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.single-track-artist {
    max-width: 300px;
}

.single-track-name {
    max-width: 300px;
}

.single-track-image {
    max-width: 400px;
    min-width: 200px;
    max-height: 100%;
    min-height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.button-stop,
.button-play {
    padding: 10px 20px
}

.single-track-control {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
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
    // background-image: url(../assets/img/icons/profile.png);
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
    align-items: center;
}

.reply {
    float: right;
}

.comment-section {
    padding: 10px 0;
}
</style>