<template>
  <div class="everyday">
    <div class="warp"></div>
    <mt-header title="日常检查情况" fixed>
      <router-link to="/" slot="left">
        <mt-button><i class="icon iconfont icon-category"></i></mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="icon iconfont icon-lingdang"></i>
      </mt-button>
    </mt-header>
    <div class="everyday_nav">
      <ul>
        <li>今日任务</li>
        <li>周任务</li>
      </ul>
    </div>
    <div class="everyday_examine">
      <div class="everyday_examine_title"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>