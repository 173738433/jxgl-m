<template>
  <div class="App">
    <mt-header title="现场机械管理系统" fixed>
      <router-link to="/" slot="left">
        <mt-button><i class="icon iconfont icon-category"></i></mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="icon iconfont icon-lingdang"></i>
      </mt-button>
    </mt-header>
    <div class="nav">
      <p>
        地铁12号线建设工程<i
          @click="Structure"
          class="icon iconfont icon-arrow-down-copy"
        ></i>
      </p>
    </div>
    <div class="ipt">
      <input type="text" />
      <p class="ipt-l">待办事项</p>
      <p class="ipt-r">待审核机械</p>
    </div>
    <div class="content">
      <div class="content-box" v-for="(item, index) in tableDate" :key="index">
        <div class="text" @click="jump">
          <p class="teext-header">最新登记机械</p>
          <p class="introduce">
            <span>使用中</span>{{ item.machineryTypeName }}
            {{ item.specification }}
          </p>
          <p class="type">
            {{ item.projectEquipmentCode }}<span>大型</span><i>信息为完善</i>
          </p>
          <div class="date">
            <p>大北~大南</p>
            <p>进场日期：2020-10-19</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getreportForm } from "@/assets/common/httpApi";
export default {
  name: "App",
  data() {
    return {
      tableDate: {},
    };
  },
  components: {},
  methods: {
    async getreportForm() {
      let analysisData = await getreportForm();
      this.tableDate = analysisData.data.result.content;
      console.log(analysisData.data.result.content);
    },
    Structure() {
      this.$router.push("/structure");
    },
    jump() {
      this.$router.push("/mechanical");
    }
  },
  mounted() {
    this.getreportForm();
  },
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
.App {
  width: 100%;
  height: 100%;
  background: #26a2ff;
  .nav {
    width: 100%;
    height: 110px;
    background: #26a2ff;
    overflow: hidden;
    p {
      color: #fff;
      font-size: 29px;
      margin-top: 53px;
      flex-shrink: 0;
      text-align: center;
      margin-top: 75px;
    }
  }

  .ipt {
    width: 95%;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border-radius: 23px;
    }
    .ipt-l {
      font-size: 28px;
      position: absolute;
      top: 25px;
      left: 27px;
    }
    .ipt-r {
      font-size: 28px;
      color: #e52b28;
      position: absolute;
      top: 25px;
      right: 27px;
    }
  }
  .content {
    margin-top: 20px;
    .content-box {
      width: 100%;
      height: 312px;
      padding: 0px 21px;
      box-sizing: border-box;
      .text {
        width: 100%;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        border-bottom: solid 1px #ccc;
        background: #fff;

        .teext-header {
          font-size: 30px;
          display: flex;
        }
        .introduce {
          font-size: 30px;
          display: flex;

          margin-top: 66px;
          > span {
            padding: 7px;
            background: #3285f5;
            color: #fff;
            border-radius: 15px;
            line-height: 30px;
          }
        }
        .type {
          margin-top: 20px;
          font-size: 19px;
          color: #8c8c8a;
          display: flex;
          > span {
            padding: 0px 15px;
            border: solid 1px #ce2949;
            color: #ce2949;
            border-radius: 20px;
            margin: 0px 11px;
          }
          > i {
            padding: 0px 14px;
            color: #a1a1a1;
            border: solid 1px #a1a1a1;
            border-radius: 20px;
          }
        }
        .date {
          display: flex;
          justify-content: space-between;
          margin-top: 28px;
          p {
            font-size: 27px;
          }
        }
      }
    }
  }
}
</style>
