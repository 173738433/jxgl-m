<template>
  <div class="particulars">
    <div class="warp"></div>
    <div class="header">
      <div class="warp"></div>
      <mt-header title="现场机械管理系统" fixed>
        <router-link to="/" slot="left">
          <mt-button><i class="icon iconfont icon-category"></i></mt-button>
        </router-link>
        <mt-button slot="right">
          <i class="icon iconfont icon-lingdang"></i>
        </mt-button>
      </mt-header>
      <div class="nav">
        <p>大北~大南<i class="icon iconfont icon-arrow-down-copy"></i></p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-l">日常检查</div>
      <div class="footer-m" @click="SetToSaveSkip">
        <mt-palette-button content="+" class="add">
          <div class="my-icon-button"></div>
        </mt-palette-button>
      </div>
      <div class="footer-r">吊装作业</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Particulars",
  data() {
    return {};
  },
  methods: {
    SetToSaveSkip() {
      this.$router.push("/SetToSave");
    },
  },
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
.particulars {
  .header {
    .nav {
      width: 100%;
      height: 110px;
      background: #26a2ff;
      overflow: hidden;
      p {
        color: #fff;
        font-size: 29px;
        margin-top: 53px;
        text-align: center;
      }
    }
  }
  .footer {
    width: 100%;
    height: 136px;
    background: #f6f6f6;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    .footer-l {
      margin-left: 60px;
      color: #337fff;
      font-size: 43px;
      line-height: 136px;
    }
    .footer-m {
      width: 200px;
      height: 200px;
      background: #f6f6f6;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -5%);
      .add {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -5%);
      }
    }
    .footer-r {
      margin-right: 60px;
      color: #337fff;
      font-size: 43px;
      line-height: 136px;
    }
  }
}
.warp {
  width: 100%;
  height: 40px;
}
</style>