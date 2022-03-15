<template>
  <div v-if="!route.hidden">
    <!-- 只有一个子菜单集合 || || 递归后没有子菜单  -->
    <template v-if="(route.children && route.children.length == 1) || !route.children">
      <template v-if="(route.children && route.children.length == 1)" >
        <el-menu-item :index="resolvePath(route.path)">
          <template #title>
            <MenuItem :icon="route.children[0].meta.icon" :title="route.children[0].meta.title" />
          </template>
        </el-menu-item>
      </template>
      <template v-if="!route.children">
        <el-menu-item :index="resolvePath(route.path)">
          <template #title>
            <MenuItem :icon="route.meta.icon" :title="route.meta.title" />
          </template>
        </el-menu-item>
      </template>
    </template>
    <template v-else>
      <el-sub-menu :index="resolvePath(route.path)">
        <template #title>
          <MenuItem :icon="route.meta.icon" :title="route.meta.title" />
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
    </template>
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
    }
  },
  components: {
    MenuItem,
    MenuItemLink
  },
  setup(props) {
    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      console.log('------------', props.basePath)
      return path.resolve(props.basePath, routePath)
    }
    return {
      resolvePath
    }
  }
})
</script>
