<!--
 * @Description: 查询页
 * @Author: zhaobin
 * @Date: 2023-05-31 14:43:18
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-12-05 17:10:13
-->
<script setup lang="ts" name="PageSearch">
const formData = reactive({
  name: "345",
  phone: "",
  date: "",
  deptCode: "",
  status: "",
  roleIds: [],
});
function search() {}
</script>
<template>
  <el-card shadow="never">
    <el-form :inline="true" :model="formData" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model.trim="formData.name" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model.trim="formData.phone" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="用户状态">
        <el-select v-model="formData.status" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="formData.roleIds" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="formData.deptCode" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-date-picker
          v-model="formData.date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="search">导出</el-button>
        <el-button @click="search">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
