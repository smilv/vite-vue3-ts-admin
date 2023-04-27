<!--
 * @Description: App
 * @Author: zhaobin
 * @Date: 2022-12-27 14:46:03
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-27 17:20:18
-->
<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
