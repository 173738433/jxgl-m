<template>
  <div class="particulars">
    <div class="header">
      <div class="warp"></div>
      <mt-header title="现场机械管理系统" fixed>
        <router-link to="/" slot="left">
          <mt-button>
            <i class="icon iconfont icon-category"> </i>
          </mt-button>
        </router-link>
        <mt-button slot="right">
          <i class="icon iconfont icon-lingdang"></i>
        </mt-button>
      </mt-header>
      <div class="nav">
        <p>大北~大南<i class="icon iconfont icon-arrow-down-copy"></i></p>
      </div>
      <nut-cell
        isLink
        title="展示弹出层"
        @click.native="show = true"
        :showIcon="true"
      >
        <i class="icon iconfont icon-category"></i>
      </nut-cell>
      <nut-popup
        :style="{ width: '80%', height: '100%' }"
        position="right"
        v-model="show"
      >
        <div class="pop-up">
          <dl>
            <dt>状态</dt>
            <dd>
              <p>未申报</p>
              <p>待审核</p>
              <p>使用中</p>
              <p>已停用</p>
              <p>正在维修</p>
              <p>已退场</p>
            </dd>
          </dl>
          <dl>
            <dt>属性</dt>
            <dd>
              <p>特种机械</p>
              <p>大型机械</p>
              <p>其他机械</p>
            </dd>
          </dl>
          <dl>
            <dt>来源</dt>
            <dd>
              <p>自由</p>
              <p>租凭</p>
              <p>分包自带</p>
            </dd>
          </dl>
        </div>
      </nut-popup>
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
    return {
      show: false,
    };
  },
  methods: {
    SetToSaveSkip() {
      this.$router.push("/SetToSave");
    },
    showPopup() {
      this.show = true;
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
    .pop-up {
      width: 100%;
      height: 100%;
      padding: 50px;
      box-sizing: border-box;
      dl {
        dt {
          margin-top: 50px;
          font-size: 26px;
        }
        dd {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          p {
            padding: 14px 30px;
            border-radius: 30px;
            background: #f5f7f4;
            color: #000;
            font-size: 25px;
            margin-top: 40px;
          }
        }
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