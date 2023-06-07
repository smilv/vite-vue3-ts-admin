/*
 * @Description:flow router
 * @Author: zhaobin
 * @Date: 2023-01-10 14:02:01
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-07 14:18:21
 */
import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const charts: RouteRecordRaw = {
  path: "/charts",
  component: Layout,
  redirect: "/charts/flow",
  name: "Charts",
  meta: {
    title: "图表",
    icon: "charts",
  },
  children: [
    {
      path: "flow",
      component: () => import("@/views/charts/flow.vue"),
      name: "Flow",
      meta: {
        title: "流程图",
      },
    },
  ],
};
export default charts;
