import Vue from "vue";
import VueRouter from "vue-router";
import recom from '../pages/online/recom'
import Main from '../components/main/Main.vue'
import musicHall from '../pages/online/musicHall'
import station from '../pages/online/station'
import video from '../pages/online/video'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/recom',
    component: Main,
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
