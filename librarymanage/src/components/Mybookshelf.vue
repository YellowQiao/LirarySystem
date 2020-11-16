<template>
  <div class="main-container">
    <div v-for="(temp,index) in user" :key="index" class="book">
      <el-form :inline="true" :model="user" class="demo-form-inline">
        <el-form-item>
          <el-input
            class="shuming"
            v-model="temp.value"
            placeholder="已借入书籍"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="jiazai[index].str" @click="onSubmit(index)"
            >还书</el-button
          >
        </el-form-item>
      </el-form>
      <div class="info">
        <el-card class="box-card">
          <div  class="text item">
            {{ "ID:" + books[index].ID }}
          </div>
          <div  class="text item">
            {{ "书名:" + books[index].bookName }}
          </div>
          <div  class="text item">
            {{ "作者:" + books[index].author }}
          </div>
        </el-card>
        
      </div>
      <el-divider class="fengexian"></el-divider>
    </div>

  </div>
</template>

<script>
export default {
  data: function(){
    return {
        user: [
          {
            value: "",
          },
          {
            value: "",
          },
          {
            value: "",
          },
        ],
      
      jiazai: [
        {
          str:false
        },
        {
          str:false
        },
        {
          str:false
        },
      ],
      books: [
        {
          ID: 1,
          bookName: "《三国演义》",
          author: "1",
        },
        {
          ID: 2,
          bookName: "《三国演义》",
          author: "2",
        },
        {
          ID: 3,
          bookName: "《三国演义》",
          author: "3",
        },
      ],
    };
  },
  methods: {
    onSubmit(index) {
      console.log("submit!");
      this.jiazai[index].str = true;
    },
  },
};
</script>
  
<style scoped>
.book {
  margin-top: 20px;
}

.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #c6ddff;
}
.shuming {
  width: 350px;
}
 .text {
    font-size: 14px;
  }

  .item {
    padding: 8px 0;

  }

  .box-card {
    width: 480px;
    margin-left: 430px;
    height: 150px;
  }
  .info{
    margin-top: -10px;
    height: 150px;
  }
  .fengexian{
    margin: 14px 0px;
  }
</style>