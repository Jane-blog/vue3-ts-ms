<template>
  <div class="login-box">
    <div class="login-container">
      <h4>vue3 + TS 项目</h4>
      <form>
        <div class="user-box">
          <input
            key="username-v3"
            v-model="accountFrom.username"
            autocomplete="new-password"
            type="text"
            name="username"
            required
          />
          <label>账号</label>
        </div>
        <div class="user-box">
          <input
            key="password-v3"
            v-model="accountFrom.password"
            autocomplete="new-password"
            type="password"
            name="password"
            required
          />
          <label>密码</label>
        </div>
        <a href="#" @click="loginAction">
          <span />
          <span />
          <span />
          <span />
          登录
        </a>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { userLogin } from '@/service/api/user'
import { reactive } from 'vue'
import { toRaw } from '@vue/reactivity'
import { useStore } from '@/store/index'
import type { Account } from './types'
const store = useStore()
const accountFrom = reactive<Account>({ username: 'admin', password: '123456' })
// 登陆
const loginAction = () => {
  // console.log('登陆', toRaw(accountFrom))
  const account = toRaw(accountFrom)
  const username = account.username
  const password = account.password
  // 登录
  store.dispatch('user/userLoginAction', { username, password })
}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/icon_login_bg.jpg');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px 40px 80px 40px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-container h4 {
  margin: 0 0 30px;
  padding: 0;
  color: #606266;
  text-align: center;
}

.login-container form {
  position: relative;
}

.login-container .user-box {
  position: relative;
}

.login-container .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  color: #606266;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #909399;
  outline: none;
  background: transparent;
}
.login-container .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 14px;
  color: #606266;
  pointer-events: none;
  transition: 0.5s;
}

.login-container .user-box input:focus ~ label,
.login-container .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #409eff;
  font-size: 12px;
}

.login-container form a {
  position: absolute;
  right: 0;
  display: inline-block;
  padding: 10px 20px;
  color: #409eff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
}

.login-container a:hover {
  background: #409eff;
  color: #ffffff;
  border-radius: 5px;
}

.login-container a span {
  position: absolute;
  display: block;
}

.login-container a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #409eff);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-container a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #409eff);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-container a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #409eff);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-container a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #409eff);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
