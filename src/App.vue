<template>
  <div id="app">
		<NavBar></NavBar>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- <Landing></Landing> -->
		<footes-app></footes-app>
		<Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import jwt_decode from 'jwt-decode'
import Loading from './components/common/Loading'
export default {
  name: 'App',
	components:{
		NavBar,
		Landing,
		"footes-app":Footer,
		Loading
	},
	computed:{
		loading() {
			return this.$store.getters.loading;
		}
	},
	created() {
		if(localStorage.jwtToken) {
			//解析token
			const decoded = jwt_decode(localStorage.jwtToken);
			
			//获取当前页面
			const currentTime = Date.now() / 1000;
			//检查token是否过期
			if (decoded.exp < currentTime) {
// 				this.$store.dispatch("setIsAuthenticated",false)
// 				this.$store.dispatch("setUser",{});
				this.$store.dispatch("clearCurrentState")
				this.$router.push('/login');
			} else {
				//分发action更改store的state
				this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded))
				this.$store.dispatch("setUser",decoded);
			}
		}
	},
	methods: {
		isEmpty(value) {
			return value === undefined || value === null || 
			(typeof value === "object" && Object.keys(value).length === 0) || 
			(typeof value === "string" && value.trim().length === 0)
		}
	},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
