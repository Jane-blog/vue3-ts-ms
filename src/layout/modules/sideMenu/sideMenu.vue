<template>
  <div class="side-menu">
    <div class="side-logo">
      <svg-icon :icon-class="'icon_logo'" class="img"></svg-icon>
      <span v-show="!collapse">vue3 + ts 项目</span>
    </div>
    <!-- 路由 -->
    <el-menu
      :collapse="collapse"
      :default-active="activeMenu"
      background-color="#001529"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      router
      mode="vertical"
      class="el-menu-vertical"
    >
      <side-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import SideItem from './sideItem.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SideItem
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    store.dispatch('app/generateRoutes')
    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    const routes = computed(() => {
      return store.state.app.routes
    })
    return {
      activeMenu,
      routes
    }
  }
})
</script>

<style lang="less" scoped>
.side-menu {
  transition: width 0.28s;
  overflow: hidden;
  height: 100%;
  background-color: #001529;
  .side-logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #ffffff;
    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
:deep(.el-menu) {
  border-right: none;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #001529;
  box-sizing: border-box;
}

:deep(.el-menu--collapse) {
  .el-submenu {
    & > .el-submenu__title {
      & > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>
