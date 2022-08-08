<template>
  <div>{{ accountStore.account }}</div>
  <el-form :model="user" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
    <el-form-item label="账号">
      <el-input v-model="user.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.token"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">登陆</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useImBridge } from './hooks/useImBridge';
  import useAccountStore from '@/store/useAccountStore.js';
  const accountStore = useAccountStore();

  const user = reactive({ account: '', token: '' });

  function onLogin() {
    console.log('login');
  }
</script>

<style lang="scss" scoped></style>
