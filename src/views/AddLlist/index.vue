<template>
  <div id="AddList">
    <!-- 头部标题 -->
    <div class="AddList-title">
      <ul>
        <!-- 标语 -->
        <li>
          <span>
            <h3>添加</h3>
            <h4>添加一个新的内容~</h4>
          </span>
        </li>
      </ul>
    </div>
    <!-- 任务内容 -->
    <div class="AddList-content">
      <ul>
        <li><p>任务内容</p></li>
        <li>
          <input
            type="text"
            v-model.trim="text"
            placeholder="请输入你的任务内容吧~"
          />
          <input type="hidden" />
        </li>
      </ul>
    </div>

    <!-- 任务颜色 -->
    <div class="AddList-color">
      <ul>
        <li><p>选择该任务的颜色：</p></li>
        <li>
          <span
            v-for="item in colorList"
            :key="item.id"
            :style="`background:${item.color};`"
            @click="getBgc(item)"
          ></span>
        </li>
      </ul>
    </div>
    <div class="AddList-btn">
      <ul>
        <li>
          <span @click="$emit('AddShow')">取消</span>
        </li>
        <li>
          <span @click="addList">添加</span>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "AddList",
  data() {
    return {
      colorList: [
        { id: "1", color: "#409EFF", check: true },
        { id: "2", color: "#67C23A", check: false },
        { id: "3", color: "#9A9A9A", check: false },
        { id: "4", color: "#E6A23C", check: false },
        { id: "5", color: "#F56C6C", check: false },
      ], //背景颜色
      text: "", //任务内容
      Bgccolors: "#409EFF", //背景颜色
    };
  },

  methods: {
    // 01:添加函数
    addList() {
      // 判断数据是否合法
      if (this.text == "") {
        alert("任务内容不可以为空");
      } else if (this.text.length > 16) {
        alert("任务内容字数超出长度");
        return false;
      } else {
        //这里是处理返回时间的函数
        function geTime() {
          var tim = new Date();
          var year = tim.getFullYear(); //年
          var mot = tim.getMonth() + 1; //月
          var dat = tim.getDate(); //日

          let data = year + "年" + mot + "月" + dat + "日";

          var h = tim.getHours();
          h = h < 10 ? "0" + h : h;
          var m = tim.getMinutes();
          m = m < 10 ? "0" + m : m;
          var s = tim.getSeconds();
          s = s < 10 ? "0" + s : s;
          return `${data}-${h}:${m}:${s}`;
        }

        //将当前的添加的内容提交的action中进行处理保存
        this.$store.dispatch("user/AddList", {
          text: this.text,
          Bgccolors: this.Bgccolors,
          // date: "2022年9月22日-19:43:28",
          date: geTime(),
        });

        //隐藏当前的窗口
        this.$emit("AddShow");

        //在展示页面进行再次获取数据渲染
        this.$emit("getList");
        
      }
    },

    // 02:同步化bgc背景颜色
    getBgc(value) {
      this.Bgccolors = value.color;
    },
  },
};
</script>






<style lang="less" scoped>
#AddList {
  width: 100%;
  height: 100%;
  overflow: auto;

  background: #74b9ff;
  position: fixed;
  top: 0;
  left: 0;

  // 头部标题
  .AddList-title {
    width: 100%;
    height: 300px;
    background: #74b9ff;
    display: flex;
    align-items: center;
    ul {
      width: 88%;
      height: 200px;
      // border: 1px solid red;
      margin: 0 auto;
      li {
        position: relative;
        width: 100%;
        height: 200px;
        span {
          display: block;
          width: 100%;
          height: 100px;
          // border: 1px solid red;
          color: #fff;
          position: absolute;
          bottom: 0px;
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
      }
    }
  }

  // 任务内容
  .AddList-content {
    width: 100%;
    height: 290px;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    background: #74b9ff;
    ul {
      width: 90%;
      height: 70%;
      // border: 1px solid red;
      margin: 0 auto;
      overflow: auto;
      p {
        color: #fff;
        font-size: 26px;
        padding-left: 10px;
      }
      input {
        width: 100%;
        height: 140px;
        border: none;
        outline: none;
        border-radius: 20px;
        margin-top: 20px;
        padding-left: 10px;
      }
    }
  }

  // 任务颜色
  .AddList-color {
    width: 100%;
    height: 400px;
    // border: 1px solid red;
    background: #74b9ff;
    display: flex;
    align-items: center;
    ul {
      width: 90%;
      height: 90%;
      // border: 1px solid red;
      margin: 0 auto;
      li {
        // border: 1px solid red;
      }
      li:nth-child(1) {
        height: 50px;
        p {
          color: rgb(255, 255, 255);
          font-size: 26px;
          padding-left: 10px;
        }
      }
      li:nth-child(2) {
        width: 100%;
        height: 90%;
        padding: 15px;
        // border: 1px solid rgb(0, 255, 157);
        background: #fff;
        border-radius: 20px;

        display: flex;
        flex-wrap: wrap;
        span {
          width: 100px;
          height: 100px;
          display: block;
          background: #e6a23c;
          border-radius: 10px;
          margin: 10px;
        }
        span:hover {
          opacity: 0.9;
          border: 2px solid rgb(0, 0, 0);
        }
      }
    }
  }

  // 任务按钮
  .AddList-btn {
    width: 100%;
    // height: 100%;
    // border: 1px solid red;
    ul {
      width: 90%;
      height: 80%;
      // border: 1px solid red;
      margin: 0 auto;
      display: flex;
      // align-items: center;
      li {
        width: 90%;
        height: 100px;
        // border: 1px solid red;
        margin: 40px auto;
        span {
          display: block;
          border-radius: 100px;
          text-align: center;
          line-height: 100px;
          font-size: 34px;
        }
      }
      li:nth-child(1) {
        span {
          width: 250px;
          height: 100px;
          background: #000000;
          color: #fff;
        }
      }
      li:nth-child(2) {
        span {
          width: 300px;
          height: 100px;
          background: #fff;
          color: #74b9ff;
        }
      }
    }
  }
}
</style>
