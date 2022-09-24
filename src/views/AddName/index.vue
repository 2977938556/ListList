<template>
  <div id="Login">
    <div class="Login-title">
      <div class="slogan">
        <ul>
          <li>设置</li>
          <li>修改个性化</li>
        </ul>
      </div>
    </div>

    <!-- 输入框模块 -->
    <div class="Login-input">
      <ul>
        <li>
          <p>设置用户名:</p>
          <input type="text" placeholder="输入你的用户名" v-model.trim="text" />
        </li>
        <li>
          <p>设置标语:</p>
          <input
            type="text"
            placeholder="输入你的标语"
            v-model.trim="title"
          />
        </li>
        <li>
          <span @click="$emit('AddNameShowEmit')">取消</span>
          <span @click="AddName">提交</span>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
import Register from "@/views/Register";

export default {
  name: "AddName",
  data() {
    return {
      text: "",
      title: "",
    };
  },
  methods: {
    //处理数据
    async AddName() {
      let { text, title } = this;

      //判断数据
      if (title == "" || text == "") {
        alert("提交的数据不能为空");
        return false;
      } else if (text.length > 16) {
        alert("用户名长度不能超出16");
        return false;
      } else if (title.length > 20) {
        alert("个性化标语长度不能超出20");
        return false;
      } else {
        //提交数据进行处理

        try{
          let err = await this.$store.dispatch("user/AddNameList", {
          text,
          title,
          date: new Date(),
        });


        alert("修改成功")
        this.$emit('AddNameShowEmit')



        }catch(err){
          alert(err.message)
        }
        
        
     
        
        
        
        
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
        height: 200px;
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
</style>