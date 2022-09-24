<template>
  <div class="PlanList">
    <StatueBar></StatueBar>

    <!-- 添加页面 -->

    <transition name="addLisr">
      <AddLlist
        v-if="addFlage"
        @AddShow="addFlage = false"
        @getList="getList"
      ></AddLlist>
    </transition>

    <div class="PlanList-top">
      <ul>
        <li>
          <!-- 返回按钮 -->
          <span class="iconfont icon-fanhui" @click="changeMAx">&#xe601;</span>
        </li>
        <li>
          <!-- 标语 -->
          <span>
            <h3>计划</h3>
            <h4>共{{ List.arr.length }}个内容</h4>
          </span>
        </li>
        <li>
          <!-- 添加按钮 -->
          <span class="iconfont icon-delete" @click="addFlage = true"
            >&#xe607;</span
          >
        </li>
      </ul>
    </div>

    <!-- 任务列表数据渲染 -->
    <div class="PlanList-botton">
      <ul>
        <li
          v-for="(item, index) in List.arr"
          :key="item.id"
          :style="`background:${item.bgc};`"
        >
          <span>
            <input type="checkbox" />
          </span>
          <span>
            <p>{{ item.text }}</p>
            <!-- <span style="font-size: 12px; color: garl">{{ item.date.slice(11,-1) }}</span> -->
          </span>

          <span>
            <span @click="DeleteList(index)" class="iconfont icon-fanhui"
              >&#xe600;</span
            >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import StatueBar from "@/components/statusBar";

//导入添加页面
import AddLlist from "@/views/AddLlist";

export default {
  name: "PlanList",
  data() {
    return {
      List: { arr: [] },
      addFlage: false,
    };
  },

  methods: {
    //01:自定义事件关闭该页面
    changeMAx() {
      this.$emit("changeMAx", false);
    },

    //02：获取数据列表并渲染出来将数据转存到data中进行渲染读取
    RenderList() {
      //获取数据数据ID
      let dateId =
        JSON.parse(localStorage.getItem("dateId")).date.slice(0, 10) || {};

      //获取数据列表
      let List = JSON.parse(localStorage.getItem("List"));

      //循环遍历数据获取符合条件的数据
      this.List = List.List.arr.find((item, index) => {
        if (item.date.indexOf(dateId) != -1) {
          return item;
        }
      });
    },

    //点击的时候获取索引值如何进行本地删除
    DeleteList(index) {
      //获取时间id进行删除
      let dateId = JSON.parse(localStorage.getItem("dateId"));
      //删除action方法
      this.$store.dispatch("user/DeleteList", { index, dateId });
      this.RenderList();
    },

    getList() {
      //调用获取数据列表的数据
      this.RenderList();
    },
  },

  mounted() {
    //调用获取数据列表的数据
    this.RenderList();
  },

  components: {
    StatueBar,
    AddLlist,
  },
};
</script>



<style lang="less" scoped>
.PlanList {
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: auto;
  // border: 1px solid red;

  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  // //顶部
  .PlanList-top {
    width: 100%;
    height: 300px;
    // border: 1px solid red;
    ul {
      width: 90%;
      height: 300px;
      // border: 1px solid red;
      margin: 0 auto;
      display: flex;
      align-items: center;
      li {
        list-style: none;
        // height: 100%;
        // border: 1px solid red;
      }
      li:nth-child(1) {
        flex: 0.5;
        span {
          font-size: 44px;
          line-height: 60px;
        }
      }
      li:nth-child(2) {
        flex: 3;
        h3 {
          font-size: 44px;
          line-height: 60px;
          font-weight: 400;
        }
        h4 {
          font-size: 24px;
          line-height: 30px;
          font-weight: 400;
        }
      }
      li:nth-child(3) {
        flex: 1;
        span {
          font-size: 150px;
          display: block;
          float: right;
          color: #74b9ff;
          text-shadow: 0vw 0vw 2vw #007effcc;
        }
      }
    }
  }

  //底部
  .PlanList-botton {
    width: 100%;
    // border: 1px solid red;
    ul {
      width: 90%;
      // border: 1px solid red;
      margin: 0 auto;

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

@keyframes addLisr {
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
.addLisr-enter-active {
  animation: addLisr 0.5s;
}
//结束
.addLisr-leave-active {
  animation: addLisr 0.5s reverse;
}
</style>
