<template>
  <template v-if="isExternalRouter">
    <MenuItemLink :route="route" />
  </template>
  <template v-if="!route.hidden">
    <!-- 有多个children节点的时候 -->
    <el-sub-menu v-if="isChildrenMenu" :index="route.path">
      <template #title>
        <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
      </template>
      <!-- 递归渲染子菜单 -->
      <SidebarItem v-for="item in route.children" :key="item.path" :route="item"></SidebarItem>
    </el-sub-menu>
    <!-- 没有children或是只有一个节点的时候 -->
    <template v-else :index="route.children[0].path">
      <MenuItem :title="route.children[0].meta.title" :icon="route.children[0].meta.icon"> </MenuItem>
    </template>
  </template>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import MenuItem from './MenuItem'
import MenuItemLink from './MenuItemLink'
import { isExternal as external } from '@/common/utils'

const props = defineProps({
  route: {
    // 当前路由（此时的父路由）
    type: Object,
    required: true
  }
})
const isChildrenMenu = computed(() => {
  console.log('-----------')
  console.log(props.route) 
  // return props.route.children && props.route.children.length 
  if (props.route.children && props.route.children.length) {
    if (props.route.children.length === 1) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
})

// 是否为外部路由
const isExternalRouter = computed(() => {
  return external(props.route.path)
})
</script>
