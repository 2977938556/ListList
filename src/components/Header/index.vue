<template>
  <div class="header">
    <!-- 遮罩层 -->
    <transition name="afterzhezhao">
      <div
        class="afterzhezhao"
        v-if="appleZhezhao == true"
        @click="appleYingc"
      ></div>
    </transition>

    <StatueBar></StatueBar>

    <!-- 头部区域 -->
    <div class="menubar">
      <ul>
        <li>
          <span class="iconfont incon-burger" @click="appleZhezhaoShow"
            >&#xe976;</span
          >
        </li>
        <li ref="search">
          <h2>List</h2>
        </li>
        <li>
          <span class="iconfont incon-search">&#xe694;</span>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
//导入状态栏
import StatueBar from "@/components/statusBar";

export default {
  name: "Header",
  props: ["apples"],
  data() {
    return {
      falsge: false,
      appleZhezhao: false, //遮罩
    };
  },

  methods: {
    //显示设置和遮罩层 还有设置组件
    appleZhezhaoShow() {
      this.appleZhezhao = !this.appleZhezhao;
      this.$emit("abcdefg", true);
    },

    // 隐藏设置组件和遮罩层
    appleYingc() {
      this.appleZhezhao = false;
      this.$emit("abcdefg", false);
    },
  },

  components: {
    StatueBar,
  },
};
</script>



<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;

  //主体包裹
  .header {
    width: 100%;

    //菜单栏
    .menubar {
      width: 100%;
      height: 80px;
      background: #74b9ff;

      ul {
        width: 100%;
        height: 80px;
        background: #74b9ff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          width: 20%;
          list-style: none;
          text-align: center;
          line-height: 60px;
          // border: 1px solid red;
        }
        //第一个input
        li:nth-child(1) {
          .incon-burger {
            font-size: 30px;
            color: #fff;
            // position: relative;
            // left: -70px;
          }
        }
        //第二个input
        li:nth-child(2) {
          width: 100%;
          height: 60px;
          h2 {
            color: #fff;
          }
        }

        li:nth-child(3) {
          width: 20%;

          .incon-search {
            font-size: 40px;
            color: #fff;
            // position: relative;
            // right: -70px;
          }
        }
      }
    }
  }
}

//遮罩层
.afterzhezhao {
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 64%);
  position: fixed;
  z-index: 3;
}

//遮罩层的动画
@keyframes afterzhezhao {
  //起始
  from {
    display: none;
    opacity: 0;
  }
  //结束
  to {
    display: block;
    opacity: 1;
  }
}

//开始
.afterzhezhao-enter-active {
  animation: afterzhezhao 0.5s;
}
//结束
.afterzhezhao-leave-active {
  animation: afterzhezhao 0.5s reverse;
}
</style>