<!--
 * @Description: Slidebar
 * @Author: zhaobin
 * @Date: 2023-03-27 15:15:27
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-17 14:55:04
-->
<script setup lang="ts" name="Sidebar">
import { storeToRefs } from "pinia";
import { usePermissionStore } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const permissionStore = usePermissionStore();
const { routes } = storeToRefs(permissionStore);
</script>
<template>
  <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <SidebarItem v-for="route in routes" :key="route.path" :item="route" />
  </el-menu>
</template>
