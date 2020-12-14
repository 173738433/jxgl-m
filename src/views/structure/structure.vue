<template>
  <div class="structure">
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
      <input type="text" name="" id="" placeholder="按名称过滤" />
    </div>
    <div class="content">
      <div class="content-header">
        <i class="icon iconfont icon-shangjiantoushixin" @click="PackUp"></i>
        <p class="title active">地铁12号线建设工程</p>
      </div>
      <div
        class="content-child"
        v-for="(item, index) in ChildDate"
        :key="index"
        v-show="b"
      >
        <div class="box">
          <i
            class="icon iconfont icon-shangjiantoushixin"
            @click="PackUpChild"
          ></i>
          <p class="child">{{ item.name }}</p>
        </div>
        <div
          class="child-text"
          v-for="(item, index) in item.childNodes"
          :key="index"
          v-show="c"
        >
          <p @click="detailPage">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { getTreeDataa } from "@/assets/common/httpApi";
import { getreportForm, tree } from "@/assets/common/httpApi";

export default {
  name: "Structure",
  data() {
    return {
      ChildDate: [],
      b: true,
      c: true,
    };
  },
  async mounted() {
    this.getTreeDatas();
  },
  methods: {
    async getTreeDatas() {
      let res = await tree();
      this.ChildDate = res.data.result.childNodes[0].childNodes;
      console.log(this.ChildDate);
    },
    PackUp() {
      this.b = !this.b;
    },
    PackUpChild() {
      this.c = !this.c;
    },
    detailPage() {
      this.$router.push("/particulars");
    },
  },
};
</script>

<style lang="less">
.structure {
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
  .content {
    width: 100%;
    height: 1000px;
    padding: 54px 0px 0px 57px;
    box-sizing: border-box;
    .content-header {
      display: flex;
      .title {
        font-size: 28px;
        display: flex;
      }
      .active {
        color: #1b8ef1;
      }
      i {
        margin-right: 10px;
      }
    }
    .content-child {
      //   display: flex;
      margin-top: 65px;
      margin-left: 40px;
      .box {
        display: flex;
        .title {
          font-size: 28px;
          display: flex;
        }

        i {
          margin-right: 10px;
        }
      }

      .child-text {
        margin-left: 122px;
        p {
          margin-top: 54px;
          margin-bottom: 40px;
          display: flex;
        }
      }
    }
  }
}
.warp {
  width: 100%;
  height: 60px;
}
</style>