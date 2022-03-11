<template>
  <div class="nav-bar">
    <el-icon size="1.5em" style="margin:0 15px;" v-if="isFold" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-if="!isFold" />
    </el-icon>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
export default defineComponent({
  props: {},
  components: {
    Expand,
    Fold
  },
  setup(props, { emit }) {
    const isFold = true
    return {
      isFold
    }
  }
})
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

</style>
