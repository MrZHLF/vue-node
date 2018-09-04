<template>
    <div class="login">
		<div class="container">
			<div class="row">
				<div class="col-md-8 m-auto">
					<div class="display-4 text-center">登录</div>
					<p class="lead text-center">使用已有的账户登录</p>
					<form @submit.prevent="submit" autocomplete="off" method="post">
						<!-- <div class="form-group">
							<input type="email" 
								v-model="user.email"
								class="form-control form-control-lg" 
								:class="{'is-invalid': errors.email}" 
								placeholder="邮箱" name="email" />
							<div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
							<small className="form-text text-muted">我们使用了全球公共头像，如果需要的头像显示，请使用gravatar注册邮箱</small>
						</div> -->
						<!-- <div class="form-group">
							<input type="password" 
								v-model="user.password"
								class="form-control form-control-lg" 
								:class="{'is-invalid': errors.password}" 
								placeholder="密码" name="password" />
							<div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
						</div> -->
						<TextField 
							type='email'
							name='email'
							placeholder="邮箱地址"
							v-model="user.email"
							:error='errors.email'>
						</TextField>
						   
						<TextField 
							type='password'
							name='password'
							placeholder="密码"
							v-model="user.password"
							:error='errors.password'>
						</TextField>
						<button type="submit"  class="btn btn-info btn-block mt-4">登录</button>
					</form>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
import TextField from './common/TextFieldGroup'
export default {
  name: 'Login',
  data () {
    return {
     user:{
		 email:'',
		 password:''
	 },
	 errors:{}
    }
  },
  components:{
	TextField  
  },
  methods:{
	submit() {
		this.$axios.post('/api/users/login',this.user).then(res => {
			this.errors = ""
			const {token} = res.data;
			window.localStorage.setItem("jwtToken",token)
			
			//解析token
			const decoded = jwt_decode(token);
			
			//分发action更改store的state
			this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded))
			this.$store.dispatch("setUser",decoded);
			
			this.errors = {}
			//页面跳转
			this.$router.push('/dashboard')
		}).catch(err => {
			console.log(err)
			if (err.response.data) {
				this.errors = err.response.data;
				console.log(this.errors)
			}
		})
	},
	isEmpty(value) {
		return value === undefined || value === null || 
		(typeof value === "object" && Object.keys(value).length === 0) || 
		(typeof value === "string" && value.trim().length === 0)
	}
	
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
