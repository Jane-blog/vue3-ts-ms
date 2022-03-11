<template>
  <el-menu-item index="" @click="openLink">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem'
import { isExternal } from '@/common/utils'
const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})
const openLink = () => {
  if (isExternal(props.route.path)) {
    window.open(props.route.path, '_blank')
  } else {

  }
}
</script>
