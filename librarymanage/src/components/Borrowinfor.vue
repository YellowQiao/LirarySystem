<template>
  <div class="container">
  <div id="nav">
       <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">我是借阅者</a></el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/mybookshelf'}"><a>信息修改</a></el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/borrowinfor'}"><a>借阅历史</a></el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <div v-show="xianshi" class="xiangqingyemian">
      <el-row :gutter="12">
    <el-col :span="8">
    <el-card shadow="hover">
      用户编号：{{detail[0].userId}}
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      用户姓名：
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      距归还还剩：
    </el-card>
  </el-col>
  </el-row>
     
      <el-row :gutter="12">
    <el-col :span="8">
    <el-card shadow="hover">
      书籍名称：
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      借阅时间：
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      借阅有效期：
    </el-card>
  </el-col>
  </el-row>
    </div>

    <div class="demo-input-suffix">
      <el-input
        class="sousuokuang"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
      >
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    </div>
    <div class="tb">
      <el-table
        :data="
          bookData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
      >
        <el-table-column prop="bookName" label="书籍名" width="150">
        </el-table-column>
        <el-table-column prop="country" label="国家" width="150">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="150">
        </el-table-column>
        <el-table-column prop="length" label="篇幅" width="150">
        </el-table-column>
        <el-table-column prop="theme" label="主题" width="150">
        </el-table-column>
        <el-table-column label="详情" width="200"
          ><el-row>
            <el-button v-on:click="onLook" type="info" round
              >查看详情</el-button
            ></el-row
          ></el-table-column
        >
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="500"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
      >
      </el-pagination>
    </div>
  </div>
</template>
  

<script>
export default {
  data() {
    return {
      input2: "",
      xianshi: false,
      bookData: [
        {
          bookId: 222,
          bookName: "水浒传",
          country: "中国",
          type: "武侠",
          length: "这么长",
          theme: "情义",
        },
        {
          bookId: 222,
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
        {
          bookId: 222,
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
        {
          bookId: 222,
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
      ],
      detail: [
        {
          userId: 111,
          name: "诸葛亮",
          leftdate: 7,
          bookName: "三国演义",
          borrowdate: "2018-8-8",
          youxiaoqi: "3月"
        }
        

      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 3, // 每页的数据条数
    };
  },
  methods: {
    onLook() {
      this.xianshi = true;
    },
    search(){
      console.log("点击了搜索")
    },
    async getBookData () {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.bookData = res.data.users
      this.totle = res.data.totle
      },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
  },
  created() {
    this.getBookData()
  },
};
</script>

<style  scoped>
.container {
  width: 100%;
  position: absolute;
}
.page {
  
  width: 500px;
  margin-left: 600px;
}
.sousuokuang {
  width: 200px;
}
.xiangqingyemian {
  height: 150px;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.demo-input-suffix {
  margin-left: 700px;
  margin-bottom: 10px;
  margin-top: 50px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
  margin: 0px 200px 10px;
}
.tb {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: fit-content;
  border: 2px solid  rgb(175, 193, 241);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

</style>