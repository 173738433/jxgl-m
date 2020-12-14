<template>
  <div class="MechanicalType">
    <div class="warp"></div>
    <mt-header title="组织结构" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="icon iconfont icon-lingdang"></i>
      </mt-button>
    </mt-header>
    <div class="ipt-box">
      <input type="text" name="" id="" placeholder="搜索机械名称" />
    </div>
  </div>
</template>

<script>
import { postMechanicalType } from "@/assets/common/httpApi";
export default {
  name: "MechanicalType",
  data() {
    return {
      MechanicalTypeData: this.$route.query.data || [],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
input,
button {
  outline: none;
  border: none;
}
i {
  font-style: normal;
}
.MechanicalType {
  .ipt-box {
    width: 100%;
    height: 90px;
    padding: 17px;
    box-sizing: border-box;
    background: #f3f0fb;
    margin-top: 20px;
    input {
      width: 100%;
      height: 100%;
      background: #fff;
      padding-left: 40%;
      box-sizing: border-box;
    }
  }
}
</style>