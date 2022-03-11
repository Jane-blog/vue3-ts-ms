<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧 导航 -->
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':true}">
        <NavBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import TagsView from './components/TagsView'
import AppMain from './components/AppMain'
</script>

<style lang="less" scoped>
@import '~@/styles/base.less';
@import '~@/styles/variables.less';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar-container {
  transition: width @sideBarDuration;
  width: @sideBarWidth !important;
  background-color: @menuBg;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - @sideBarWidth);
  transition: width @sideBarDuration;
}
.hideSidebar .fixed-header {
  width: calc(100% - @hideSideBarWidth);
}
.main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: @sideBarWidth;
    position: relative;
    background-color: antiquewhite;
  }
</style>
