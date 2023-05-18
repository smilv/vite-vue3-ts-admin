<!--
 * @Description: SidebarItem
 * @Author: zhaobin
 * @Date: 2023-05-17 14:35:24
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-18 16:32:48
-->
<script setup lang="ts" name="SidebarItem">
import { Menu } from "@element-plus/icons-vue";
import { resolve } from "path-browserify";
import { isExternal } from "@/utils/validate";
import Link from "./Link.vue";
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
function resolvePath(routePath: string) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return resolve(props.basePath, routePath);
}
</script>
<template>
  <template v-if="!item.meta?.hideMenu">
    <template v-if="!item.children?.length || item.meta?.hideChildrenMenu">
      <Link :to="basePath">
        <el-menu-item :index="basePath">
          <template #title>
            <span v-if="item.meta">{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </Link>
    </template>
    <el-sub-menu v-else :index="basePath">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>
