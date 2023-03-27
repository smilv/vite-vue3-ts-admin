/*
 * @Description:flow router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-03-27 09:51:17
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const flow: RouteRecordRaw = {
  path: "/flow",
  component: Layout,
  redirect: "/flow/index",
  name: "Flow",
  meta: {
    title: "charts",
    icon: "chart",
  },
  children: [
    {
      path: "index",
      component: () => import("@/views/flow/index.vue"),
      name: "FlowIndex",
      meta: {
        title: "流程图",
      },
    },
  ],
};
export default flow;
