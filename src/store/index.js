import Vue from "vue";
import Vuex from "vuex";
// 'Rave',
//       'Progressive House',
//       'Bass House',
//       'Latino Disco',
//       'Baile Funk',
//       'Rock'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTrackId: 7,
    currentTrackSrc: '',
    allowedStyles: [
      {id: 'Rave', style: 'Rave'},
      {id: 'ProgressiveHouse', style: 'Progressive House'},
      {id: 'BassHouse', style: 'Bass House'},
      {id: 'LatinoDisco', style: 'Latino Disco'},
      {id: 'BaileFunk', style: 'Baile Funk'},
      {id: 'Rock', style: 'Rock'},
      {id: 'SlapHouse', style: 'Slap House'},
      {id: 'TechHouse', style: 'Tech House'}
    ],
    currentUser: {
      isRegistered: true,
      id: "Tiesto",
      currenPlayedTrack: '',
    },
    topUsers: [
      {
        userName: "Tiesto",
        userInfo:
          "нидерландский диджей, музыкальный продюсер, композитор, а также дизайнер одежды и филантроп. Является одним из наиболее титулованных диджеев в истории электронной танцевальной музыки. На протяжении трёх лет подряд, в 2002, 2003 и 2004-м, был диджеем #1 в мировом рейтинге DJ Mag Top 100. Он также три раза получал звание лучшего диджея мира по версии International Dance Music Awards — в 2007, 2008 и 2009-м.",
        userAvatar:
          "https://www.trancepodcasts.com/wp-content/uploads/2015/05/Tiesto1.jpg",
        id: "Tiesto",
      },
      {
        userName: "Armin van Buuren",
        userInfo:
          "Является обладателем многих именитых наград, включая ТОП 100 DJ по версии DJ Magazine, профильных наград Trancepodium и других. Занимал первое место по фанатскому голосованию в DJ Magazine с 2007 по 2010 год, и 2012 году. В 2011, и с 2013 по 2019 занимал призовые места, и входил в ТОП 5 TOP 100. В 2013 году был номинирован на премию Грэмми за трек «This Is What It Feels Like», записанный вместе с Тревором Гатри, что его сделало четвёртым музыкантом в стиле транс, который когда-либо был номинирован на престижную премию, и это ставит его в один ряд с Tiësto, Полом ван Дайком и BT.",
        userAvatar:
          "https://cdn-radio.dpgmedia.net/site/w800/b/8c/da/e4/1459183/Qmusic-Armin-teaser.jpg",
        id: "ArminVanBuuren",
      },
      {
        userName: "RDMYN",
        userInfo:
          "Весьма известный музыкант в узких кругах - его маме нравится его музыка. А еще он изучает Front-end разработку в GeekBrains",
        userAvatar:
          "https://sun9-15.userapi.com/impg/ZRZHUNr7ZzuwHhM6R1aLvDOt3Eb0uJppfIhWMw/hOseU7v2Fd8.jpg?size=1080x1920&quality=95&sign=84afc4c57741ea3d9412c6f6bd7579b3&type=album",
        id: "RDMYN",
      },
    ],
    topTracks: [
      {
        trackName: "Jahm - The One (Real Damyn Remix)",
        artistName: "RDMYN",
        trackId: "1",
        trackCover:
          "https://cdn.promodj.com/afs/7d461e0f1aa5d1e777f6187c6d107fd812%3Acrop%3A0x251%3A720x720%3A75x75%3A77eece",
        userId: "RDMYN",
      },
      {
        trackName: "Cucumber",
        artistName: "RDMYN",
        trackId: "2",
        trackCover:
          "https://imagescdn.junodownload.com/full/CS5113733-02A-BIG.jpg",
        userId: "RDMYN",
      },
      {
        trackName: "MFCKR (Original Mix)",
        artistName: "RDMYN",
        trackId: "3",
        trackCover:
          "https://geo-media.beatport.com/image_size/1400x1400/125db2dd-0c76-4be0-aadf-564ab3819799.jpg",
        userId: "RDMYN",
      },
    ],
    newTracks: [
      {
        trackName: "Song #2",
        artistName: "RDMYN",
        trackId: "7",
        trackCover:
          "https://geo-media.beatport.com/image_size/1400x1400/98595c53-5872-4d45-a4b7-5f98d25dc06d.jpg",
        userId: "RDMYN",
      },
      {
        trackName: "Tequila",
        artistName: "RDMYN",
        trackId: "8",
        trackCover:
          "https://geo-media.beatport.com/image_size/1400x1400/d91762aa-e5c6-40b0-b40c-b38f8b53b2ca.jpg",
        userId: "RDMYN",
      },
      {
        trackName: "Rik & Viles - This Day (Real Damyn remix)",
        artistName: "RDMYN",
        trackId: "9",
        trackCover:
          "https://geo-media.beatport.com/image_size/1400x1400/ad1a9e28-dc87-4306-b0ab-651e11f61c7a.jpg",
        userId: "RDMYN",
      },
    ],
    users: [
      {
        isRegistered: true,
        userId: "RDMYN",
        userName: "RDMYN",
        userRole: "musician",
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
            trackCover:
              "https://cdn.promodj.com/afs/7d461e0f1aa5d1e777f6187c6d107fd812%3Acrop%3A0x251%3A720x720%3A75x75%3A77eece",
            comments: [
              {
                commentId: 1,
                content: "Not bad",
                byUser: "Tiesto"
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
            trackCover:
              "https://imagescdn.junodownload.com/full/CS5113733-02A-BIG.jpg",
            comments: [
              {
                commentId: 1,
                content: "Greeny",
                byUser: "Tiesto"
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
            trackCover:
              "https://geo-media.beatport.com/image_size/1400x1400/125db2dd-0c76-4be0-aadf-564ab3819799.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto"
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto"
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
            trackCover:
            "https://geo-media.beatport.com/image_size/1400x1400/98595c53-5872-4d45-a4b7-5f98d25dc06d.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto"
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto"
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
                byUser: "Tiesto"
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto"
              },
            ],
          },
          {
            userName: "RDMYN",
            userId: "RDMYN",
            trackId: 9,
            trackTitle: "Rik & Viles - This Day (Real Damyn remix)",
            likeCount: 3,
            trackStyle: "Bass House",
            trackCover:
            "https://geo-media.beatport.com/image_size/1400x1400/ad1a9e28-dc87-4306-b0ab-651e11f61c7a.jpg",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "Tiesto"
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "Tiesto"
              },
            ],
          },
        ],
        liked: {
          tracks: [],
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
        userId: "Tiesto",
        userName: "Tiesto",
        userRole: "listener",
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
            trackCover:
              "https://yt3.googleusercontent.com/ytc/AIf8zZSmgPdnK-7YuVWtO0Op8DWhc7FlMkD-Qehm1hFL=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Not bad",
                byUser: "RDMYN"
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
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Greeny",
                byUser: "RDMYN"
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
            trackCover:
              "https://yt3.googleusercontent.com/AB0rUdzANgKwAERipALXguSN6gN0NpccZnHhqrkN5lq6tp7xIHFkLRUFMLsb8eDxhv08xVe1=s176-c-k-c0x00ffffff-no-rj",
            comments: [
              {
                commentId: 1,
                content: "Groovy",
                byUser: "RDMYN"
              },
              {
                commentId: 2,
                content: "Go dancing",
                byUser: "RDMYN"
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
    ],
  },
  getters: {
    topArtists(state) {
      return state.topUsers;
    },
    topTracks(state) {
      return state.topTracks;
    },
    newTracks(state) {
      return state.newTracks;
    },
    currentUser(state) {
      return state.currentUser;
    },
    getUser(state) {
      return (userIdFromComponent) =>
        state.users.filter((user) => {
          return user.userId === userIdFromComponent;
        });
    },
    getLikedTracksByCurrentUser(state) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].userId === state.currentUser.id) {
          return state.users[i].liked.tracks;
        }
      }
    },
    getFavoritesTracks(state, getters) {

      const resp = []
      for(let user of state.users){
        if (user.userId !== state.currentUser.id){
          for(let userTrack of user.tracks){
            for(let likedTrackId of getters.getLikedTracksByCurrentUser){
              if(userTrack.trackId === likedTrackId){
                resp.push(userTrack)
              }
            }
          }
        }
      }
      return resp
    },
    styles(state){
      return state.allowedStyles
    },
    getSingleTrack:
     (state) => (trackId)=>{
        for (let user of state.users){
          for(let track of user.tracks){
            if(track.trackId == trackId){
              return track
            }
          }
        }
    },
    getUserAvatar:
    (state)=>(userId)=>{
      for(let user of state.users){
        if(user.userId == userId){
          return user.userAvatar
        }
      }
    },
    getCurrentTrackId(state){
      return state.currentTrackId
    }
  },
  mutations: {
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
    setCurrentTrack(state, trackId){
      state.currentTrackId = trackId
    }
  },
  actions: {
  },
  modules: {},
});
