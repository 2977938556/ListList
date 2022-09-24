
  <template>
  <div id="Slogan">
    <div class="slogan">
      <ul>
        <li>今天需要完成{{ arr.length || "0" }}的任务</li>
        <li>还需要共 {{ arr.length || "0" }}个任务完成，加油~</li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "Slogan",
  data() {
    return {
      arr: [],
    };
  },

  mounted() {
    this.arr = JSON.parse(localStorage.getItem("List")).List.arr || [];
  },
};
</script>


<style lang="less" scoped>
.slogan {
  width: 100%;
  height: 180px;
  background: #74b9ff;
  // background: #939faa;
  ul {
    width: 80%;
    height: 180px;
    margin: 0 auto;
    // border: 1px solid red;

    li {
      list-style: none;
      color: #fff;
      line-height: 40px;
    }
    li:nth-child(1) {
      font-size: 30px;
    }
    li:nth-child(2) {
      font-size: 26px;
    }
  }
}
</style>