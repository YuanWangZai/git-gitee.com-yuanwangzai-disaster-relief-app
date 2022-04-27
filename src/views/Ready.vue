<template>
<el-container style="min-height: 100vh">
<el-aside style="width:150px; border-right: solid 1px #e6e6e6">
<el-row class="tac" style="margin-top:20px; height:90%">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">

      <el-menu-item index="0" style="text-align:center">
        <span slot="title">待审批</span>
      </el-menu-item>
      <el-menu-item index="1" style="text-align:center">
        <span slot="title">已审批</span>
      </el-menu-item>
      <el-menu-item index="2" style="text-align:center">
        <span slot="title">已救助</span>
      </el-menu-item>
      <el-menu-item index="3" style="text-align:center">
        <span slot="title">已取消</span>
      </el-menu-item>
      <el-menu-item index="4" style="text-align:center">  
        <span slot="title">未通过</span>
      </el-menu-item>

  </el-menu>
</el-row>
</el-aside>





<el-main style="margin:10px; padding:10px; border-radius:20px; border:solid 1px #e6e6e6">
  <div>

    <div style="margin: 10px 0">
        <el-input style="width: 200px; margin-right:5px" placeholder="手机号搜索" suffix-icon="el-icon-search" v-model="phonenumber"></el-input>
        <el-button class="ml-5" type="primary" @click="load" size="mini">搜索</el-button>
    </div>

    <el-table :data="tableData" border stripe :header-cell-class-name="'headerBg'" @selection-change="handleSelectionChange">>
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="phonenumber" label="联系人电话" width="120"></el-table-column>
      <el-table-column prop="location" label="求助地址" width="180"></el-table-column>
      <el-table-column prop="describe" label="现场情况描述"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column label="操作"  width="200" align="center">
        <template slot-scope="scope">
          <el-button type="success" @click="pass(scope.row)" size="mini">通过<i class="el-icon-circle-check"></i></el-button>
          <el-button type="danger"  @click="refuse(scope.row)" size="mini">不通过<i class="el-icon-circle-close"></i></el-button>
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

      <div style="margin: 10px 50px;">
        <el-popconfirm
                class="mr-5"
                confirm-button-text='确定'
                cancel-button-text='取消'
                icon="el-icon-info"
                icon-color="red"
                title="您确定要审核通过所以选中数据吗？"
                @confirm="passBatch">
          <el-button type="primary" slot="reference" size="mini" @click="passBatch">一键审核<i class="el-icon-circle-check"></i></el-button>
        </el-popconfirm>
      </div>
  </div>


</div>
</el-main>
</el-container>

</template>

<script>

export default {
    name: "ready",
    data(){
      return{
        //表中数据
        tableData:[
          {
            id:0,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日 "
          },
          {
            id:1,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日"
          },
          {
            id:2,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日"
          },
          {
            id:3,
            phonenumber:'1381234567',
            location:'xx',
            describe:"xx",
            time:"2022年4月27日"
          },
        ],

        //表信息
        total:10,
        pageNum:1,
        pageSize:8,

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
        this.request.get("/user/page",{
            params:{
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                username: this.phonenumber
            }
        }).then(res =>{
            console.log(res)
            this.tableData=res.data.records
            this.total=res.data.total
        })

        this.request.get("/role").then(res =>{
          this.roles = res.data
        })
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
        this.request.post("/",{}).then(res=>{
          
        })
      },

      // 审核不通过
      refuse(id){
        this.request.post("/"+id).then(res=>{
            if(res.data){
                this.$message.success("操作成功")
                this.dialogFormVisible = false
                this.load()
            }else{
                this.$message.error("操作失败")
            }
        })
      },

      // 多选
      handleSelectionChange(val){
        this.multipleSelection = val
        console.log(val)
      },

      // 批量删除
      passBatch(){
        let ids = this.multipleSelection.map(v =>v.id)//对象数组变为纯id数组
        if(ids.length==0)
            this.$message.error("请选择要删除的数据！")
        else{
            console.log(ids)
            this.request.post("user/del/batch",ids).then(res =>{
            if(res.data){
                this.$message.success("批量删除成功")
                this.load()
            }else{
                this.$message.error("批量删除失败")
            }
          })
        }
      },


    }
    
}

</script>

<style>
.el-card__body, .el-main {
    padding: 0;
}
.el-menu-item.is-active {
    background: #3369BB;
    color: #fff;
}
.el-menu {
    border-right: none;
}
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