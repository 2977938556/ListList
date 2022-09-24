<template>
  <div id="SetupModule">
    <transition name="AddNameShow">
      <AddName v-if="AddNameShow == true" @AddNameShowEmit="a"></AddName>
    </transition>

    <!-- 返回模块 -->
    <div class="SetupModule-fanhui">
      <span class="iconfont" @click="$emit('abcdefg', false)">&#xe602;</span>
    </div>

    <!-- 头像模块 -->
    <div class="SetupModule-user">
      <div class="user">
        <!-- 用户模块 -->
        <div class="users">
          <ul>
            <li>
              <span></span>
            </li>
            <li>
              <h3>{{ user.text || "FeiMao@110" }}</h3>
              <h4>{{ user.title || "今天你学习了吗" }}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 编辑模块 -->
    <div class="SetupModule-bianji">
      <ul>
        <li @click="AddNameShow = true">
          <span>
            <span class="iconfont">&#xe715;</span>
          </span>
          <span>
            <p>编辑名称</p>
          </span>
          <span>
            <span class="iconfont">&#xe602;</span>
          </span>
        </li>
        <li>
          <span>
            <span class="iconfont">&#xe680;</span>
          </span>
          <span>
            <p>修改头像</p>
          </span>
          <span>
            <span class="iconfont">&#xe602;</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
import AddName from "@/views/AddName";

export default {
  name: "SetupModule",

  data() {
    return {
      AddNameShow: false,
      user: {},
    };
  },

  methods: {
    a() {
      this.AddNameShow = false;
      this.GetuserList();
    },

    GetuserList() {
      this.user = JSON.parse(localStorage.getItem("user")) || {};
      console.log(this.user);
    },
  },

  mounted() {
    this.GetuserList();
  },

  components: { AddName },
};
</script>


<style lang="less" scoped>
#SetupModule {
  width: 76%;
  height: 100%;
  background: rgb(255, 255, 255);
  position: fixed;
  z-index: 5;

  // <!-- 返回模块 -->

  .SetupModule-fanhui {
    width: 100%;
    height: 160px;
    text-align: center;
    line-height: 160px;

    span {
      font-size: 46px;
      float: right;
      padding-right: 10px;
    }
  }

  // <!-- 头像模块 -->

  .SetupModule-user {
    width: 100%;
    height: 400px;
    //用户模块
    .users {
      width: 100%;
      height: 400px;
      overflow: hidden;

      ul {
        width: 90%;
        height: 200px;
        margin: 40px auto;
        display: flex;
        align-items: center;

        li {
          // border: 1px solid red;
          list-style: none;
          height: 100%;
        }
        li:nth-child(1) {
          width: 160px;
          span {
            display: block;
            height: 150px;
            width: 150px;
            border-radius: 100px;
            margin: 0 auto;
            background: #000000;
          }
        }

        li:nth-child(2) {
          color: rgb(0, 0, 0);
          width: 100%;
          padding: 10px;

          h3 {
            font-size: 36px;
            line-height: 100px;
          }
          h4 {
            font-size: 24px;
            line-height: 20px;
          }
        }
      }
    }
  }

  // <!-- 编辑模块 -->
  .SetupModule-bianji {
    width: 100%;
    height: 100%;
    // background: rgb(255, 82, 82);
    overflow: auto;
    ul {
      width: 90%;
      height: 100%;
      // background: rgb(255, 180, 180);
      margin: 0 auto;
      // overflow: hidden;
      li {
        width: 100%;
        height: 120px;
        background: rgb(0 0 0 / 8%);
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        line-height: 120px;
        span {
          // border: 1px solid red;
          color: rgb(0, 0, 0);
        }
      }
      span:nth-child(1) {
        text-align: center;
        flex: 0.3;
        span {
          font-size: 40px;
        }
      }
      span:nth-child(2) {
        flex: 1;
        p {
          font-size: 24px;
        }
      }
      span:nth-child(3) {
        flex: 0.3;

        span {
          font-size: 40px;
        }
      }
    }
  }
}

// 定义以下boxA中的动画
@keyframes AddNameShow {
  //起始
  from {
    transform: translateX(-1000px);
  }
  //结束
  to {
    transform: translateX(0px);
  }
}

// 使用上面定义的boxA动画[这里面我们一般是写一些过渡的时间]
//开始
.AddNameShow-enter-active {
  animation: AddNameShow 0.5s ease-in-out;
}
//结束
.AddNameShow-leave-active {
  animation: AddNameShow 0.5s reverse;
}
</style>