<template>
  <div v-if="!route.hidden">
    <template v-if="hasOneShowingChild(route.children,route) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <MenuItemLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="[{'submenu-title-noDropdown':!isNest}, {'menu-tag': !onlyOneChild.meta.icon}]">
          <MenuItem :icon="onlyOneChild.meta.icon||(route.meta&&route.meta.icon)" :title="onlyOneChild.meta.title"/>
        </el-menu-item>
      </MenuItemLink>
    </template>
    <el-sub-menu v-else ref="subMenu" :index="resolvePath(route.path)" popper-append-to-body>
      <template #title>
        <MenuItem v-if="route.meta" :icon="route.meta && route.meta.icon" :title="route.meta.title"/>
      </template>
      <SidebarItem
        v-for="child in route.children"
        :key="child.path"
        :is-nest="true"
        :route="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import path from 'path'
import { defineComponent } from 'vue'
import MenuItem from './MenuItem'
import MenuItemLink from './MenuItemLink'
import { isExternal } from '@/common/utils'
export default defineComponent({
  name: 'SidebarItem',
  props: {
    route: { // 当前路由（第一层的父路由）
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MenuItem,
    MenuItemLink
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
})
</script>
