/*
 * @Description:page router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-31 16:38:24
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const page: RouteRecordRaw = {
  path: "/page",
  component: Layout,
  redirect: "/page/search",
  name: "Page",
  meta: {
    title: "页面",
    icon: "page",
  },
  children: [
    {
      path: "search",
      component: () => import("@/views/page/search.vue"),
      name: "PageSearch",
      meta: {
        title: "查询页",
      },
    },
  ],
};
export default page;
