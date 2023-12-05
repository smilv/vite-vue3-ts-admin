<!--
 * @Description: MenuItem
 * @Author: zhaobin
 * @Date: 2023-06-06 15:16:45
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-12-05 15:32:58
-->
<script setup lang="ts" name="MenuItem">
const props = defineProps({
  meta: {
    type: Object,
    default: null,
  },
});
const iconClass = computed(() => {
  return props.meta.icon ? `menu-${props.meta.icon}` : "";
});
</script>
<template>
  <SvgIcon v-if="iconClass" :iconClass="iconClass" class="m-r-1 text-base"></SvgIcon>
  <span v-if="meta.title" class="m-l-1">{{ meta.title }}</span>
</template>