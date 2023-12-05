<!--
 * @Description: Main
 * @Author: zhaobin
 * @Date: 2023-03-27 16:45:09
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-12-05 14:15:28
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </section>
</template>
<style lang="scss" scoped>
.app-main {
  padding: var(--el-main-padding);
}
</style>
