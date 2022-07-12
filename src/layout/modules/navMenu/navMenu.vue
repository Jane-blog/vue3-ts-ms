<template>
  <div class="nav-menu">
    <svg-icon
      :class="collapse ? 'collapse-icon' : 'menu-icon'"
      :icon-class="'icon_expand'"
      @click="handleCollapseClick"
    />
    <div class="menu-content">
      <bread-crumb></bread-crumb>
      <nav-info></nav-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavInfo from './navInfo.vue'
import BreadCrumb from './breadCrumb.vue'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    NavInfo,
    BreadCrumb
  },
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleCollapseClick = () => {
      emit('handleCollapseAction', !props.collapse)
    }
    return {
      handleCollapseClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 45px;
  display: flex;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f8ff;
  .menu-icon {
    font-size: 20px;
    cursor: pointer;
  }
  .collapse-icon {
    transform: rotate(180deg);
    font-size: 20px;
    cursor: pointer;
  }
  .menu-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
