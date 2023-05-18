<!--
 * @Description: Link
 * @Author: zhaobin
 * @Date: 2023-05-18 15:35:35
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-18 15:59:09
-->
<script setup lang="ts">
import { isExternal } from "@/utils/validate";
const props = defineProps({
  to: { type: String, required: true },
});
const isExternalTo = computed(() => {
  return isExternal(props.to);
});
const type = computed(() => {
  if (isExternalTo.value) {
    return "a";
  }
  return "router-link";
});
function linkProps(to: string) {
  if (isExternalTo.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }
  return { to };
}
</script>
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
