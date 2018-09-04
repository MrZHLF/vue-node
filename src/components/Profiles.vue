<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="mb-3 mt-4 text-center">开发者人员</h1>
				<p class="text-center">让世界丰富多彩的你们</p>
				
				<!-- 展示开发者信息 -->
				<ProfileItem
					v-if="profiles.length > 0"
					v-for="profileItem in profiles"
					:key="profileItem._id"
					:profileItem="profileItem"
				></ProfileItem>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileItem from './common/ProfileItem.vue'
export default {
  name: 'profiles',
  data () {
    return {
      profiles:[]
    }
  },
  methods:{
	getprofile() {
		this.$axios.get('api/profile/all').then(res => {
			this.profiles = res.data
			//分发action更改store的state
			this.$store.dispatch("setProfiles",res.data)
		}).catch(err => {
			this.profiles =[]
			//分发action更改store的state
			this.$store.dispatch("setProfiles",[])
		})
	}
  },
  mounted() {
	this.getprofile()
  },
  components:{
	ProfileItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
