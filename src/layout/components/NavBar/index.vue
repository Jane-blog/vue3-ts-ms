<template>
  <div class="nav-bar">
    <!-- 导航搜索控制开关 -->
    <el-icon size="1.5em" style="margin:0 15px;" v-if="isFold" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-if="!isFold" />
    </el-icon>
    <!-- 面包屑导航 -->
    <Breadcrumb class="nav-breadcrumb"/>
    <!-- 下拉菜单 -->
    <div class="nav-righr-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/images/admin_avator.png" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                首  页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              <span style="display:block;">退  出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import Breadcrumb from '@/components/common/Breadcrumb'
import { useRoute, useRouter } from 'vue-router'
import { deleteCache } from '@/common/utils'
export default defineComponent({
  components: {
    Expand,
    Fold,
    Breadcrumb
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isFold = true
    const logout = () => {
      deleteCache('username')
      router.push(`/login?redirect=${route.fullPath}`).catch(err => {
        console.warn(err)
      })
    }
    const handleFoldClick = () => {

    }
    return {
      isFold,
      handleFoldClick,
      logout
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
  .nav-righr-menu {
    position: absolute;
    right: 15px;
    line-height: 50px;
    &:focus {
      outline: none;
    }
  }
}

</style>
