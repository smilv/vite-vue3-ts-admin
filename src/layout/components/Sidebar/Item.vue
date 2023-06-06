<!--
 * @Description: 
 * @Author: zhaobin
 * @Date: 2023-06-06 15:16:45
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-06 16:52:00
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
  <SvgIcon v-if="iconClass" :iconClass="iconClass" class="menu-icon"></SvgIcon>
  <span v-if="meta.title" class="title-indent">{{ meta.title }}</span>
</template>
<style lang="scss" scoped>
.menu-icon {
  margin-right: 4px;
  font-size: 16px;
}
.title-indent {
  margin-left: 6px;
}
</style>
