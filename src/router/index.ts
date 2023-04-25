/*
 * @Description: router
 * @Author: zhaobin
 * @Date: 2022-12-27 17:09:18
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-25 17:14:15
 */
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
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
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          affix: true,
        },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes.concat(routeModuleList),
});

export default router;
