/*
 * @Description: router
 * @Author: zhaobin
 * @Date: 2022-12-27 17:09:18
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-07 14:25:14
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob("./modules/**/*.ts", {
  eager: true,
  import: "default",
});
const routeModuleList: RouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key] || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
export const asyncRoutes = routeModuleList;
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/:path(.*)*",
    component: Layout,
    meta: {
      title: "ErrorPage",
      hideMenu: true,
    },
    children: [
      {
        path: "/:path(.*)*",
        component: () => import("@/views/error-page/index.vue"),
        name: "ErrorPage",
        meta: {
          title: "ErrorPage",
        },
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title: "首页",
      icon: "dashboard",
      hideChildrenMenu: true,
      activeMenu: "/",
    },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/baidu-link",
    redirect: "",
    meta: { link: "http://baidu.com", title: "百度", icon: "link" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
