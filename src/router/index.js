import Vue from "vue";
import VueRouter from "vue-router";
import recom from "../pages/online/recom";
import Main from "../components/main/Main.vue";
import musicHall from "../pages/online/musicHall";
import station from "../pages/online/station";
import video from "../pages/online/video";
import like from "../pages/myMusic/like";
import create from "../pages/createList/create";
import collect from "../pages/createList/collect";
import login from "../components/main/login";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/",
    redirect: "/recom",
    component: Main
  },
  {
    path: "/recom",
    name: "recom",
    component: recom,
    meta:{
      title:"推荐"
    }
  },
  {
    path: "/musicHall",
    name: "musicHall",
    component: musicHall,
    meta:{
      title:"音乐馆"
    }
  },
  {
    path: "/video",
    name: "video",
    component: video,
    meta:{
      title:"视频"
    }
  },
  {
    path: "/station",
    name: "station",
    component: station,
    meta:{
      title:"电台"
    }
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta:{
      title:"登录"
    }
  },
  {
    path: "/like",
    name: "like",
    component: like,
    meta:{
      title:"我喜欢"
    }
  },
  {
    path: "/create",
    name: "create",
    component: create,
    meta:{
      title:"我创建的歌单"
    }
  },
  {
    path: "/collect",
    name: "collect",
    component: collect,
    meta:{
      title:"我收藏的歌单"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
