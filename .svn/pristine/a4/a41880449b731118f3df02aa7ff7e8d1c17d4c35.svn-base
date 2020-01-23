<template>
  <div class="login">
    <el-form class="login-box" :model="value" :rules="rules" ref="login">
      <el-form-item prop="username">
        <el-input
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
          v-model="value.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          prefix-icon="el-icon-lock"
          v-model="value.password"
          show-password
          @keydown.enter.native="onLogin('login')"
        >
        </el-input>
      </el-form-item>

      <a href="#" class="forget">忘记密码</a>
      <div class="btn">
        <el-form-item>
          <el-button type="primary" @click="$router.push('/register')">
            注册
          </el-button>
          <el-button type="danger" @click="onLogin('login')">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { postLogin } from '@/api/postLogin'
export default {
  name: 'login',
  data: function() {
    return {
      value: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLogin(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          postLogin(this.value)
            .then(res => {
              if (res.data.flag === true) {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                this.$store.commit('setUserName', this.value.username)
                window.localStorage.setItem('token', res.data.data.token)
                this.$router.push('/home')
              } else this.$message.error('用户名或密码错误，请重新尝试')
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.login
  width 100%
  display flex
  justify-content center
  .login-box
    margin-top 120px
    width 400px
    display flex
    flex-direction column
    align-items center
    padding 30px 20px 0px
    background #f3f3f3
    border-radius 10px
    .el-input
      width 300px
    .forget
      width 300px
      margin-bottom 20px
      text-align right
      color #999
      text-decoration none
      &:hover
        color #FF0000
</style>
