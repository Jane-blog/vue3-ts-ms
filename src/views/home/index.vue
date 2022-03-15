<template>
  <div>
    home
    <el-progress :percentage="percentage" color="#6f7ad3"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      percentage: 0
    }
  },
  created() {

  },
  methods: {
    requestAction() {
      const that = this
      const time = setInterval(function() {
        that.percentage += 10
      }, 10000)
      // 网络请求方法回调后 调用
      clearInterval(time)
      that.percentage = 100
    }

  }
}
</script>

<style scoped>

</style>
