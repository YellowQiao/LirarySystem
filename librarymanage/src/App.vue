<template>
  <div id="app">
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}



#app {
  background-color: #c6ddff;
}
</style>
