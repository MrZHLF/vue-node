<template>
    <div class="register">
		<div class="container">
			<div class="row">
				<div class="col-md-8 m-auto">
					<div class="display-4 text-center">注册</div>
					<p class="lead text-center">创建新的账户</p>
					<form @submit.prevent="submit" autocomplete="off" method="post">
						<!-- <div class="form-group">
							<input type="text" 
								v-model="newUser.name" 
								:class="{'is-invalid': errors.name}" 
								class="form-control form-control-lg" 
								placeholder="用户名" name="name" />
								<div v-if="errors.name" class="invalid-feedback">{{errors.name}}</div>
						</div>
						
						<div class="form-group">
							<input type="email" 
								v-model="newUser.email" 
								:class="{'is-invalid': errors.email}" 
								class="form-control form-control-lg" 
								placeholder="邮箱" name="email" />
								<div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
							<small className="form-text text-muted">我们使用了全球公共头像，如果需要的头像显示，请使用gravatar注册邮箱</small>
						</div>
						<div class="form-group">
							<input type="password" 
								v-model="newUser.password" 
								:class="{'is-invalid': errors.password}" 
								class="form-control form-control-lg" 
								placeholder="密码" name="password" />
								<div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
						</div>
						<div class="form-group">
							<input type="password" 
								v-model="newUser.password2" 
								:class="{'is-invalid': errors.password}" 
								class="form-control form-control-lg" 
								placeholder="确认密码" name="password2" />
								<div v-if="errors.password2" class="invalid-feedback">{{errors.password2}}</div>
						</div> -->
						<TextField 
              type='text'
              name='name'
              placeholder="用户名"
              v-model="newUser.name"
              :error='errors.name'>
						</TextField>
						<TextField 
              type='email'
              name='email'
              placeholder="邮箱地址"
              v-model="newUser.email"
              :error='errors.email'
              info='我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱'>
						</TextField>
						<TextField 
              type='password'
              name='password'
              placeholder="密码"
              v-model="newUser.password"
              :error='errors.password'>
					 </TextField>
           <TextField 
              type='password'
              placeholder="确认密码"
              v-model="newUser.password2"
              :error='errors.password2'>
						</TextField>
						<button type="submit"  class="btn btn-info btn-block mt-4">提交</button>
					</form>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import TextField from './common/TextFieldGroup'
export default {
  name: 'register',
  data () {
    return {
      newUser:{
				name:'',
				email:'',
				password:'',
				password2:''
	  },
	  errors:{}
    }
  },
	components:{
		TextField  
	},
  methods:{
		submit() {
			this.$axios.post('/api/users/register',this.newUser).then(res => {
				//使用mutation实现同步操作
				// this.$store.commit("setUser",res.data);
				//actions实现异步操作
				this.$store.dispatch("setUser",res.data)
				//页面跳转
				this.$router.push('/login')
				this.errors = {}
			}).catch(err => {
				if (err.response.data) {
					this.errors = err.response.data
				}
			})
		}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
