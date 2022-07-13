<template>
  <div class="dashboard-container">
    <div class="user-box">
      <img
        class="log-box"
        src="@/assets/images/icon_logo.png"
        alt="管理端模板"
      />
      <div class="user-tip-box">
        <div style="font-size: 16px; height: 20px; line-height: 20px">
          {{ getTimeState() }}
        </div>
        <div
          style="
            font-size: 14px;
            color: #606266;
            height: 30px;
            line-height: 35px;
          "
        >
          欢迎使用vue3+ts项目模板~
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getTimeState = () => {
  const day = new Date()
  const hr: number = day.getHours()
  let why = ''
  if (parseInt(hr, 10) === 5 || parseInt(hr, 10) === 6) {
    why = '早晨起来,拥抱太阳，让身体充满灿烂的阳光，满满的正能量！'
  }
  if (parseInt(hr, 10) === 7) {
    why = '吃过早饭了吗？不要空腹哦！'
  }
  if (parseInt(hr, 10) === 8 || parseInt(hr, 10) === 9) {
    why = '早上好！忙碌的一天开始了！'
  }
  if (parseInt(hr, 10) === 10 || parseInt(hr, 10) === 11) {
    why = '上午好！工作再忙也要记得动一动，扭扭腰动动肩，活络筋骨！'
  }
  if (parseInt(hr, 10) === 12) {
    why = '中午好！你吃饭了吗？'
  }
  if (parseInt(hr, 10) === 13) {
    why = '下午好，准备准备要上班了！'
  }
  if (parseInt(hr, 10) === 14) {
    why = '下午好，喝杯咖啡继续工作！'
  }
  if (parseInt(hr, 10) === 15 || parseInt(hr, 10) === 16) {
    why = '下午好！工作再忙也要记得动一动，扭扭腰动动肩，活络筋骨！'
  }
  if (parseInt(hr, 10) === 17 || parseInt(hr, 10) === 18) {
    why = '下午好！今天都完成了哪些工作呢？'
  }
  if (parseInt(hr, 10) === 19) {
    why = '晚上好！吃晚饭了吗？'
  }
  if (
    parseInt(hr, 10) === 20 ||
    parseInt(hr, 10) === 21 ||
    parseInt(hr, 10) === 22
  ) {
    why = '辛苦一天，找个电影看看放松下吧'
  }
  if (
    parseInt(hr, 10) === 23 ||
    parseInt(hr, 10) === 24 ||
    parseInt(hr, 10) === 1 ||
    parseInt(hr, 10) === 2 ||
    parseInt(hr, 10) === 3 ||
    parseInt(hr, 10) === 4
  ) {
    why = '累了就躺下来好好休息，只有精力充沛才能奔向前程！'
  }
  return why
}
</script>

<style lang="less" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
}

.user-box {
  display: flex;
  background-color: #f0f2f5;
  padding: 10px;
  .log-box {
    width: 50px;
    height: 50px;
  }
  .user-tip-box {
    margin-left: 10px;
  }
}
</style>
