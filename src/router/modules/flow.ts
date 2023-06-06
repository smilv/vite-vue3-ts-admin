/*
 * @Description:flow router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-06 16:37:15
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const flow: RouteRecordRaw = {
  path: "/flow",
  component: Layout,
  redirect: "/flow/index",
  name: "Flow",
  meta: {
    title: "流程图",
    // icon: "flow",
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
