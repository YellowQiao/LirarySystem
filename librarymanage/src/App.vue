<template>
  <div id="app" >
    <!-- <div id="nav">
       <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">我是借阅者</a></el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/mybookshelf'}"><a>我的书架</a></el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/borrowinfor'}"><a>借阅历史</a></el-breadcrumb-item>
    </el-breadcrumb>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #c6ddff;
  position: absolute;
  width: 100%;
  height: 100%;
  
}

#nav {
  padding: 30px;
}

</style>
