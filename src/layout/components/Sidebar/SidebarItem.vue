<!--
 * @Description: SidebarItem
 * @Author: zhaobin
 * @Date: 2023-05-17 14:35:24
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-17 18:25:27
-->
<script setup lang="ts" name="SidebarItem">
import { Menu } from "@element-plus/icons-vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div v-if="!item.meta?.hideMenu">
    <el-menu-item v-if="!item.children?.length || item.meta?.hideChildrenMenu" :index="item.path">
      <template #title>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <SidebarItem v-for="child in item.children" :key="child.path" :item="child" />
    </el-sub-menu>
  </div>
</template>
