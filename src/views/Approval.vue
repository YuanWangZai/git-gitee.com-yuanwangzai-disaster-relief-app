<template>

  <div>

    <div style="margin: 10px 0">
        <el-input style="width: 200px; margin-right:5px" placeholder="手机号搜索" suffix-icon="el-icon-search" v-model="phonenumber"></el-input>
        <el-button class="ml-5" type="primary" @click="load" size="mini">搜索</el-button>
        <el-button class="ml-5" type="warning" @click="reset" size="mini">重置</el-button>
    </div>

    <el-table :data="tableData" border stripe :header-cell-class-name="'headerBg'" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="phonenumber" label="联系人电话" width="100"></el-table-column>
      <el-table-column prop="location" label="求助地址" width="180"></el-table-column>
      <el-table-column prop="describe" label="现场情况描述"></el-table-column>
      <el-table-column prop="time" label="时间" width="130"></el-table-column>
      <el-table-column prop="state" label="状态"  width="100" align="center" >
        <template slot-scope="scope">
            <el-tag
            :type="scope.row.state === '待救援' ? 'warning' : ''"
            disable-transitions>{{scope.row.state}}</el-tag>
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

  </div>
</div>


</template>

<script>

export default {
    name: "approval",
    data(){
      return{
        //表中数据
        tableData:[
          {
            id:0,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日 ",
            state:'待救援'
          },
          {
            id:1,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日",
            state:'救援中'
          },
          {
            id:2,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日",
            state:'待救援'
          },
          {
            id:3,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日",
            state:'待救援'
          },
        ],

        //表信息
        total:10,
        pageNum:1,
        pageSize:8,
        phonenumber:'',

        // 多选列表
        multipleSelection:[],
        roles: []
      }
    },
    created(){
        this.load()
    },
    methods:{

      // 加载
      load(){
        // this.request.get("/user/page",{
        //     params:{
        //         pageNum: this.pageNum,
        //         pageSize: this.pageSize,
        //         username: this.phonenumber
        //     }
        // }).then(res =>{
        //     console.log(res)
        //     this.tableData=res.data.records
        //     this.total=res.data.total
        // })

        // this.request.get("/role").then(res =>{
        //   this.roles = res.data
        // })
      },

      // 页数跳转
      handleCurrentChange(pageNum){
        this.pageNum=pageNum
        this.load()
      },

      // 搜索重置
      reset(){
        this.phonenumber=''
        this.load()
      },
 
      // 审核通过
      pass(id){
        
      },

      // 审核不通过
      refuse(id){
        // this.request.post("/"+id).then(res=>{
        //     if(res.data){
        //         this.$message.success("操作成功")
        //         this.dialogFormVisible = false
        //         this.load()
        //     }else{
        //         this.$message.error("操作失败")
        //     }
        // })
      },

      // 多选
      handleSelectionChange(val){
        this.multipleSelection = val
        console.log(val)
      },

      // 批量删除
      passBatch(){
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


    }
    
}

</script>

<style>


.bottom-bar {
  display: flex;
  justify-content:space-between;
  margin-top: 10px;
}
.el-table th.el-table__cell>.cell {
  text-align: center;
}
.el-table .cell {
  text-align: center;
}

</style>