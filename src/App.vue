<!--
 * @Description: App
 * @Author: zhaobin
 * @Date: 2022-12-27 14:46:03
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-10 11:07:26
-->
<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
<template>
  <el-config-provider namespace="ep" :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
</style>
