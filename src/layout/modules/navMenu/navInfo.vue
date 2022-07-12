<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg-icon :icon-class="'icon_user'" class="user-avatar" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logoutAction">
          <span style="display: block">退 出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index'
const store = useStore()
const logoutAction = () => {
  // 登出
  store.dispatch('user/userLogoutAction').then(() => {
    location.reload()
  })
}
</script>

<style lang="less" scoped>
.user-avatar {
  font-size: 28px;
  cursor: pointer;
}
</style>
