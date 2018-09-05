<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
	  <div class="container">
		  <router-link to="/" class="navbar-brand">Vue项目实战</router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="mobile-nav">
			<ul class="navbar-nav mr-auto">
			  <li class="nav-item">
					<a class="nav-link"> 米修在线</a>
			  </li>
				<li class="nav-item">
					<router-link to='/profiles' class="nav-link">开发者</router-link>
				</li>
			</ul>

			<ul class="navbar-nav ml-auto">
				<li class="nav-item" v-show="isLogin">
					<router-link to='/feed' class="nav-link">留言</router-link>
				</li>
				<li class="nav-item" v-show="isLogin">
					<router-link to='/dashboard' class="nav-link">Dashboard</router-link>
				</li>
			  <li class="nav-item" v-show="!isLogin">
					<router-link to='/register' class="nav-link">注册</router-link>
			  </li>
			  <li class="nav-item" v-show="!isLogin">
					<router-link to='/login' class="nav-link">登录</router-link>
			  </li>
				<li class="nav-item" v-if="user !== null" v-show="isLogin">
					<a @click.prevent="loginOut" class="nav-link">
						<img :src="user.avatar" :alt="user.name" class="rouded-circle headerImg">
						退出
					</a>
				</li>
			</ul>
		</div>
	  </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
     
    }
  },
	computed:{
		isLogin() {
			if (this.$store.getters.isAuthenticated) {
				return true
			} else {
				return false
			}
		},
		user() {
			return this.$store.getters.user;
		}
	},
	methods: {
		loginOut() {
			//清除localStorage缓存
			 localStorage.removeItem("jwtToken");
			
			//清除请求头 
// 			this.$store.dispatch("setIsAuthenticated",false)
// 			this.$store.dispatch("setUser",{});
				this.$store.dispatch("clearCurrentState")
			//页面跳转
			this.$router.push('/login')
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerImg {
	width: 25px;
	margin-right: 15px;
}
.rouded-circle {
	border-radius: 50%;
}
</style>
