<template>
  <div class="examine">
    <div class="header">
      <div class="nav_left">
        <i class="icon iconfont icon-category  rollback" @click="go_back"></i>

        <span class="name">日常检查情况</span>
      </div>
      <div class="nav_right">
        <i class="iconfont icon-lingdang  small"></i>
      </div>
    </div>
    <div class="nav">
      <div class="name"  @click="cur=0"  :class="{active:cur==0}">
        今日任务
      </div>
      <div class="name"  @click="cur=1" :class="{active:cur==1}">
          周任务
      </div>
    </div>
    <div class="main"  v-show="cur==0">
        <div class="content">
              <div class="title">
                    <p>盾构机日常检查表</p>
                    <p>执行中(0/16)</p>
              </div>
              <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
              <div class="more">
                    <div class="Show_more">
                         更多信息
                    </div>
              </div>
        </div>
          <div class="content">
              <div class="title">
                    <p>盾构机日常检查表</p>
                    <p>执行中(0/16)</p>
              </div>
              <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
              <div class="more">
                    <div class="Show_more">
                         更多信息
                    </div>
              </div>
        </div>
    </div>

    <div class="mains"  v-show="cur==1">
                <div class="schedule">
                        <p>  2020.12.14-2020.12.20(本周) </p>
                        <p>只看未完成</p>
                </div>
             <div class="content">
              <div class="title">
                    <p>盾构机日常检查表</p>
                    <p>执行中(0/16)</p>
              </div>
              <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
              <div class="more">
                    <div class="Show_more">
                         更多信息
                    </div>
              </div>
        </div>
          <div class="content">
              <div class="title">
                    <p>盾构机日常检查表</p>
                    <p>执行中(0/16)</p>
              </div>
              <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
                 <div class="inspection">
                    <div class="inspection_top">
                           <div class="left">
                                 <div class="box">
                                    日检
                                   </div> 
                                   <span>20201412土压平衡盾构机</span>
                           </div>
                           <div class="right">
                              <p>待查</p>
                           </div>
                         
                    </div>
                    <div class="inspection_botton">
                            项目设备编码:DGJ-01-021-Z110
                    </div>
              </div>
              <div class="more">
                    <div class="Show_more">
                         更多信息
                    </div>
              </div>
        </div>
    </div>


    <div class="fool">
          + 日常检查记录
    </div>
  </div>
</template>

<script>
export default {
  name: "Examine",
  data() {
        return{
          cur: 0
        }
  },
  methods: {
    go_back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="scss">
html,body{
  height: 100%;
}
.examine {
  width: 100%;
  height: 100%;
  background-color: #edecec;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 97px;
    background: #2a87ff;
    display: flex;
    justify-content: space-between;
    padding: 25px 23px 25px 43px;
    box-sizing: border-box;
    color: #fff;
    .nav_left {
      width: 445px;
      height: 100%;
      // background-color: blueviolet;
      display: flex;
      .rollback {
        font-size: 48px;
      }
      .name {
        margin-left: 60px;
        font-size: 38px;
      }
    }
    .nav_right {
      width: 60px;
      height: 100%;
      // background-color: brown;
      .small {
        font-size: 39px;
      }
    }
  }
  .nav {
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
      justify-content: center;
      .name{
        width: 202px;
        height: 100%;
     
        text-align: center;
        line-height: 100px;
        // background-color: aqua;
          font-size: 30px;
      }

      .active{
        color: #3a85d5;
               border-bottom: 2px solid #266ee8;
      }
  }

  .main{
   flex: 1;
  // height: 900px;

  //  background-color: aqua;
  overflow: hidden;
  overflow-y: auto;
      .content{
        width: 100%;
        height: auto;
        padding: 45px 25px 20px 30px;
        box-sizing: border-box;
        background-color: #fff;
           margin-top: 17px;
      
        .title{
          width: 100%;
          height: 35px;
          // background-color: blue;
            display: flex;
        justify-content: space-between;
              font-size: 22px;
        }
        .inspection{
          width: 100%;
          height: 170px;
          // background-color: blueviolet;
          padding: 35px 0;
          box-sizing: border-box;
          border-bottom: solid 2px  #e9ebea;
          .inspection_top{
            width: 100%;
              height: 42px;
                // background-color: cadetblue;
                display: flex;
                justify-content: space-between;
                .left{
                  width: 402px;
                  height: 100%;
                  // background-color: rgb(18, 182, 127);
                  display: flex;
                  .box{
                    width: 84px;
                    height: 40px;
                    background-color: #d7e7ff;
                    border-radius: 8px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                  }
                  span{
                    font-size: 24px;
                    margin-left: 13px;
                  }

                }
                .right{
                  width: 55px;
                  height: 100%;
                          line-height: 42px;
                          font-size: 24px;
                          color: red;
                }
          } 
          .inspection_botton{
            width: 100%;
            height: 25px;
            font-size: 25px;
            margin-top: 25px;
          }
        }
        .more{
               width: 100%;
          // height: 104px;
          // background-color: blueviolet;
          padding: 30px 0;
          box-sizing: border-box;
               .Show_more {
                width: 180px;
                height: 46px;
                border-radius: 21px;
                margin: 0 auto;
                text-align: center;
                line-height: 46px;
                background-color: #ccc;
                font-size: 23px;
             
              }
        }
      }
  }
  
  .mains{
   flex: 1;
  // height: 900px;

  //  background-color: aqua;
  overflow: hidden;
  overflow-y: auto;
  .schedule{
    width: 100%;
    height: 105px;
    display: flex;
    justify-content: space-between;
    line-height: 105px;
      font-size: 25px;
      background-color: #fff;
      margin-top: 15px;
      padding: 0 30px 0 35px;
      box-sizing: border-box;

  }
      .content{
        width: 100%;
        height: auto;
        padding: 45px 25px 20px 30px;
        box-sizing: border-box;
        background-color: #fff;
           margin-top: 17px;
      
        .title{
          width: 100%;
          height: 35px;
          // background-color: blue;
            display: flex;
        justify-content: space-between;
              font-size: 22px;
        }
        .inspection{
          width: 100%;
          height: 170px;
          // background-color: blueviolet;
          padding: 35px 0;
          box-sizing: border-box;
          border-bottom: solid 2px  #e9ebea;
          .inspection_top{
            width: 100%;
              height: 42px;
                // background-color: cadetblue;
                display: flex;
                justify-content: space-between;
                .left{
                  width: 402px;
                  height: 100%;
                  // background-color: rgb(18, 182, 127);
                  display: flex;
                  .box{
                    width: 84px;
                    height: 40px;
                    background-color: #d7e7ff;
                    border-radius: 8px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                  }
                  span{
                    font-size: 24px;
                    margin-left: 13px;
                  }

                }
                .right{
                  width: 55px;
                  height: 100%;
                          line-height: 42px;
                          font-size: 24px;
                          color: red;
                }
          } 
          .inspection_botton{
            width: 100%;
            height: 25px;
            font-size: 25px;
            margin-top: 25px;
          }
        }
        .more{
               width: 100%;
          // height: 104px;
          // background-color: blueviolet;
          padding: 30px 0;
          box-sizing: border-box;
               .Show_more {
                width: 180px;
                height: 46px;
                border-radius: 21px;
                margin: 0 auto;
                text-align: center;
                line-height: 46px;
                background-color: #ccc;
                font-size: 23px;
             
              }
        }
      }
  }
  .fool{
      width: 100%;
      height: 90px;
      background-color: #2988fe;
      text-align: center;
      line-height: 90px;
      color: #fff;
      font-size: 36px;
  }
}
</style>
