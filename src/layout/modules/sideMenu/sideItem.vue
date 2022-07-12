<template>
  <template v-if="!item.hidden">
    <!-- 一个子节点渲染 -->
    <el-menu-item
      v-if="onlyOneItem(item.children, item)"
      :index="resolvePath(onlyOneChild.path)"
    >
      <svg-icon :icon-class="onlyOneChild.meta.icon" :className="'side-icon'" />
      <template #title>
        <span class="menu-item-title">{{ onlyOneChild.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 多个子节点渲染 -->
    <el-sub-menu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template v-if="item.meta" #title>
        <svg-icon :icon-class="item.meta.icon" />
        <span class="menu-item-title">{{ item.meta.title }}</span>
      </template>
      <SideItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import path from 'path'
import { isExternal } from '@/utils/validate'
import type { RouteItem } from '@/router/types'
export default defineComponent({
  props: {
    item: {
      // 每一个router Item
      type: Object,
      required: true
    },

    isNest: {
      // 用于判断是不是子Item,设置响应的样式
      type: Boolean,
      default: false
    },
    basePath: {
      // 基础路径，用于拼接
      type: String,
      default: ''
    }
  },
  setup(props) {
    // 只有一个子节点路由
    let onlyOneChild: any = ref([])
    const onlyOneItem = (children = [], parent: RouteItem) => {
      const showingChildren = children.filter((item: RouteItem) => {
        if (item.hidden) {
          return false
        } else {
          onlyOneChild.value = item
          return true
        }
      })
      if (showingChildren.length === 1 && parent.alwaysShow) {
        return true
      }
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noChildren: true }
        return true
      }
      return false
    }
    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }
    return {
      onlyOneChild,
      onlyOneItem,
      resolvePath
    }
  }
})
</script>

<style lang="less" scoped>
.menu-item-title {
  margin-left: 12px;
}
</style>
