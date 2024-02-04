import Vue from "vue";
import VueRouter from "vue-router";
import mainContent from "../views/main-content.vue";
import profileView from "../views/profile-view.vue";
import messageVies from "../views/message-view.vue";
import favoritesView from "../views/favorites-view.vue";
import singleTrack from "../views/single-track.vue";
// import stylesView from "../views/styles-view.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/", component: mainContent },
  { path: "/profile/:id", component: profileView },
  { path: "/messages", component: messageVies},
  { path: "/favorites", component: favoritesView},
  { path: "/track/:id", component: singleTrack},
  // { path: "/styles/:id", component: stylesView}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
