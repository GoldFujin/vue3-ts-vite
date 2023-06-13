<template>
  <div class="login-container">
    <div class="login-box">
      <div>
        <p class="login-title">Hello</p>
        <p class="login-des">欢迎来到丁桂鱼甄选</p>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
          <el-form-item label="" prop="username">
            <el-input class="inp" v-model="ruleForm.username" type="text" autocomplete="off" :prefix-icon="User" />
          </el-form-item>
          <el-form-item label="" prop="pwd">
            <el-input class="inp" v-model="ruleForm.pwd" type="password" autocomplete="off" :prefix-icon="Lock" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
        <!-- <el-button type="primary" :icon="Plus">主要</el-button>
    <el-button type="primary" :icon="Edit">编辑</el-button> -->
        <!-- <svg-icon name="people" color="red"></svg-icon> -->
      </div>
      <div></div>
    </div>
  </div>
</template>

<script  lang='ts' setup>
import { reactive, toRefs, ref, } from 'vue'
import { User, Lock } from "@element-plus/icons-vue";
// import SvgIcon from "@/components/SvgIcon/index.vue";
import request from "@/utils/request";
const state = reactive({
  ruleForm: {
    username: '',
    pwd: '',
  }
})
const validatePwd = (_rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
  if (!value) {
    callback('请输入密码')
  } else {
    callback();
  }
}
let { ruleForm } = toRefs(state);
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  pwd: [{ required: true, validator: validatePwd, trigger: 'blur' }
    // {
    //   required: true,
    //   message: '请输入密码',
    //   trigger: 'change',
    // },
  ]
})

// 获取form对像
let ruleFormRef = ref();
const login = () => {
  ruleFormRef.value.validate().then(() => {
    request({
      url: '/user/login',
      method: 'post',
      data: {
        username: "admin",
        password: '111111',
      }
    }).then(res => {
      console.log(res);

    })
    console.log(11);
  }).catch(() => {
    console.log(222);
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 40%;
    background-color: transparent;
    padding: 2%;
    border-radius: 15px;
    backdrop-filter: blur(10px);

    .login-title {
      font-size: clamp(20px, 2.5vw, 60px);
      color: #fff;
    }

    .login-des {
      font-size: clamp(16px, 1.5vw, 30px);
      color: #fff;
      margin: 3% 0;
    }

    .demo-ruleForm {
      .inp {
        height: 40px;
        font-size: clamp(14px, 1.5vw, 18px);
      }
    }

    @media screen and (max-width: 767px) {
      width: 80%;

      .demo-ruleForm {
        .inp {
          height: 32px;
        }
      }
    }
  }
}

.el-button--primary {
  width: 100%;
  font-size: 1vw;
  padding: 3%;
}

// ::v-deep .el-input__wrapper>.el-input__inner {
//   height: 40px;
//   font-size: clamp(14px, 1.5vw, 18px);

//   @media screen and (max-width: 767px) {
//     height: 32px;
//   }
// }
</style>