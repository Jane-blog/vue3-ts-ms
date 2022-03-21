<template>
    <div class="side-bar">
    <router-link to="/home">
      <div class="logo-container">
        <img src="@/assets/images/icon_logo.png" class="icon-logo" alt="">
        <span class="logo-title" v-if="$store.getters.sidebarOpened">vue template</span>
      </div>
    </router-link>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 一级 menu 菜单 -->
      <el-menu
        class="sidebar-container-menu"
        mode="vertical"
        router
        :unique-opened="true"
        :collapse-transition="true"
        :collapse="!$store.getters.sidebarOpened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :default-active="activeMenu"
      >
        <!-- 循环导航菜单 -->
        <SidebarItem v-for="item in routes" :key="item.path" :route="item" :base-path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, computed } from 'vue'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.less'
export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    // 计算高亮 menu 的方法
    const route = useRoute()
    const router = useRouter()
    const routes = computed(() => {
      console.log('---routes---')
      console.log(router.options.routes)
      return router.options.routes
    })
    const activeMenu = computed(() => {
      console.log('---activeMenu---')
      console.log(router.currentRoute.value.path)
      return router.currentRoute.value.path
    })
    return {
      variables,
      routes,
      activeMenu
    }
  }
})
</script>
