<template>
  <div class="dashboard">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1 class="display-4">Dashboard</h1>
					<p v-if="user !== null" class="lead text-muted">
						Welcome 
						<router-link v-if="profile == null" to="/profiles">{{user.name}}</router-link>
						<router-link v-else :to="`/profile/${profile.handle}`">{{user.name}}</router-link>
					</p>
					<div v-if="profile !== null">
						<!-- 信息 经历 教育 -->
						<ProfileActived></ProfileActived>
						
						<!-- 展示个人经历 -->
						<Experience @deleteExperience="deleteExperience" :experience="profile.experience"></Experience>
						
						<!-- 展示教育经历 -->
						<Education @deletecation="deletecation" :education="profile.education"></Education>
						
						<!-- 删除账户按钮 -->
						<div class="mb-3 mt-3">
							<button class="btn btn-danger"  @click="deleteClick">删除当前账户</button>
						</div>
					</div>
					<div v-else>
						<p>没有任何相关的个人信息,请添加你的个人信息</p>
						<router-link to="/create-profile" class="btn btn-info btn-lg">请添加个人信息</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileActived from './common/ProfileActived.vue'
import Experience from './common/Experience.vue'
import Education from './common/Education.vue'
export default {
  name: 'Dashboard',
  data () {
    return {
      profile: null
    }
  },
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	methods:{
		getProfileData() {
			this.$axios.get('/api/profile').then(res =>{
				
				this.profile = res.data;
				// console.log(this.profile)
				this.$store.dispatch("setProfile",this.profile)
			}).catch(err => {
				this.$store.dispatch("setProfile",null)
			})
		},
		// 删除当前个人账户
		deleteClick(){
			console.log(1)
			this.$axios.delete('/api/profile').then(res => {
				this.profile = null;
				// 更新store
				this.$store.dispatch("clearCurrentState");
				//路由跳转
				this.$router.push('/login')
				
			}).catch(err => {
				// console.log(err)
			})
		},
		// 删除个人经历
		deleteExperience(id) {  //接受子组件
			this.$axios.delete(`/api/profile/experience/${id}`).then(res =>{
				this.profile = res.data
			}).catch(err =>{
				console.log(err)
			})
		},
		// 删除教育经历
		deletecation(id){   //接受子组件
			this.$axios.delete(`/api/profile/education/${id}`).then(res => {
				this.profile = res.data;
			}).catch(err => {
				console.log(err)
			})
		}
	},
	created() {
		// this.getProfileData()
	},
	beforeRouteEnter(to,from,next) {  //进入页面刷新
		next(vm => {
			vm.getProfileData()
		})
	},
	components:{
		ProfileActived,
		Experience,
		Education
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
