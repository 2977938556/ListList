<template>
  <div class="home">
    <Login
      v-if="LoginShowFlage == true"
      @showLogin="LoginShowFlage = false"
    ></Login>

    <!-- 设置模块 -->
    <transition name="SetupModule">
      <SetupModule v-if="SetupModuleRFlage == true"></SetupModule>
    </transition>

    <!-- 头部模块 -->
    <Header @abcdefg="miaoya"></Header>

    <!-- 用户头像模块 -->
    <User
      :text="UserInfo.text || 'Hellow World'"
      :title="UserInfo.title || '越努力越幸运'"
    ></User>

    <!-- 标语模块 -->
    <Slogan></Slogan>

    <!-- 2022/9/20 解决问题 数据传递问题 -->

    <!-- 无内容的时候 -->
    <ListShow v-if="getUserShow == false"></ListShow>

    <!-- 内容区域 -->
    <ListUser @hhh="kk" v-if="getUserShow == true"></ListUser>
  </div>
</template>




<script>
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

//导入header 组件
import Header from "@/components/Header";
import User from "@/views/home/user";
import Slogan from "@/views/home/slogan";
import ListUser from "@/views/home/ListUser";
import ListShow from "@/views/home/ListShow";
import SetupModule from "@/views/SetupModule";

//登录注册模块
import Login from "@/views/Login";
import Register from "@/views/Register";

export default {
  name: "Home",
  data() {
    return {
      SetupModuleRFlage: false, //控制设置模块显示或者隐藏
      LoginShowFlage: false, //控制登陆页面显示隐藏
      getUserShow: false, //控制内容显示隐藏
      UserInfo: {}, //渲染user模块
      List: {}, //
    };
  },

  mounted() {
    this.getLogin();
  },

  methods: {
    //01<:设置组件> 的隐藏和显示
    miaoya(value) {
      this.SetupModuleRFlage = value;
    },

    // 02:判断是否登录了,如果没有登录那么就跳转到登录页
    async getLogin() {
      //发送请求判断是否登录了
      let { code, message, data } = await this.$store.dispatch("user/getLogin");

      //判断登录的状态
      //如果有登录状态那么就不显示登录页面
      if (code != 200) {
        this.LoginShowFlage = true;
      } else if (code == 200) {
        //如果有登录的状态那么就获取本地的数据,渲染到页面上
        let obj = JSON.parse(localStorage.getItem("List"));
        this.UserInfo = obj.UserInfo || {};

        // console.log();
        if (obj.List.arr.length != 0) {
          this.getUserShow = true;
        } else {
          this.getUserShow = false;
        }
      }
    },

    getUser() {
      let obj = JSON.parse(localStorage.getItem("List"));
      this.UserInfo = obj.UserInfo || {};
    },

    kk() {
      this.getUser();
    },
  },

  //计算属性
  computed: {},

  // 注册组件
  components: {
    Header,
    User,
    Slogan,
    ListUser,
    ListShow,
    // PlanList,
    SetupModule,
    Login,
    Register,
  },
};
</script>



<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}

.home {
  width: 100%;
  // border: 1px solid red;
  overflow: hidden;
}

@keyframes SetupModule {
  //起始
  from {
    transform: translateX(-1000px);
  }
  //结束
  to {
    transform: translateX(0px);
  }
}

//开始
.SetupModule-enter-active {
  animation: SetupModule 0.5s;
}
//结束
.SetupModule-leave-active {
  animation: SetupModule 0.5s reverse;
}
</style>