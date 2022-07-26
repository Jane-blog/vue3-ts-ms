<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="
            item.redirect === 'noRedirect' || index === levelList.length - 1
          "
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { compile } from 'path-to-regexp'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteItem } from '@/router/types'

const levelList: any = ref(null)
const $route = useRoute()
const $router = useRouter()

const isDashboard = (route: RouteItem) => {
  const name = route.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}
const pathCompile = (path: string) => {
  const { params } = $route
  const toPath = compile(path)
  console.log('-----------')
  return toPath(params)
}

const handleLink = (item: RouteItem) => {
  const { redirect, path } = item
  if (redirect) {
    $router.push(redirect)
    return
  }
  if (path) {
    $router.push(pathCompile(path))
  }
}

const getBreadcrumb = () => {
  let matched: any = $route.matched.filter(
    (item) => item.meta && item.meta.title
  )
  const first: any = matched[0]
  if (!isDashboard(first)) {
    matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(matched)
  }
  levelList.value = matched.filter(
    (item: RouteItem) => item.meta && item.meta.title
  )
}

watch(
  () => $route.path,
  () => {
    getBreadcrumb()
  },
  { immediate: true }
)
onBeforeMount(() => {
  getBreadcrumb()
})
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
