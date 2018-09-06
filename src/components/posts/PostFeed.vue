<template>
  <div class="potst">
	<div class="card card-body mb-3">
		<div class="row">
			<div class="col-md-3">
				<a href="">
					<img style="width: 150px;" :src="post.avatar" class="rounded-circle d-nonse d-md-block" alt="">
				</a>
				<br>
				<p class="text-center">{{post.name}}</p>
			</div>
			<div class="col-md-9">
				<p class="lead">{{post.text}}</p>
				<div v-if="showAction">
					<button @click="likeClick(post._id)" type="button" class="btn btn-light mr-1">
						<i class="text-info fas fa-thumbs-up"></i>
						<span class="badge badge-light">{{post.likes.length}}</span>
					</button>
					<button @click="unlikeClick(post._id)" type="button" class="btn btn-light mr-1">
						<i class="text-secondary fas fa-thumbs-down"></i>
						<span class="badge badge-light"></span>
					</button>
					<router-link :to="'/post/'+post._id" class="btn btn-info mr-1">鼓励留言</router-link>
					<button @click="deletePost(post._id)" v-if="user != null && user.id == post.user" type="button" class="btn btn-danger mr-1">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'postFeed',
  data () {
    return {
     
    }
  },
  computed:{
		user() { //匹配删除留言是否是本人登录，否则无法删除
			return this.$store.getters.user;
		}
  },
  methods:{
		deletePost(id) {
			this.$axios.delete(`api/posts/${id}`).then(res => {
				//更新数据数据
				this.$emit('update')
			}).catch(err => {
					
			})
		},
		likeClick(id){ //点赞
			this.$axios.post(`/api/posts/like/${id}`).then(res => {
				//点赞成功 更新数据
				this.$emit('update')
			}).catch(err => {
				// this.errors = err.response.data
				console.log(err)
			})
		},
		unlikeClick(id){
			this.$axios.post(`/api/posts/unlike/${id}`).then(res => {
				//取消点赞成功 更新数据
				this.$emit('update')
			}).catch(err => {
				console.log(err.alreadyliked)
			})
		}
  },
  props:{
		post:Object,
		showAction:Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
