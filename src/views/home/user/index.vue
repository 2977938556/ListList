<template>
  <div class="user">
    <!-- 用户模块 -->
    <div class="users">
      <ul>
        <li>
          <span></span>
        </li>
        <li>
          <h3>{{ text }}</h3>
          <h4>{{ title }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "User",
  props: ["text", "title"],
};
</script>

<style lang="less" scoped>
//用户模块
.users {
  width: 100%;
  height: 200px;
  background: #74b9ff;

  ul {
    width: 90%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    li {
      // border: 1px solid red;

      list-style: none;
    }
    li:nth-child(1) {
      width: 160px;
      height: 100px;
      span {
        display: block;
        height: 100px;
        width: 100px;
        border-radius: 100px;
        margin: 0 auto;
        background: #ffffff;
      }
    }

    li:nth-child(2) {
      color: #fff;
      width: 300px;
      height: 100px;
      h3 {
        font-size: 28px;
        line-height: 60px;
      }
      h4 {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>