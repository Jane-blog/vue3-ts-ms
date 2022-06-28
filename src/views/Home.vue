<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { userLogin } from '@/service/api/user'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  beforeCreate() {
    console.log('----beforeCreate----home')
  },
  created() {
    console.log('----created----home')
    const parma = { username: 'admin', passwors: 123456 }
    userLogin(parma).then((res: any) => {
      console.log('----userLogin', res)
    })
  },
  setup() {
    console.log('----setup----home')
  }
})
</script>
