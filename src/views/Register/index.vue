<template>
  <div id="Login">
    <div class="Login-title">
      <div class="slogan">
        <ul>
          <li>注册</li>
          <li>开启一个新账户</li>
        </ul>
      </div>
    </div>

    <!-- 输入框模块 -->
    <div class="Login-input">
      <ul>
        <li>
          <p>账号:</p>
          <br />
          <input type="text" v-model.trim="text" placeholder="请输入你的账户" />
        </li>
        <li>
          <p>密码:</p>
          <input
            type="password"
            v-model.trim="password"
            placeholder="请输入你的密码"
          />
          <input
            type="password"
            v-model.trim="passwordB"
            placeholder="请再次确认密码"
          />
        </li>
        <li>
          <span @click="$emit('Closetheloginpage')">登录</span>
          <span @click="submitRegister">立即注册</span>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "Register",
  data() {
    return {
      text: "",
      password: "",
      passwordB: "",
    };
  },

  methods: {
    getDispatch(value) {
      return this.$store.dispatch("user/submitRegister", value);
    },

    async submitRegister() {
      let { text, password, passwordB } = this;
      if (text == "" || password == "" || passwordB == "") {
        alert("不可以为空");
      } else if (text.length > 17) {
        alert("名称不可以大于8");
      } else if (password.length > 17 || passwordB.length > 17) {
        alert("密码长度不能大于16");
      } else if (passwordB != password) {
        alert("两次输入的密码不一致");
      } else {
        let user = await this.getDispatch({ text, password, data: new Date() });
          alert("注册成功，将前往登陆页面进行登录")
          this.$emit('Closetheloginpage')
          
      }
    },
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
    width: 100%;
    height: 350px;
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
      height: auto;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.226);
      padding: 20px;
      border-radius: 20px;
      li {
        width: 100%;
        // height: 300px;

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
        height: 240px;

        p {
          font-size: 30px;
          color: #fff;
        }
      }

      li:nth-child(2) {
        height: 350px;

        // border: 1px solid rgb(0, 60, 255);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        p {
          font-size: 30px;
          color: #fff;
        }
      }

      li:nth-child(3) {
        display: flex;
        height: 200px;

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
</style>