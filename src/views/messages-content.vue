<template>
    <div>
        <div class="message">
            <div class="message-units">
                <div v-for="message in getUser[0].messages" :key="message.withUser" class="message-single-unit">
                    <div class="message-user">
                        <a :href="'/profile/' + message.withUser" class="message-avatar"></a>
                    </div>
                    <div class="message-info">
                        <p class="message-user-name" @click="getDialog(message.withUser)">{{ message.withUser }}</p>
                        <p class="message-text-last" @click="getDialog(message.withUser)">
                            {{ message.dialog[message.dialog.length - 1].content }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="message-space">
                <div class="message-read-section">
                    <div v-for="msg in currentDialog" :key="msg.id" class="message-from-user"
                        :class="(msg.sender === currentUser.id) ? 'message-to-user' : ''">
                        <a class="from-user-avatar" :href="'/profile/' + dialogWithUserId"></a>
                        <p class="from-user-message-text">
                            {{ msg.content }}
                        </p>
                    </div>
                    <div class="message-from-user message-to-user">
                    </div>
                </div>
                <div class="message-send-section">
                    <textarea v-model="messageForSend" name="message-input" id="message-user-text" cols="30" rows="5"
                        maxlength="1000" minlength="3"
                        placeholder="Набери сообщение тут, но помни - не менее 3-х символов"></textarea>
                    <button class="send-message" @click="sendMessage" :disabled="messageForSend.length < 3">Отправить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'MusicsocialMessagesContent',
    data() {
        return {
            currentDialog: {},
            dialogWithUserId: '',
            messageForSend: '',

        };
    },
    computed: {
        // mapGetters(['getUser']),
        getUser() {
            return this.$store.getters.getUser(this.currentUser.id)
        },
        currentUser() {
            return this.$store.getters.currentUser
        },
        allDialogs() { return this.getUser[0].messages },
    },
    beforeMount() {
        window.scrollTo(0, 0)
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['addMessage']),
        getDialog: function (withUserId) {
            this.allDialogs.forEach(element => {
                if (element.withUser === withUserId) {
                    this.currentDialog = element.dialog
                    this.dialogWithUserId = withUserId
                }
            });
        },
        sendMessage() {
            this.addMessage({
                withUser: this.dialogWithUserId,
                sender: this.currentUser.id,
                content: this.messageForSend
            })
            this.messageForSend = ''
        },
    },
};
</script>

<style lang="scss">
.message {
    display: grid;
    grid-template-columns: 3fr 12fr;
    max-height: 500px;
}

.message-units {
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 10px;
    position: sticky;
    align-self: start;
    height: fit-content;
    border: none;
    max-height: 94vh;
    min-height: 94vh;
    overflow: auto;
}

.message-space {
    max-height: 500px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    max-height: 94vh;
    min-height: 94vh;
    /* overflow: auto; */
}

.message-single-unit {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}

.message-avatar {
    display: block;
    width: 30px;
    height: 30px;
    background-image: url(../assets/img/icons/profile.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.message-info {
    display: flex;
    flex-direction: column;
}

.message-text-last,
.message-user-name {
    cursor: pointer;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.message-read-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
    padding-bottom: 40px;
}

.message-from-user {
    border-radius: 4px;
    padding: 5px;
    border: 1px solid rgba(174, 183, 194, 0.12);
    max-width: 47%;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.message-to-user {
    align-self: flex-end;
}

.from-user-avatar {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    background-image: url(../assets/img/icons/profile.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.message-send-section {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

textarea {
    resize: none;
    width: 100%;
    outline: none;
    border: 1px solid black;
}

.send-message {
    padding: 10px 15px;
    border: 1px solid;
}</style>