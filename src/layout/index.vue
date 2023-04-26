<!--
 * @Description: layout
 * @Author: zhaobin
 * @Date: 2023-01-09 10:30:13
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-04-26 17:35:40
-->
<script lang="ts" setup name="Layout">
import BaseHeader from "@/layout/components/BaseHeader.vue";
import Sidebar from "@/layout/components/Sidebar/index.vue";
import Main from "@/layout/components/Main.vue";
</script>
<template>
  <el-container class="layout-container">
    <el-aside>
      <el-scrollbar>
        <Sidebar />
      </el-scrollbar>
    </el-aside>
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
  .el-aside {
    color: var(--el-text-color-primary);
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    padding: 0;
    height: calc(100vh - 60px);
  }
}
</style>
