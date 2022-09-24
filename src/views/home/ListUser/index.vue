<template>
  <div id="ListUser">
    <transition name="boxs">
      <PlanList v-if="PlanListFlage" @changeMAx="changemasg"></PlanList>
    </transition>

    <!-- 数据模块 -->
    <div class="ListObj">
      <div class="boxs">
        <!-- 轮播图盒子 -->
        <div class="swiper-container" ref="floor1Swiper">
          <!-- 轮播图图片 -->
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(itme, index) in List"
              :key="index"
            >
              <div class="List">
                <!-- 顶部日期 -->
                <div class="List-top">
                  <ul>
                    <li>
                      <p>{{ itme.date.slice(0, 10) }}</p>
                    </li>
                    <li>
                      <span
                        class="iconfont icon-fanhui"
                        @click="PlanListFlageShow(itme)"
                        >&#xe602;</span
                      >
                    </li>
                  </ul>
                </div>

                <!-- 底部内容 -->
                <div class="List-button">
                  <div class="list-box">
                    <ul>
                      <li
                        :style="`background:${items.bgc};`"
                        v-for="(items, index) in itme.arr"
                        :key="items.id"
                      >
                        <span>
                          <input type="checkbox" />
                        </span>
                        <span>
                          <p>{{ items.text }}</p>
                        </span>
                        <span>
                          <span
                            class="iconfont icon-delete"
                            @click="DeleteList(index)"
                            >&#xe600;</span
                          >
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->

          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
import PlanList from "@/views/PlanList";

export default {
  name: "ListUser",
  data() {
    return {
      PlanListFlage: false,
      List: {},
    };
  },

  methods: {
    changemasg(value) {
      // console.log("我接收了子组件传递的参数", value);
      this.PlanListFlage = value;

      this.getList();

      this.$emit("hhh");
    },
    getList() {
      //获取本地的数据
      let s = JSON.parse(localStorage.getItem("List")).List.arr || {};
      let arr = [];
      s.forEach((item, index) => {
        arr.unshift(item);
      });

      this.List = arr;
    },

    //控制数据
    PlanListFlageShow(value) {
      // console.log(value);

      //每次点击的时候获取时间ID 进行本地化存储，
      localStorage.setItem("dateId", JSON.stringify({ date: `${value.date}` }));

      //显示数据列表页面
      this.PlanListFlage = true;
    },

    //点击的时候获取索引值如何进行本地删除
    DeleteList(index) {
      console.log(index);
      //获取时间id进行删除
      let dateId = JSON.parse(localStorage.getItem("dateId"));
      console.log(dateId);
      // //删除action方法
      this.$store.dispatch("user/DeleteList", { index, dateId });
      // this.List = this.getList() || {};
    },
  },

  mounted() {
    this.getList();

    //轮播图模块
    new Swiper(this.$refs.floor1Swiper, {
      // direction: "vertical", // 垂直切换选项
      loop: false, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: false, //设置是否可以点击小球
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },

  components: {
    PlanList,
  },
};
</script>



<style lang="less" scoped>
.ListUser {
  width: 100%;
  height: 750px;
}

.ListObj {
  width: 100%;
  // border: 1px solid red;

  .boxs {
    .List {
      width: 90%;
      height: auto;
      background: rgba(rgb(255, 255, 255));
      margin: 0 auto;
      border-radius: 60px;
      // border: 1px solid red;

      //顶部
      .List-top {
        width: 100%;
        height: 100px;
        // border: 1px solid red;

        ul {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          // border: 1px solid red;

          li {
            // border: 1px solid red;
            list-style: none;
            line-height: 100px;
          }

          li:nth-child(1) {
            flex: 2;
            text-align: left;

            p {
              font-size: 24px;
              padding-left: 30px;
            }
          }

          li:nth-child(2) {
            flex: 1;
            text-align: right;

            .icon-fanhui {
              font-size: 40px;
              padding-right: 30px;
            }
          }
        }
      }

      //底部
      .List-button {
        width: 90%;
        margin: 0 auto;
        padding-bottom: 30px;
        .list-box {
          width: 100%;
          height: 600px;
          // border: 1px solid rgb(123, 255, 0);
          overflow: auto;
          border-radius: 20px;

          ul {
            width: 100%;
            // border: 1px solid blue;

            li {
              width: 100%;
              height: 126px;
              // box-shadow: 0vw 0vw 4vw #4ba4ff;
              background: #74b9ff;
              border-radius: 26px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 40px;

              span {
                height: 100%;
                padding: 6px;
                color: #fff;
              }

              span:nth-child(1) {
                flex: 0.5;

                input {
                  display: block;
                  width: 30px;
                  height: 30px;
                  margin-top: 40px;
                  margin-left: 20px;
                  border-radius: 20px;
                }
              }

              span:nth-child(2) {
                flex: 3;
                width: 100%;
                height: 100px;

                p {
                  width: 100%;
                  height: 70px;
                  font-size: 24px;
                }

                span {
                  width: 100%;
                  height: 20px;
                  font-size: 14px;
                }
              }

              span:nth-child(3) {
                flex: 0.5;
                // overflow: hidden;

                span {
                  float: right;
                  font-size: 36px;
                  margin-top: 28px;
                  margin-right: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes boxs {
  //起始
  from {
    transform: translateX(1000px);
  }
  //结束
  to {
    transform: translateX(0px);
  }
}

//开始
.boxs-enter-active {
  animation: boxs 0.5s;
}
//结束
.boxs-leave-active {
  animation: boxs 0.5s reverse;
}
</style>