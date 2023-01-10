<!--
 * @Description: layout
 * @Author: zhaobin
 * @Date: 2023-01-09 10:30:13
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-10 11:04:58
-->
<script lang="ts" setup>
import BaseHeader from "@/layout/components/BaseHeader.vue";
import BaseSide from "@/layout/components/BaseSide.vue";
</script>
<template>
  <BaseHeader />
  <div style="display: flex">
    <BaseSide />
    <div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
