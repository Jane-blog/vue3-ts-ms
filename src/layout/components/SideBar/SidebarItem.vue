<template>
  <div v-if="!route.hidden">
    <template v-if="hasOneShowingChild(route.children,route) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <MenuItemLink v-if="onlyOneChild.meta" :route="onlyOneChild" />
    </template>
    <el-menu-item-group v-else :index="resolvePath(route.path)" popper-append-to-body>
      <template #title>
        <MenuItem v-if="route.meta" :icon="route.meta && route.meta.icon" :title="route.meta.title" />
      </template>
      <sidebar-item
        v-for="child in route.children"
        :key="child.path"
        :is-nest="true"
        :route="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-menu-item-group>
  </div>
</template>

<script>
import path from 'path'
import { computed, defineComponent } from 'vue'
import MenuItem from './MenuItem'
import MenuItemLink from './MenuItemLink'
import { isExternal } from '@/common/utils'
export default defineComponent({
  props: {
    route: { // 当前路由（第一层的父路由）
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    MenuItem,
    MenuItemLink
  },
  setup(props) {
    var onlyOneChild = null
    const hasOneShowingChild = (children = [], parent) => {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }
    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }
    console.log('000000000000000000000')
    console.log(hasOneShowingChild(props.route.children, props.route))
    console.log(onlyOneChild)
    return {
      onlyOneChild,
      hasOneShowingChild,
      resolvePath
    }
  }
})
</script>
