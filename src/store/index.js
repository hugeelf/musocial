import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allowedStyles: [
      { id: "Rave", style: "Rave" },
      { id: "ProgressiveHouse", style: "Progressive House" },
      { id: "BassHouse", style: "Bass House" },
      { id: "LatinoDisco", style: "Latino Disco" },
      { id: "BaileFunk", style: "Baile Funk" },
      { id: "Rock", style: "Rock" },
      { id: "SlapHouse", style: "Slap House" },
      { id: "TechHouse", style: "Tech House" },

    ],
    currentUser: {
      player: new Audio(),
      isRegistered: true,
      id: "Tiesto2",
      currenPlayedTrack: '',
      currentTrackId: 1,
      currentMusicTime: 0,
      isPlaying: false,
    },
    users: [
      {
        isRegistered: true,
        isTop: true,
        userId: "RDMYN",
        userName: "RDMYN",
        userBio:
          "Весьма известный музыкант в узких кругах - его маме нравится его музыка. А еще он изучает Front-end разработку в GeekBrains",
        userAvatar:
          "https://sun9-15.userapi.com/impg/ZRZHUNr7ZzuwHhM6R1aLvDOt3Eb0uJppfIhWMw/hOseU7v2Fd8.jpg?size=1080x1920&quality=95&sign=84afc4c57741ea3d9412c6f6bd7579b3&type=album",

        socialLinks: {
          youtube: "https://www.youtube.com/channel/UCZ_E24dVGV_8meew1RlTI-g",
          vk: "https://vk.com/elf_person",
          whatsapp: "https://wa.me/79034182520",
        },
        tracks: [
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 1,
            trackTitle: "Jahm - The One (Real Damyn Remix)",
            likeCount: 1,
            trackStyle: "Rave",
            isNew: true,
            trackCover:
              "https://cdn.promodj.com/afs/7d461e0f1aa5d1e777f6187c6d107fd812%3Acrop%3A0x251%3A720x720%3A75x75%3A77eece",
            comments: [
              {
                commentId: 1,
                content: "Not bad",
                byUser: "Tiesto",
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 2,
            trackTitle: "Cucumber",
            likeCount: 12,
            trackStyle: "Progressive house",
            isNew: false,
            trackCover:
              "https://imagescdn.junodownload.com/full/CS5113733-02A-BIG.jpg",
            comments: [
              {
                commentId: 1,
                content: "Greeny",
                byUser: "Tiesto",
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 3,
            trackTitle: "MFCKR",
            likeCount: 3,
            trackStyle: "Tech House",
            isNew: false,
            trackCover:
              "https://geo-media.beatport.com/image_size/1400x1400/125db2dd-0c76-4be0-aadf-564ab3819799.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto",
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 7,
            trackTitle: "Song #2",
            likeCount: 3,
            trackStyle: "Slap House",
            isNew: false,
            trackCover:
              "https://geo-media.beatport.com/image_size/1400x1400/98595c53-5872-4d45-a4b7-5f98d25dc06d.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto",
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 8,
            trackTitle: "Tequila",
            likeCount: 3,
            trackStyle: "Bass House",
            trackCover:
              "https://geo-media.beatport.com/image_size/1400x1400/d91762aa-e5c6-40b0-b40c-b38f8b53b2ca.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto",
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 9,
            trackTitle: "Rik & Viles - This Day (Real Damyn remix)",
            likeCount: 10,
            trackStyle: "Bass House",
            isNew: true,
            trackCover:
              "https://geo-media.beatport.com/image_size/1400x1400/ad1a9e28-dc87-4306-b0ab-651e11f61c7a.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto",
              },
            ],
          },
        ],
        liked: {
          tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          artists: [],
        },
        messages: [
          {
            withUser: "Tiesto",
            dialog: [
              {
                id: 1,
                sender: "Tiesto",
                content: "Hello, man.",
              },
              {
                id: 2,
                sender: "RDMYN",
                content: "Это же не настоящий ты, я прав?",
              },
              {
                id: 3,
                sender: "RDMYN",
                content: "Ну серьезно, ведь не ты?",
              },
              {
                id: 4,
                sender: "Tiesto",
                content: "Yes. I'm in your head, man",
              },
              {
                id: 5,
                sender: "Tiesto",
                content:
                  "это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
              },
            ],
          },
          {
            withUser: "RDMYN",
            dialog: [
              {
                id: 1,
                sender: "RDMYN",
                content: "11111",
              },
              {
                id: 2,
                sender: "RDMYN",
                content: "22222",
              },
              {
                id: 3,
                sender: "RDMYN",
                content: "44444",
              },
              {
                id: 4,
                sender: "RDMYN",
                content: "33333",
              },
            ],
          },
        ],
      },
      {
        isRegistered: true,
        isTop: true,
        userId: "Tiesto",
        userName: "Tiesto",
        userBio:
          "Это же Tiesto. Использовать его музыку я не могу, так как возможны проблемы с авторсикими правами, однако, я взял бесплатную музыку из библиотеки Youtube - ее я могу использовать, если я правильно понял согашение. Всю настоящую музыку настоящего Tiesto можно послушать на Youtube как раз по ссылке на Youtube  в его профиле на этом сайте.",
        userAvatar:
          "https://www.trancepodcasts.com/wp-content/uploads/2015/05/Tiesto1.jpg",
        socialLinks: {
          youtube: "https://www.youtube.com/channel/UCPk3RMMXAfLhMJPFpQhye9g",
        },
        tracks: [
          {
            userName: "Tiesto",
            userId: "Tiesto",
            trackId: 4,
            trackTitle: "El Billete - Edgar Lopez and Quincas Moreira",
            likeCount: 1,
            trackStyle: "Latino Disco",
            isNew: true,
            trackCover:
              "https://yt3.googleusercontent.com/ytc/AIf8zZSmgPdnK-7YuVWtO0Op8DWhc7FlMkD-Qehm1hFL=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Not bad",
                byUser: "RDMYN",
              },
            ],
          },
          {
            userName: "Tiesto",
            userId: "Tiesto",
            trackId: 5,
            trackTitle: "Funky Carioca - Quincas Moreira",
            likeCount: 12,
            trackStyle: "Baile Funk",
            isNew: false,
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Greeny",
                byUser: "RDMYN",
              },
            ],
          },
          {
            userName: "Tiesto",
            userId: "Tiesto",
            trackId: 6,
            trackTitle: "Lazy Laura - Quincas Moreira",
            likeCount: 3,
            trackStyle: "Rock",
            isNew: false,
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "RDMYN",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "RDMYN",
              },
            ],
          },
        ],
        liked: {
          tracks: [1, 3],
          artists: [],
        },
        messages: [
          {
            withUser: "RDMYN",
            dialog: [
              {
                id: 1,
                sender: "Tiesto",
                content: "Hello, man.",
              },
              {
                id: 2,
                sender: "RDMYN",
                content: "Это же не настоящий ты, я прав?",
              },
              {
                id: 3,
                sender: "RDMYN",
                content: "Ну серьезно, ведь не ты?",
              },
              {
                id: 4,
                sender: "Tiesto",
                content: "Yes. I'm in your head, man",
              },
            ],
          },
          {
            withUser: "Tiesto",
            dialog: [
              {
                id: 1,
                sender: "Tiesto",
                content: "11111",
              },
              {
                id: 2,
                sender: "Tiesto",
                content: "22222",
              },
              {
                id: 3,
                sender: "Tiesto",
                content: "44444",
              },
              {
                id: 4,
                sender: "Tiesto",
                content: "33333",
              },
            ],
          },
        ],
      },
      {
        isRegistered: true,
        isTop: true,
        userId: "Tiesto2",
        userName: "Tiesto2",
        userBio:
          "Это же Tiesto. Использовать его музыку я не могу, так как возможны проблемы с авторсикими правами, однако, я взял бесплатную музыку из библиотеки Youtube - ее я могу использовать, если я правильно понял согашение. Всю настоящую музыку настоящего Tiesto можно послушать на Youtube как раз по ссылке на Youtube  в его профиле на этом сайте.",
        userAvatar:
          "https://cdn.koddmagazine.com/media/mg/images/2017/02/tiesto2.jpg",
        socialLinks: {
          youtube: "https://www.youtube.com/channel/UCPk3RMMXAfLhMJPFpQhye9g",
        },
        tracks: [
          {
            userName: "Tiesto2",
            userId: "Tiesto2",
            trackId: 10,
            trackTitle: "El Billete - Edgar Lopez and Quincas Moreira",
            likeCount: 1,
            trackStyle: "Latino Disco",
            isNew: true,
            trackCover:
              "https://yt3.googleusercontent.com/ytc/AIf8zZSmgPdnK-7YuVWtO0Op8DWhc7FlMkD-Qehm1hFL=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Not bad",
                byUser: "RDMYN",
              },
            ],
          },
          {
            userName: "Tiesto2",
            userId: "Tiesto2",
            trackId: 11,
            trackTitle: "Funky Carioca - Quincas Moreira",
            likeCount: 12,
            trackStyle: "Baile Funk",
            isNew: false,
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Greeny",
                byUser: "RDMYN",
              },
            ],
          },
          {
            userName: "Tiesto2",
            userId: "Tiesto2",
            trackId: 12,
            trackTitle: "Lazy Laura - Quincas Moreira",
            likeCount: 3,
            trackStyle: "Rock",
            isNew: true,
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "RDMYN",
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "RDMYN",
              },
            ],
          },
        ],
        liked: {
          tracks: [5, 1, 4, 9],
          artists: [],
        },
        messages: [
          {
            withUser: "RDMYN",
            dialog: [
              {
                id: 1,
                sender: "Tiesto2",
                content: "Hello, man.",
              },
              {
                id: 2,
                sender: "RDMYN",
                content: "Это же не настоящий ты, я прав?",
              },
              {
                id: 3,
                sender: "RDMYN",
                content: "Ну серьезно, ведь не ты?",
              },
              {
                id: 4,
                sender: "Tiesto2",
                content: "Yes. I'm in your head, man. Ha-ha",
              },
            ],
          },
          {
            withUser: "Tiesto",
            dialog: [
              {
                id: 1,
                sender: "Tiesto",
                content: "11111",
              },
              {
                id: 2,
                sender: "Tiesto",
                content: "22222",
              },
              {
                id: 3,
                sender: "Tiesto",
                content: "44444",
              },
              {
                id: 4,
                sender: "Tiesto",
                content: "33333",
              },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    allowedStyles(state) {
      return state.allowedStyles;
    },
    currentUser(state) {
      return state.currentUser;
    },
    featuredArtists(state) {
      const topUsersArr = [];
      for (const user of state.users) {
        if (user.isTop) {
          topUsersArr.push(user);
        }
      }
      return topUsersArr;
    },
    topTracks(state) {
      const topTracks = [];
      for (const user of state.users) {
        for (const topTrack of user.tracks) {
          if (topTrack.likeCount >= 10) {
            topTracks.push(topTrack);
          }
        }
      }
      return topTracks;
    },
    newTracks(state) {
      const newTracks = [];
      for (const user of state.users) {
        for (const newTrack of user.tracks) {
          if (newTrack.isNew) {
            newTracks.push(newTrack);
          }
        }
      }
      return newTracks;
    },
    getLikedTracks(state) {
      for (const user of state.users) {
        if (user.userId == state.currentUser.id) {
          return user.liked.tracks;
        }
      }
    },
    getUserInfoFromState: (state) => (userId) => {
      for (const user of state.users) {
        if (user.userId === userId) {
          return user;
        }
      }
    },
    getFavoritesTracks(state, getters) {
      const likedTracks = [];
      for (const user of state.users) {
        if (user.userId != state.currentUser.id) {
          for (const track of user.tracks) {
            for (const likedTrackId of getters.getLikedTracks) {
              if (track.trackId === likedTrackId) {
                likedTracks.push(track);
              }
            }
          }
        }
      }
      return likedTracks;
    },
    getSingleTrack: (state) => (trackIdd) => {
      for (const user of state.users) {
        for (const track of user.tracks) {
          if (track.trackId == trackIdd) {
            return track;
          }
        }
      }
    },
    isPlaying(state) {
      return state.currentUser.isPlaying;
    },
  },
  mutations: {
    likeTrack(state, likedTrackId) {
      state.users.forEach((user) => {
        if (user.userId === state.currentUser.id) {
          if (user.liked.tracks.includes(likedTrackId)) {
            user.liked.tracks.splice(
              user.liked.tracks.indexOf(likedTrackId),
              1
            );
          } else {
            user.liked.tracks.push(likedTrackId);
          }
        }
      });
    },
    addMessage(state, newMessage) {
      state.users.forEach((user) => {
        if (user.userId === newMessage.sender) {
          user.messages.forEach((dialog) => {
            if (dialog.withUser === newMessage.withUser) {
              dialog.dialog.push({
                id: dialog.dialog.length + 1,
                sender: newMessage.sender,
                content: newMessage.content,
              });
            }
          });
        }
      });
    },
    setCurrentTrack(state, trackId) {
      state.currentUser.currenPlayedTrack = require('../assets/music/' + trackId + '.mp3')
      state.currentUser.player.src = state.currentUser.currenPlayedTrack
      state.currentUser.currentTrackId = trackId
    },
    setCurrentTimeForSlider(state, time) {
      state.currentUser.currentMusicTime = time;
    },
    addComment(state, comment){
      for (let user of state.users){
        for(let track of user.tracks){
          if (track.trackId == comment.trackId){
            track.comments.push({
              byUser: comment.byUser,
              content: comment.content,
              commentId: track.comments.length+1
            })
          }
        }
      }
    },
  },
  actions: {
    play({commit, state}, trackId) {
      if (state.currentUser.currenPlayedTrack){
        state.currentUser.player.pause()
      }
      commit('setCurrentTrack', trackId)
      state.currentUser.player.play()
    },
  },
  modules: {},
});
