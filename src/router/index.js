import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WorkView from "../views/WorkView.vue";
import ExtrasView from "../views/ExtrasView.vue";
import ResumeView from "../views/ResumeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/extras",
    name: "extras",
    component: ExtrasView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
