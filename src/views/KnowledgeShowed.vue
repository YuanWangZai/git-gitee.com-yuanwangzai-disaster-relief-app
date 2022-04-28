<template>
<div style="padding:20px">
    <div class="top-bar">
        <div>
            <div style="font-size:20px;margin-bottom: 5px">当前，</div>
            <div style="font-size:15px">总共发布了{{total}}条自救知识</div>
        </div>
        <div></div>
        <div>
            <el-input style="width: 200px; margin-right:5px; margin-top:10px"  placeholder="主题搜索" suffix-icon="el-icon-search" v-model="title"></el-input>
            <el-button class="ml-5" type="primary" @click="load" size="mini">搜索</el-button>
        </div>
    </div>

    <el-table :data="tableData" style="margin: 20px 0" border stripe :header-cell-class-name="'headerBg'" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="title" label="主题" width="150"></el-table-column>
      <el-table-column prop="describe" label="描述" ></el-table-column>
      <el-table-column label="操作"  width="250" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row)" size="mini" plain>编辑<i class="el-icon-edit-outline"></i></el-button>
          <el-button type="info"  @click="hidden(scope.row)" size="mini" plain>隐藏<i class="el-icon-remove-outline"></i></el-button>
          <el-button type="danger"  @click="del(scope.row)" size="mini" plain>删除<i class="el-icon-circle-close"></i></el-button>
        </template>
      </el-table-column>
    </el-table>

  <div class="bottom-bar">
      <div style="padding: 10px 0">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>

      <div style="margin: 10px 0px;">
        <el-button type="primary" size="mini" @click="add">添加</el-button>
        <el-button type="info" size="mini" @click="hiddenBatch" style="margin-right:10px">一键隐藏</el-button>
        <el-popconfirm
        confirm-button-text='确定'
        cancel-button-text='取消'
        icon="el-icon-info"
        icon-color="red"
        title="您确定要删除所有选中数据吗？"
        @confirm="delBatch">
          <el-button type="danger" slot="reference" size="mini" >一键删除</el-button>
        </el-popconfirm>
      </div>
  </div>

</div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            pageSize:8,
            pageNum:1,
            total:100,

            //表中数据
            tableData:[
                {
                    id:0,
                    title:'自救知识',
                    describe:"xxxxx",
                },
                {
                    id:1,
                    title:'自救知识',
                    describe:"xxxx",
                },
                {
                    id:2,
                    title:'自救知识',
                    describe:"xxxx",
                },
            ],
        }
    },
    methods: {
        // 页数跳转
        handleCurrentChange(pageNum){
            this.pageNum=pageNum
            this.load()
        },
        edit(row) {
            console.log(this.tableData.find((item) => item.id===row.id));
            this.$router.push({path:'/knowledge/edit',query:this.tableData.find((item) => item.id===row.id)})
        },
        hidden(row) {
            console.log(row);
            this.$message.success('已隐藏')
        },
        del(row) {
            console.log(row);
            this.$message.success('删除成功')
        },
        // 多选
        handleSelectionChange(val){
            this.multipleSelection = val
            console.log(val)
        },

        // 批量删除
        hiddenBatch(){
            let ids = this.multipleSelection.map(v =>v.id)//对象数组变为纯id数组
            // if(ids.length==0)
            //     this.$message.error("请选择要删除的数据！")
            // else{
            //     console.log(ids)
            //     this.request.post("user/del/batch",ids).then(res =>{
            //     if(res.data){
            //         this.$message.success("批量删除成功")
            //         this.load()
            //     }else{
            //         this.$message.error("批量删除失败")
            //     }
            //   })
            // }
        },
        delBatch(){
            let ids = this.multipleSelection.map(v =>v.id)//对象数组变为纯id数组
            // if(ids.length==0)
            //     this.$message.error("请选择要删除的数据！")
            // else{
            //     console.log(ids)
            //     this.request.post("user/del/batch",ids).then(res =>{
            //     if(res.data){
            //         this.$message.success("批量删除成功")
            //         this.load()
            //     }else{
            //         this.$message.error("批量删除失败")
            //     }
            //   })
            // }
        },
        add(){
            this.$router.push('/knowledge/edit')
        }


    }

}
</script>

<style>
.top-bar{
    display: flex;
    justify-content:space-between;
}
.table{
    margin:10px 0px;
    padding:20px;
    border-radius:20px;
    border:solid 1px #e6e6e6; 
}
.el-table--border, .el-table--group {
    border-radius: 5px;
}
.bottom-bar {
  display: flex;
  justify-content:space-between;
  margin-top: 10px;
}

</style>