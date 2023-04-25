/*
 * @Description: permission
 * @Author: zhaobin
 * @Date: 2023-04-25 16:54:34
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-25 17:03:39
 */
import { defineStore } from "pinia";

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    counter: 0,
    name: "Eduardo",
    isAdmin: true,
  }),
});
