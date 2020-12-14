<template>
  <div class="mechanical">
    <mt-header title="现场机械管理系统" fixed>
      <router-link to="/" slot="left">
        <mt-button><i class="icon iconfont icon-category"></i></mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="icon iconfont icon-lingdang"></i>
      </mt-button>
    </mt-header>
    <div class="particulars_top">
      <div class="content_box_one">
        <span class="state">使用中</span>
        <span class="machineryName">土压平衡盾构机</span>
        <span class="specification">直径6m</span>
      </div>
      <div class="content_box_two">
        <span class="projectEquipmentCode">DGJ-01-019-Z107</span>
        <span class="type">大型</span>
        <span class="message">信息未完善</span>
      </div>
      <div class="content_box_three">
        <span>所属工点：<em>聚~糖</em></span>
        <span>进场日期：<em>2020-12-8</em></span>
      </div>
      <div class="content_box_four">
        <span>申报人：<em>皮克斯</em></span>
        <span>申报时间：<em>2020-12-8 19:02</em></span>
      </div>
    </div>
    <div class="particulars_center">
      <ul>
        <li>设备信息</li>
        <li>规格型号</li>
        <li>项目设备编码</li>
        <li>属性</li>
      </ul>
    </div>
    <div class="particulars_content">
      <div class="particulars_content_box">
        <div class="particulars_content_box_t">
          <span>基本信息</span>
        </div>
        <div class="particulars_content_box_c">
          <div class="particulars_content_box_c_l">
            <span>设备信息</span>
            <span>规格型号</span>
            <span>项目设备编码</span>
            <span>属性</span>
          </div>
          <div class="particulars_content_box_c_r">
            <span>{{ childDate.machineryName }}</span>
            <span>{{ childDate.specification }}</span>
            <span>{{ childDate.projectEquipmentCode }}</span>
            <span>特</span>
          </div>
          <div class="particulars_content_box_b">
            <span>查看更多</span>
            <i class="icon iconfont icon-xiangxia"></i>
          </div>
        </div>
      </div>
      <div class="particulars_content_box">
        <div class="particulars_content_box_t">
          <span>使用信息</span>
        </div>
        <div class="particulars_content_box_c">
          <div class="particulars_content_box_c_l">
            <span>实际进场日期</span>
            <span>拟退场日期</span>
            <span>设备管理员</span>
            <span>使用单位</span>
          </div>
          <div class="particulars_content_box_c_r">
            <!-- <span>{{ this.childDate.machineryDetail.actualApproachDate }}</span>  -->
            <span></span>
            <!-- <span>{{childDate.machineryDetail.managerName}}</span> -->
            <!-- <span>{{childDate.machineryDetail.useUnitName}}</span> -->
          </div>
          <div class="particulars_content_box_b">
            <span>查看更多</span>
            <i class="icon iconfont icon-xiangxia"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMechanical } from "@/assets/common/httpApi";
export default {
  data() {
    return {
      childDate:{},
      machineryDetail:{},
      actualApproachDate:''
    };
  },
  methods: {
    async getMechanical() {
      let res = await getMechanical();
      this.childDate = res.data.result;
      console.log(this.childDate);
    },
  },
  mounted() {
    this.getMechanical()
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
em {
  font-style: normal;
}
li{
    list-style: none;
}
.particulars_top {
  width: 96%;
  height: 220px;
  margin: 50px auto;
  text-align: left;
  .content_box_three,
  .content_box_four {
    margin-top: 20px;
    font-size: 28px;
    color: #888;
    span {
      display: inline-block;
      width: 50%;
    }
  }
}
.particulars_center {
  ul {
    display: flex;
    justify-content: space-evenly;
    font-size: 30px;
    height: 96px;
    line-height: 96px;
  }
}
.particulars_content {
  flex: 1;
  background-color: #eee;
  text-align: left;
  .particulars_content_box {
    width: 96%;
    height: 464px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 30px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    .particulars_content_box_t {
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      font-weight: 600;
    }
    .particulars_content_box_c {
      height: 242px;
      width: 100%;
      .particulars_content_box_c_l {
        width: 40%;
        height: 242px;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 30px;
      }
      .particulars_content_box_c_r {
        width: 60%;
        height: 242px;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 30px;
      }
    }
    .particulars_content_box_b {
      width: 252px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50px;
      background-color: #eee;
      font-size: 26px;
      position: absolute;
      left: 50%;
      margin-left: -126px;
      bottom: 26px;
      i {
        font-size: 26px;
      }
    }
  }
}
</style>