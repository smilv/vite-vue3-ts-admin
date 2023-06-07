<!--
 * @Description: layout
 * @Author: zhaobin
 * @Date: 2023-01-09 10:30:13
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-07 12:11:05
-->
<script lang="ts" setup name="Layout">
import BaseHeader from "@/layout/components/BaseHeader.vue";
import Sidebar from "@/layout/components/Sidebar/index.vue";
import Main from "@/layout/components/Main.vue";
</script>
<template>
  <el-container class="layout-container">
    <Sidebar />
    <el-container>
      <el-header>
        <BaseHeader />
      </el-header>
      <el-main>
        <el-scrollbar>
          <Main />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.layout-container {
  .el-header {
    color: var(--el-text-color-primary);
  }
  .el-main {
    padding: 0;
    height: calc(100vh - 60px);
  }
}
</style>
