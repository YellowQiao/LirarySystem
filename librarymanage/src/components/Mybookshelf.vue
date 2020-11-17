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
            {{ "书名:" + booksList[index].bookName  }}
          </div>
          <div  class="text item">
            {{ "国家:" + booksList[index].country }}
          </div>
          <div  class="text item">
            {{ "类型:" + booksList[index].type }}
          </div>
          <div  class="text item">
            {{ "篇幅:" + booksList[index].length }}
          </div>
          <div  class="text item">
            {{ "主题:" + booksList[index].theme }}
          </div>
        </el-card>
        
      </div>
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
      booksList: [
        {
          bookName: "水浒传",
          country: "中国",
          type: "武侠",
          length: "这么长",
          theme: "情义",
        },
        {
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
        {
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
        {
          bookName: "水浒传",
          country: "中国",
          type: "不知道",
          length: "这么长",
          theme: "情义",
        },
      ],
    };
  },
  methods: {
    onSubmit(index) {
      console.log("submit!");
      this.jiazai[index].str = true;
    },
    getBooksList(){
      this.axios.get('http://jspang.com/DemoApi/oftenGoods.php')
       //then获取成功；response成功后的返回值（对象）
      .then(response=>{
         console.log(response);
         this.booksList=response.data;
      })
       //获取失败
      .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
      })
    }
  },
  created() {
    this.getBooksList()
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
}
.shuming {
  width: 350px;
}
 .text {
    font-size: 13px;
    padding: 0 10;
  }

  .item {
    padding: 4px 0;

  }

  .box-card {
    width: 480px;
    margin-left: 430px;
    height: 150px;
    padding: 0 10px;
  }
  .info{
    margin-top: -15px;
    height: 150px;
  }
  .fengexian{
    margin: 14px 0px;
  }
  .demo-form-inline{
    margin-left: 480px;
  }
 
</style>