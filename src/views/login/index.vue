<template>
  <div class="login-box">登陆</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userLogin } from '@/service/api/user'
export default defineComponent({
  name: 'Login',
  beforeCreate() {
    console.log('----beforeCreate----')
  },
  created() {
    console.log('----created----')
    const parma = { username: 'admin', passwors: 123456 }
    userLogin(parma).then((res: any) => {
      console.log('----userLogin', res)
    })
  },
  setup() {
    console.log('----setup----')
  }
})
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/images/icon_login_bg.svg.svg');
}
</style>
