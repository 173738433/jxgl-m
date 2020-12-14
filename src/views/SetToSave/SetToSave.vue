<template>
  <div class="SetToSave">
    <div class="warp"></div>
    <mt-header title="新增机械'" fixed>
      <router-link to="/" slot="left">
        <mt-button><i class="icon iconfont icon-category"></i></mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="icon iconfont icon-lingdang"></i>
      </mt-button>
    </mt-header>
    <div class="content">
      <div class="hint">
        <div class="hint-box">
          <dl>
            <dd>
              <p><span>*</span>红色星号为必填项</p>
              <p><span>*</span>蓝色星号为完整项</p>
            </dd>
            <dt>
              <p>x</p>
            </dt>
          </dl>
        </div>
      </div>
      <div @click="chooseType">
        <mt-cell title="机械类别" is-link>
          <span style="color: green">请选取</span>
        </mt-cell>
      </div>
      <mt-cell title="机械名称-型号" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <div class="coding">
        <mt-field label="项目设备编码">
          <p class="coding-text">请填写</p>
        </mt-field>
      </div>
      <mt-cell title="机械来源" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <mt-cell title="产权单位" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <mt-cell title="车牌号" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <div class="coding">
        <mt-field label="车牌号">
          <p class="coding-text">请填写</p>
        </mt-field>
      </div>
      <div class="coding">
        <mt-field label="现场照片"></mt-field>
        <div class="Upload">
          <div class="picture">
            <span>
              <i class="icon iconfont icon-shangchuanzhaopian"></i>
            </span>
            <p>上传照片</p>
          </div>
          <p>最多上传10张照片</p>
        </div>
      </div>
      <mt-field
        label="实际进场日期"
        placeholder=""
        type="date"
        class="entry"
      ></mt-field>
      <mt-field label="拟退场日期" placeholder="" type="date"></mt-field>
      <mt-cell title="设备管理员" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <mt-cell title="使用单位" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <mt-cell title="安装拆除单位" is-link>
        <span style="color: green">请选取</span>
      </mt-cell>
      <div class="use">
        <p>用途</p>
      </div>
      <div class="btn-save">
        <button>保存并继续</button>
      </div>
    </div>
  </div>
</template>

<script>
import { postMechanicalType } from "@/assets/common/httpApi";
export default {
  name: "SetToSave",
  data() {
    return {
        ChildDate:{}
    };
  },
  methods: {
    async chooseType() {
      //   this.$router.push("/MechanicalType");
      let res = await postMechanicalType();
    //   console.log(res);
    //   this.ChildDate = res.data.result;
      this.$router.push({
        path: "/MechanicalType",
        ChildDate: { data: res.data.result },
      });
      console.log(res.data.result);
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
.SetToSave {
  width: 100%;
  height: 100%;
  background: #f5f7f4;
  .content {
    margin-top: 20px;
    .hint {
      width: 100%;
      height: 50px;
      padding: 0px 20px;
      box-sizing: border-box;
      margin-top: 35px;
      margin-bottom: 10px;
      background: #fff;
      .hint-box {
        width: 100%;
        height: 100%;
        border: solid 2px #dbbb6c;
        border-radius: 10px;
        background: #ffeed7;
        dl {
          display: flex;
          justify-content: space-between;
          dt {
            display: flex;
            p {
              line-height: 50px;
              margin-right: 28px;
            }
          }
          dd {
            display: flex;

            p {
              line-height: 50px;
            }
            span {
              margin-left: 22px;
            }
          }
        }
      }
    }
    .mint-cell-text {
      float: left;
    }
    .coding {
      .coding-text {
        margin-right: 20px;
      }
      .Upload {
        width: 100%;
        height: 227px;
        padding-left: 60px;
        box-sizing: border-box;
        background: #fff;
        overflow: hidden;
        .picture {
          width: 162px;
          height: 110px;
          border: solid 1px #ccc;
          border-radius: 15px;
          margin-top: 48px;

          span {
            margin-top: 15px;
            display: block;
            i {
              font-size: 44px;
            }
          }

          > P {
            text-align: center;
          }
        }
        > p {
          margin-top: 23px;
          color: #8a8a8a;
          display: flex;
        }
      }
    }
    .mint-cell-wrapper {
      border-bottom: solid 1px #ccc;
    }
    .entry {
      margin-top: 20px;
    }
    .use {
      width: 100%;
      height: 220px;
      background: #fff;
      overflow: hidden;
      > p {
        font-size: 30px;
        margin: 32px 0px 0px 54px;
        display: flex;
        color: #b5b5b5;
      }
    }
    .btn-save {
      width: 100%;
      height: 93px;
      button {
        width: 100%;
        height: 100%;
        background: #2988fe;
        color: #fff;
        font-size: 37px;
        border-radius: 15px;
      }
    }
  }
}
</style>