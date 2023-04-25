<!--
 * @Description: Slidebar
 * @Author: zhaobin
 * @Date: 2023-03-27 15:15:27
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-25 15:49:37
-->
<script setup lang="ts">
import { Location, Document, Menu } from "@element-plus/icons-vue";
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
      <el-icon><Document /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><Menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>
