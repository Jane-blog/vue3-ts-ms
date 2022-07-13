<template>
  <div class="tags-box">
    <router-link
      v-for="tag in visitedViews"
      ref="refTag"
      :key="tag.path"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      tag="span"
      class="tag-item"
      @click.middle="!isAffix(tag) ? closeSelectedTag(tag) : ''"
      @contextmenu.prevent="openMenu(tag, $event)"
    >
      {{ tag.title }}
      <Close
        v-if="!isAffix(tag)"
        class="el-icon-close"
        @click.prevent.stop="closeSelectedTag(tag)"
      />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
// import path from 'path'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import type { RouteItem } from '@/router/types'
import { Close } from '@element-plus/icons-vue'
const $route = useRoute()
const $router = useRouter()
const store = useStore()
const visitedViews = computed(() => {
  return store.state.tags.visitedViews
})
// 是否活跃状态
const isActive = (route: RouteItem) => {
  return route.path === $route.path
}

// 是否固定标签
const isAffix = (tag: RouteItem) => {
  return tag.meta && tag.meta.affix
}

// 更新标签
const updataView = (visitedViews, view) => {
  const latestView = visitedViews.slice(-1)[0]
  if (latestView) {
    $router.push(latestView)
  } else {
    if (view.name === 'Dashboard') {
      $router.replace({ path: '/redirect' + view.fullPath })
    } else {
      $router.push('/')
    }
  }
}

const closeSelectedTag = (view: RouteItem | any) => {
  store.dispatch('tags/deleteTagView', view).then((visitedViews) => {
    if (isActive(view)) {
      updataView(visitedViews, view)
    }
  })
}

const openMenu = (tag: RouteItem, e: any) => {
  console.log('openMenu', tag, e)
}

// 初始tags
const addTagsAction = () => {
  const { name } = $route
  if (name) {
    store.dispatch('tags/addTagView', $route)
  }
  return false
}
watch(
  () => $route.path,
  () => {
    addTagsAction()
  }
)

onMounted(() => {
  addTagsAction()
})
</script>

<style lang="less" scoped>
.tags-box {
  display: block;
  width: 100%;
  height: 35px;
  text-align: left;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
  .tag-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    height: 25px;
    line-height: 26px;
    color: #495060;
    background: #ffffff;
    border: 1px solid #d8dce5;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 0 8px;
    font-size: 12px;
    margin-top: 5px;
    margin-right: 6px;
    .el-icon-close {
      border-radius: 6px;
      width: 12px;
      height: 12px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      vertical-align: -2px;
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
    &.active {
      background-color: #07c160;
      color: #fff;
      border-color: #07c160;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
</style>
