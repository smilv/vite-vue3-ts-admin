<!--
 * @Description: SidebarItem
 * @Author: zhaobin
 * @Date: 2023-05-17 14:35:24
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-06 16:46:05
-->
<script setup lang="ts" name="SidebarItem">
import { resolve } from "path-browserify";
import Link from "./Link.vue";
import Item from "./Item.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: "",
  },
});
const linkToPath = computed(() => {
  return props.item.meta?.link || props.basePath;
});
function resolvePath(routePath: string) {
  return resolve(props.basePath, routePath);
}
</script>
<template>
  <div v-if="!item.meta?.hideMenu">
    <template v-if="!item.children?.length || item.meta?.hideChildrenMenu">
      <Link :to="linkToPath">
        <el-menu-item :index="basePath">
          <Item :meta="item.meta"></Item>
        </el-menu-item>
      </Link>
    </template>
    <el-sub-menu v-else :index="basePath">
      <template #title>
        <Item :meta="item.meta"></Item>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>
