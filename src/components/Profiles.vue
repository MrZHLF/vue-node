<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="mb-3 mt-4 text-center">开发者人员</h1>
				<p class="text-center">让世界丰富多彩的你们</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profiles',
  data () {
    return {
      
    }
  },
  methods:{
	profiles() {
		this.$axios.get('api/profile/all').then(res => {
			//分发action更改store的state
			this.$store.dispatch("setProfiles",res.data)
		}).catch(err => {
			console.log(err)
		})
	}
  },
  mounted() {
	this.profiles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
