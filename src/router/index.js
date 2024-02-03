import Vue from "vue";
import VueRouter from "vue-router";
import mainContent from "../views/main-content.vue";
import profile from "../views/profile-view.vue";
import messagesComponent from "../views/messages-content.vue";
import favorites from "../views/favorites.vue";
import singleTrack from "../views/single-track.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/", component: mainContent },
  { path: "/profile/:id", component: profile },
  { path: "/messages/", component: messagesComponent},
  { path: "/favorites/", component: favorites},
  { path: "/track/:id", component: singleTrack},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
