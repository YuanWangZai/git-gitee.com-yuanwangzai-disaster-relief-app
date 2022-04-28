<template>
  <div>
    <div class="top-bar">
        <div>
            <el-input style="width: 200px; margin-right:5px; margin-top:10px"  placeholder="救援队搜索" suffix-icon="el-icon-search" v-model="title"></el-input>
            <el-button class="ml-5" type="primary" @click="load" size="mini" style="margin-right:20px">搜索</el-button>
            <el-select v-model="value" placeholder="请选择省份">
                <el-option
                v-for="item in provinces"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div>
            <el-button style="width: 200px; margin-right:40px; margin-top:10px" type="primary" >添加救援队信息</el-button>
        </div>

    </div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="city"
        label="所在城市">
      </el-table-column>
      <el-table-column
        prop="name"
        label="救援队名称">
      </el-table-column>
      <el-table-column
        prop="leader"
        label="救援队负责人">
      </el-table-column>
      <el-table-column
        prop="phonenumber"
        label="联系电话">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row)" size="mini" >查看<i class="el-icon-edit-outline"></i></el-button>
          <el-button type="danger"  @click="hidden(scope.row)" size="mini" >删除<i class="el-icon-remove-outline"></i></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="救援队信息" :visible.sync="dialogFormVisible" width="50%">
        <el-form label-width="100px" size="small">
        <el-form-item label="队伍会标" >
            <el-upload
                class="avatar-uploader"
                action="http://47.115.216.157:9090/file/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="救援队名称" >
            <el-input v-model="team.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人名称" >
            <el-input v-model="team.leader" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" >
            <el-input v-model="team.phonenumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="救援队地址" >
        <div class="top-bar" style="margin-bottom: 20px">
        <el-select clearable @change="getcitys" v-model="team.province" placeholder="省" style="width:30%">
            <el-option 
                v-for="item in provinces"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select clearable @change="getdistricts" v-model="team.city" placeholder="市" style="width:30%">
            <el-option 
                v-for="item in citys"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select clearable  v-model="team.district" placeholder="区" style="width:30%">
            <el-option 
                v-for="item in districts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        </div>

            <el-input v-model="team.address" autocomplete="off"></el-input>
        </el-form-item>
        
        </el-form>
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    created(){
        this.getIndex()
    },
    data() {
      return {
        tableData: [
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 0,
                city:'郑州市',
                teams:[
                    {
                        name:'郑州市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                    {
                        name:'郑州红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    },
                ]

            },
            {
                id: 1,
                city:'新乡市',
                teams:[
                    {
                        name:'新乡市红十字蓝天应急救援队',
                        leader:'李志刚',
                        phonenumber:'13838332525'
                    }
                ]

            },

        ],

        provinces: [{
          value: '北京',
          label: '北京',
          citys:[
              {
                value: '北京',
                label: '北京',
                districts: [
                    {
                        value:'海淀区',
                        label:'海淀区'
                    }
                ]
              },  
          ]
        }, {
          value: '江苏',
          label: '江苏',
          citys:[
              {
                value: '北京',
                label: '北京',
                districts: [
                    {
                        value:'海淀区',
                        value:'海淀区'
                    }
                ]
              },  
          ]
        }, {
          value: '安徽',
          label: '安徽',
          citys:[
              {
                value: '北京',
                label: '北京',
                districts: [
                    {
                        value:'海淀区',
                        value:'海淀区'
                    }
                ]
              },  
          ]
        }],
        
        citys: [],
        //下拉框当前选中的值
        value:'',

        dialogFormVisible: true,
        team:{
            avatarUrl:'',
            name:'',
            leader:'',
            phonenumber:'',
            province:'',
            city:'',
            district:'',
            address:''
        }
      };
    },
    methods:{
        getIndex () {
            let arr = [] //保存表格合并需要的数据
            let s = 0
            let table = this.tableData
            let getTable = []
            table.forEach((item, i, data) => {
                if (arr.length) {
                    s = arr[arr.length - 1].row + data[i - 1].teams.length
                }
                arr.push({
                    row: s,
                    index: item.teams.length
                })
                if (item.teams && item.teams.length) {
                    item.teams.forEach(subItem => {
                        getTable.push({
                            id: item.id,
                            city: item.city,
                            name: subItem.name,
                            leader: subItem.leader,
                            phonenumber: subItem.phonenumber,
                        })
                    })
                }
            })
            this.arr = arr
            this.tableData = getTable
            console.log(arr);
        },
        // 合并表格方法
        arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0 || columnIndex === 1) {
                let obj = [0, 0]
                this.arr.some(v => {
                    if (rowIndex === v.row) {
                        obj = [v.index, 1]
                    }
                })
                return obj
            }  
        },
        getcitys(){
            this.citys = this.provinces.find((item) => this.team.province === item.value).citys
            console.log(this.citys);
        },
        getdistricts(){
            this.districts = this.citys.find((item) => this.team.city === item.value).districts
        }
    }
}
</script>

<style>
.top-bar{
    display: flex;
    justify-content:space-between;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>