<!--
 * @Description: 
 * @Author: zhaobin
 * @Date: 2022-12-27 17:03:57
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-03-27 16:14:29
-->
<script lang="ts" setup>
import { toggleDark } from "@/composables";
</script>

<template>
  <button class="border-none w-full bg-transparent cursor-pointer" @click="toggleDark()">
    <i inline-flex i="dark:ep-moon ep-sunny" />
  </button>
</template>
