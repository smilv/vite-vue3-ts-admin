<!--
 * @Description: App
 * @Author: zhaobin
 * @Date: 2022-12-27 14:46:03
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-09 10:34:06
-->
<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
<template>
  <el-config-provider namespace="ep" :locale="zhCn">
    <router-view />
    <!-- <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </div> -->
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
