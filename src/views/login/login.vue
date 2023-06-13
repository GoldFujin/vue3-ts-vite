<template>
  <div> <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="pwd" prop="pwd">
        <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form></div>
    <el-button type="primary" :icon="Plus">主要</el-button>
    <el-button type="primary" :icon="Edit">编辑</el-button>
    <svg-icon name="people" color="red"></svg-icon>
    <h1>44444</h1>
    npm i -D vite-plugin-mock mockjs

</template>

<script  lang='ts' setup>
import { reactive, toRefs, ref, } from 'vue'
import { Plus,Edit } from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import request from "@/utils/request";
const state = reactive({
  ruleForm: {
    username: '',
    pwd: '',
  }
})
const validatePwd = (_rule: unknown, value: string | undefined, callback: (msg?:string)=>void) => {
  if (!value) {
    callback('请输入密码')
  } else {
    callback();
  }
}
let { ruleForm } = toRefs(state);
const rules = reactive ({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  pwd: [{required: true, validator: validatePwd, trigger: 'blur' }
    // {
    //   required: true,
    //   message: '请输入密码',
    //   trigger: 'change',
    // },
  ]
})

// 获取form对像
let ruleFormRef = ref();
const login = ()=> {
  ruleFormRef.value.validate().then(() => {
    request({
      url:'/user/login',
      method:'post',
      data:{
        username:"admin",
        password:'111111',
      }
    }).then( res => {
      console.log(res);
      
    })
    console.log(11);
  }).catch(() => {
    console.log(222);
  })
}
</script>

<style lang="scss" scoped>
h1 {
  color: $color-red;
}
</style>