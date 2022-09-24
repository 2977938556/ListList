<template>
  <div id="app">
    <Home></Home>
  

  </div>
</template>

<script>
//注册组件
import Home from "@/views/home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
* li{
  list-style: none;
}
* input{
  font-size: 24px;
}
body{
  background: #74b9ff;

}


</style>
