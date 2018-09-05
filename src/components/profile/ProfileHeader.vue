<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card card-body bg-info text-white mb-3">
				<div class="row">
					<div class="col-4 col-md-3 m-auto">
						<!-- <img v-if="profile.user" :src="profile.user.avatar" alt=""> -->
						<img src="http://www.gravatar.com/avatar/637077799a582c6966a5cbe95e11d924?s=200&r=pg&d=mm" class="rouded-circle">
					</div>
				</div>
				<div class="text-center">
					<h1 v-if="profile.user" class="text-center display-4">{{profile.user.name}}</h1>
					<p v-if="profile.company" class="lead text-center">{{profile.company}}</p>
					<p  v-if="profile.location" class="text-center">{{profile.location}}</p>
					<p>
						<a v-if="profile.website" class="text-white p-2" :href="profile.website">
						  <i class="fas fa-globe fa-2x"></i>
						</a>
						<a v-if="profile.social && profile.social.wechat" class="text-white p-2" >
						  <i class="fab fa-weixin fa-2x"></i>
						</a>
						<a v-if='profile.social && profile.social.QQ' class="text-white p-2">
						  <i class="fab fa-qq fa-2x"></i>
						</a>
						<a v-if="profile.social && profile.social.tengxunkt" class="text-white p-2" :href="profile.social.tengxunkt">
						  <i class="fab fa-facebook fa-2x"></i>
						</a>
						<a v-if='profile.social && profile.social.wangyikt' class="text-white p-2" :href="profile.social.wangyikt">
						  <i class="fab fa-twitter fa-2x"></i>
						</a>
					  </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profileHeader',
  data () {
    return { }
  },
  props:{
	profile:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rouded-circle {
	border-radius: 50%;
}
</style>
