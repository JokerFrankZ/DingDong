<template>
  <div class="register">
    <el-form class="register-box" :model="value" :rules="rules" ref="register">
      <el-form-item prop="userName">
        <el-input
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
          v-model="value.userName"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          prefix-icon="el-icon-lock"
          v-model="value.password"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input
          placeholder="确认密码"
          prefix-icon="el-icon-circle-check"
          v-model="value.checkPassword"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="payPwd">
        <el-input
          placeholder="支付密码"
          prefix-icon="el-icon-wallet"
          v-model="value.payPwd"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          placeholder="电子邮箱"
          prefix-icon="el-icon-message"
          v-model="value.email"
          type="email"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input
          placeholder="手机号码"
          prefix-icon="el-icon-phone"
          v-model="value.phone"
          type="tel"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="nickName">
        <el-input
          placeholder="用户昵称"
          prefix-icon="el-icon-user"
          v-model="value.nickName"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="realName">
        <el-input
          placeholder="用户真名"
          prefix-icon="el-icon-s-custom"
          v-model="value.realName"
        >
        </el-input>
      </el-form-item>
      <div class="owned">
        已经有注册账号了？去<router-link to="/login">登录</router-link>
      </div>
      <div class="btn">
        <el-form-item>
          <el-button type="primary" @click="onRegister('register')">
            注册
          </el-button>
          <el-button @click="reset('register')">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { postRegister } from '@/api/postRegister'
export default {
  name: 'register',
  data: function() {
    let checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入电子邮箱'))
      } else {
        if (!value.includes('@')) {
          callback(new Error('请输入正确的电子邮箱格式，如：123@qq.com'))
        }
        callback()
      }
    }
    let checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.value.checkPassword !== '') {
          this.$refs.register.validateField('checkPassword')
        }
        callback()
      }
    }
    let checkPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.value.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      value: {
        userName: '',
        password: '',
        checkPassword: '',
        payPwd: '',
        email: '',
        phone: '',
        nickName: '',
        realName: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [{ validator: checkPass, trigger: 'blur' }],
        checkPassword: [{ validator: checkPass2, trigger: 'blur' }],
        email: [{ validator: checkEmail, trigger: 'blur' }],
        payPwd: [
          { required: true, message: '请输入支付密码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度保持在6个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        realName: [
          { required: true, message: '请输入真实名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onRegister(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          delete this.value.checkPassword
          postRegister(this.value)
            .then(res => {
              if (res.data.flag === true) {
                this.$message({
                  message: '恭喜你，注册成功',
                  type: 'success'
                })
                this.$router.push('/login')
              } else {
                this.$message.error('对不起，注册失败，请重新尝试')
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          return false
        }
      })
    },
    reset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped lang="stylus">
.register
  width 100%
  display flex
  justify-content center
  .register-box
    margin-top 30px
    width 400px
    display flex
    flex-direction column
    align-items center
    padding 30px 20px 0px
    background #f3f3f3
    border-radius 10px
    .el-input
      width 300px
    .owned
      color #999
      margin-bottom 20px
      a
        text-decoration none
        color #66b1ff
        &:hover
          color #ff0000
</style>
