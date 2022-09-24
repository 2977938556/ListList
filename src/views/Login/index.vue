<template>
  <div id="Login">
    <transition name="RegisterFlage">
      <Register
        v-if="RegisterFlage == true"
        @Closetheloginpage="RegisterFlage = false"
      ></Register>
    </transition>

    <div class="Login-title">
      <div class="slogan">
        <ul>
          <li>登录</li>
          <li>开启一个有计划的账户</li>
        </ul>
      </div>
    </div>

    <!-- 输入框模块 -->
    <div class="Login-input">
      <ul>
        <li>
          <p>账号:</p>
          <input type="text" placeholder="请输入你的账户" v-model.trim="text" />
        </li>
        <li>
          <p>密码:</p>
          <input
            type="password"
            placeholder="请输入你的密码"
            v-model.trim="password"
          />
        </li>
        <li>
          <span @click="RegisterShow">注册</span>
          <span @click="Getsubmit">立即登录</span>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
import Register from "@/views/Register";

export default {
  name: "Login",
  data() {
    return {
      text: "",
      password: "",
      RegisterFlage: false,
    };
  },

  methods: {
    //01:【派发action校验账户或者密码】
    async getDispatch(value) {
      return await this.$store.dispatch("user/getUserList", value);
    },

    //02：【点击登录按钮的时候将数据提交给vuex中进行处理】
    async Getsubmit() {
      try {
        // 结构出数据
        let { text, password } = this;

        //判断是否为空
        if (text == "" || password == "") {
          return alert("账号或者密码不可以为空");
        }

        //派发action 进行获取进行本地存储数据
        let user = await this.getDispatch({ text, password });

        //自定义事件将本页面关闭
        this.$emit("showLogin");
      } catch (Err) {
        alert(Err.message);
      }
    },

    //03:点击注册按钮的时候跳转到注册页面
    RegisterShow() {
      this.RegisterFlage = true;
    },
  },

  components: {
    Register,
  },
};
</script>










<style lang="less" scoped>
#Login {
  width: 100%;
  height: 100%;
  background: #74b9ff;
  position: fixed;
  z-index: 10;
  // border: 1px solid red;

  //顶部标题模块
  .Login-title {
    // border: 1px solid red;
    width: 100%;
    height: 380px;
    .slogan {
      width: 100%;
      height: 500px;
      background: #74b9ff;
      // background: #939faa;
      display: flex;
      align-items: center;

      ul {
        width: 80%;
        height: 200px;
        margin: 0 auto;

        li {
          list-style: none;
          color: #fff;
          line-height: 60px;
        }
        li:nth-child(1) {
          font-size: 60px;
          font-weight: 800;
        }
        li:nth-child(2) {
          font-size: 26px;
        }
      }
    }
  }

  // 输入框模块
  .Login-input {
    width: 100%;
    height: 100%;
    // border: 1px solid red;
    ul {
      width: 90%;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.226);
      padding: 20px;
      border-radius: 20px;
      li {
        width: 100%;
        height: 180px;
        // border: 1px solid red;
        input {
          width: 100%;
          height: 100px;
          border-radius: 20px;
          border: none;
          padding-left: 10px;
          outline: none;
        }
      }
      li:nth-child(1) {
        p {
          font-size: 30px;
          color: #fff;
        }
      }

      li:nth-child(2) {
        p {
          font-size: 30px;
          color: #fff;
        }
      }

      li:nth-child(3) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          display: block;
          border-radius: 100px;
          text-align: center;
          line-height: 100px;
          font-size: 34px;
        }
        span:nth-child(1) {
          width: 300px;
          height: 100px;
          background: #fff;
          color: #74b9ff;
        }
        span:nth-child(2) {
          width: 250px;
          height: 100px;
          background: #000000;
          color: #fff;
        }
      }
    }
  }
}

// 定义以下boxA中的动画
@keyframes RegisterFlage {
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
.RegisterFlage-enter-active {
  animation: RegisterFlage 0.5s ease-in-out;
}
//结束
.RegisterFlage-leave-active {
  animation: RegisterFlage 0.5s reverse;
}
</style>