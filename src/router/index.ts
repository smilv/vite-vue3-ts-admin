/*
 * @Description: router
 * @Author: zhaobin
 * @Date: 2022-12-27 17:09:18
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-09 14:31:02
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
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
  routes: constantRoutes,
});

export default router;
