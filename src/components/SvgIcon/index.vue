<!--
 * @Description: svg-icon
 * @Author: zhaobin
 * @Date: 2023-06-06 14:28:30
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-06 15:13:32
-->
<script setup lang="ts" name="SvgIcon">
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});
const iconName = computed(() => {
  return `#icon-${props.iconClass}`;
});
</script>
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
