import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/home.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Any",
    redirect:'/404`',
  },
];
const router = createRouter({
  // 路由模式：hash
  history: createWebHashHistory(),
  routes, //路由配置
  scrollBehavior(){
    return {
      left:0,
      top:0,
    }
  }
});

export const initRouter = (app: App<Element>) => {
  app.use(router);
};
