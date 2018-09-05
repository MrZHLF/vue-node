<template>
	<div class="card card-body bg-light mb-3">
		<div class="row">
			<div class="col-2">
				<!-- <img v-if="profileItem.user" 
					:src="profileItem.user.avatar" 
					style="width: 150px;" class="rouded-circle" alt=""> -->
					<img src="http://www.gravatar.com/avatar/637077799a582c6966a5cbe95e11d924?s=200&r=pg&d=mm" alt="" style="width: 150px;" class="rouded-circle">
			</div>
			<div class="col-lg-6 col-md-4 col-8">
				<h3 v-if="profileItem.user">{{profileItem.user.name}}</h3>
				<p>{{profileItem.status}}</p>
				<p v-if="profileItem.location">{{profileItem.location}}</p>
				<router-link :to="`/profile/${profileItem.handle}`">更多信息</router-link >
			</div>
			<div class="col-md-4 d-none d-lg-block">
				<h4>技能</h4>
				<ul class="list-group" >
					<li class="list-group-item" v-for="(skills,index) in profileItem.skills" :key="index">
						<i class="fa fa-check pr-1"></i>{{skills}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profileItem',
  data () {
    return {
      
    }
  },
  props:{
	profileItem:Object
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.rouded-circle{
		border-radius: 50%;
	}
</style>
