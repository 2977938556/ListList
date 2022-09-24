<template>
  <div id="ListShow">
    <transition name="AddListShow">
      <AddList v-if="AddListShow == true" @AddShow="AddListShow = false"></AddList>
    </transition>

    <div class="List-show">
      <ul @click="AddListShow = true">
        <li>
          <p>没有内容呢 块去创建一个计划吧</p>
        </li>
        <li>
          <span class="iconfont icon-delete">&#xe602;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddList from "@/views/AddLlist";

export default {
  name: "ListShow",
  data() {
    return {
      AddListShow: false,
    };
  },
  components: {
    AddList,
  },
};
</script>




<style lang="less" scoped>
.List-show {
  width: 100%;
  height: 100px;
  // border: 1px solid red;
  ul {
    width: 90%;
    height: 100px;
    margin: 0 auto;
    // border: 1px solid red;
    background: #fff;
    border-radius: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
      height: 100%;
      line-height: 100px;
    }
    li:nth-child(1) {
      p {
        font-size: 12px;
        padding-left: 20px;
        // color: #f56c6c;
      }
    }
    li:nth-child(2) {
      span {
        font-size: 20px;
        padding-right: 20px;
        // color: #f56c6c;
      }
    }
  }
}

@keyframes AddListShow {
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
.AddListShow-enter-active {
  animation: AddListShow 0.5s;
}
//结束
.AddListShow-leave-active {
  animation: AddListShow 0.5s reverse;
}
</style>