<template>
  <div class="app-wrapper">
    <el-container class="app-content">
      <!-- 左侧导航 -->
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <side-menu :collapse="isCollapse" />
      </el-aside>
      <!-- 右侧内容 -->
      <el-container class="app-page">
        <!-- 顶部导航 -->
        <el-header class="app-page-header">
          <nav-menu
            :collapse="isCollapse"
            @handleCollapseAction="handleCollapseAction"
          />
          <tag-view />
        </el-header>
        <!-- 展示内容 -->
        <el-main class="app-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideMenu from './modules/sideMenu'
import NavMenu from './modules/navMenu'
import TagView from './modules/tagView'
export default defineComponent({
  components: {
    SideMenu,
    NavMenu,
    TagView
  },
  setup() {
    // 保存是否当前处于折叠状态
    const isCollapse = ref(false)
    // 展开处理
    const handleCollapseAction = (e: boolean) => {
      isCollapse.value = e
    }
    return {
      isCollapse,
      handleCollapseAction
    }
  }
})
</script>

<style lang="less" scoped>
.app-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.app-content,
.app-page {
  height: 100%;
}

.app-page-header {
  width: 100%;
  height: 80px;
  // background: yellowgreen;
}

.app-main {
  height: calc(100% - 80px);
  padding: 20px;
  background-color: #ffffff;
}
</style>
