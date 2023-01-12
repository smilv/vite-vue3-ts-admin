<!--
 * @Description: layout
 * @Author: zhaobin
 * @Date: 2023-01-09 10:30:13
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-11 10:57:18
-->
<script lang="ts" setup>
import BaseHeader from "@/layout/components/BaseHeader.vue";
import BaseSide from "@/layout/components/BaseSide.vue";
</script>
<template>
  <BaseHeader />
  <div style="display: flex">
    <BaseSide />
    <div class="app-main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-main {
  /* 60= navbar  60  */
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
