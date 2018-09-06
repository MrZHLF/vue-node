<template>
	<div class="comment">
		<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<a href="">
						<img style="width: 150px;" :src="comment.avatar" class="rounded-circle d-nonse d-md-block" alt="">
					</a>
					<br>
					<p class="text-center">{{comment.name}}</p>
				</div>
				<div class="col-md-9">
					<p class="lead">{{comment.text}}</p>
					<button @click="deletePost(comment._id)" v-if="user != null && user.id == comment.user" type="button" class="btn btn-danger mr-1">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'commentFeed',
		data() {
			return {

			}
		},
		computed: {
			user() { //匹配删除留言是否是本人登录，否则无法删除
				return this.$store.getters.user;
			}
		},
		methods: {
			deletePost(id) {
				this.$axios.delete(`/api/posts/comment/${this.postId}/${id}`).then(res => {
					//更新数据数据
					this.$emit('update')
				}).catch(err => {
					console.log(err.response.data);
				})
			},
		},
		props: {
			comment: Object,
			postId: String
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
