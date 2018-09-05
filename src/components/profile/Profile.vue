<template>
	<div class="profile">
		<div class="container">
			<div class="row">
				<div class="col-6">
					<a class="btn btn-light mb-3 float-left" @click.prevent="$router.go(-1)">返回个人信息</a>
				</div>
			</div>
			<ProfileHeader v-if="profile" :profile="profile"/>
			<ProfileAbout v-if="profile" :profile="profile"/>
			<ProfileCreds 
				v-if="profile && (profile.education || profile.experience)"
				:education="profile.education" 
				:experience="profile.experience"
				/>
			<ProfileGithub v-if="profile && profile.githubusername" 
            :username='profile.githubusername' />
		</div>
		
	</div>
</template>

<script>
import ProfileHeader from './ProfileHeader'
import ProfileAbout from './ProfileAbout'
import ProfileCreds from './ProfileCreds'
import ProfileGithub from './ProfileGithub'
export default {
  name: 'profile',
  data () {
    return {
		profile:null
	}
  },
  methods:{
	getProfileByHandle(handle) {
		this.$axios.get(`/api/profile/handle/${handle}`).then(res => {
			this.profile = res.data;
		}).catch(err => {
			this.profile = {}
		})
	}
  },
  beforeRouteEnter(to,from,next) {
	  next(vm => {
		vm.getProfileByHandle (to.params.handle)
	  })
  },
  components:{
		ProfileHeader,
		ProfileAbout,
		ProfileCreds,
		ProfileGithub
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
