<template>
  <div class="headbar" style="background:#14889A" :class="'position-left'">
    <!-- 工具栏 -->
    <span class="toolbar">
      <el-menu class="el-menu-demo" background-color="#14889A" text-color="#14889A" active-text-color="#14889A" mode="horizontal">
        <el-menu-item index="1">
          <!-- 用户信息 -->
          <span class="user-info">{{user.name}}<img :src="user.avatar" /></span>
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        user:{
          name: "",
          avatar: "",
          role: "",
          registeInfo: ""
        },
        activeIndex:'1',
        langVisible: false
      }
    },
    mounted(){
      var user=JSON.parse(sessionStorage.getItem("user"))
      if (user) {
        this.user.name = user.username
        this.user.avatar = require("@/assets/user.png")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headbar{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1030;
    height: 60px;
    line-height: 60px;
    border-color: rgba(180, 190, 190, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
  }
  .navbar {
    float: left;
  }
  .toolbar {
     float: right;
   }
  .user-info {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
  .position-left {
    left: 200px;
  }
</style>
