<!--
 * @Description: Slidebar
 * @Author: zhaobin
 * @Date: 2023-03-27 15:15:27
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-07 13:40:08
-->
<script setup lang="ts" name="Sidebar">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { usePermissionStore } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";

const route = useRoute();
const permissionStore = usePermissionStore();

const { routes } = storeToRefs(permissionStore);
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
</script>
<template>
  <el-aside class="sidebar-container">
    <el-scrollbar>
      <el-menu :default-active="activeMenu" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <SidebarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
