<template>
    <div class="side-bar">
    <router-link to="/home">
      <div class="logo-container">
        <el-avatar shape="square" :size="logoHeight"></el-avatar>
        <h1 class="logo-title" v-if="$store.getters.sidebarOpened">vue template</h1>
      </div>
    </router-link>
    <el-scrollbar>
      <!-- 一级 menu 菜单 -->
      <el-menu
        class="sidebar-container-menu"
        mode="vertical"
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF"
        :unique-opened="true"
        :collapse="!$store.getters.sidebarOpened"
        :collapse-transition="true"
        :default-active="activeMenu"
      >
        <!-- 循环导航菜单 -->
        <!-- <SidebarItem v-for="item in routes" :key="item.path" :route="item" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { routes } from '@/router'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.less'
const logoHeight = 44
// 计算高亮 menu 的方法
const route = useRoute()
console.log('---route---')
console.log(routes)
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="less" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>