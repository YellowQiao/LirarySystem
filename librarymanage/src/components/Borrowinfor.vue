<template>
  <div class="container">
    <div v-show="xianshi" class="xiangqingyemian">
      <el-card class="box-card">
        <div class="text item">
          {{ "用户编号:" + "100021 "}}  {{"用户姓名: " + " 张三 "}}   {{" 归还还剩日期:" + "7天"}}
        </div>
        <div class="text item">
           {{ "用户编号:" + "100021 " }}    {{" 用户姓名:" + "张三 "}}     {{" 归还还剩日期:" + "7天"}}
        </div>

      </el-card>
    </div>

    <div class="demo-input-suffix">
      <el-input
        class="sousuokuang"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
      >
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="tb">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
      >
        <el-table-column prop="date" label="借书日期" width="250">
        </el-table-column>
        <el-table-column prop="ID" label="图书编号" width="200">
        </el-table-column>
        <el-table-column prop="bookName" label="书名" width="300">
        </el-table-column>
        <el-table-column label="详情" width="250"
          ><el-row>
            <el-button v-on:click="onLook" type="info" round
              >查看详情</el-button
            ></el-row
          ></el-table-column
        >
      </el-table>
    </div>
    <!-- 分页器 -->
    <!-- <div class="block" style="margin-top:15px;">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[1,5,10,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </div> -->
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
      bookdata: [],
      tableData: [
        {
          date: "2016-05-03",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          ID: "王小虎",
          bookName: "上海市普陀区金沙江路 1518 弄",
        },
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
};
</script>

<style  scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #c6ddff;
}
.page {
  background-color: #c6ddff;
  width: 500px;
  margin-left: 600px;
}
.sousuokuang {
  width: 200px;
}
.xiangqingyemian {
  height: 180px;
  margin-top: 5px;
}
.demo-input-suffix {
  margin-left: 540px;
  margin-bottom: 10px;
  margin-top: 100px;
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
  margin-left: 140px;
  margin-right: 140px;
  margin-top: 20px;
  width: fit-content;
  border: 2px solid  rgb(175, 193, 241);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>