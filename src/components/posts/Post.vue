<template>
  <div class="post">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="bnt btn-light" @click="$router.go(-1)">返回</a>
				<postfeed
					v-if="postData != null"
					:post="postData" :showAction='false'
					></postfeed>
					
					<!-- 评论表单 -->
					<commentForm
						v-if="postData != null"
						:postId="postData._id"
						 @update="getPost(postData._id)"
					></commentForm>
					
					<!-- 展示评论信息 -->
					<CommentFeed
						v-if="postData != null && postData.comments.length > 0"
						v-for="comment in postData.comments"
						:key="comment._id"
						:postId="postData._id"
						:comment="comment"
						@update='getPost(postData._id)'
					></CommentFeed>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import postfeed from './postFeed'
import commentForm from './CommentForm'
import CommentFeed from './CommentFeed'
export default {
  name: 'post',
  data () {
    return {
      postData: null,
			errors: {}
    }
  },
	beforeRouteEnter(to,from,next) {
		next(vm => {
			vm.getPost(to.params.id)
		})
	},
	methods:{
		getPost(id) {
			this.$axios.get(`/api/posts/${id}`).then(res =>{  //单个评论信息
				this.postData = res.data;
				this.errors = ""
				// console.log(res.data)
			}).catch(err => {
				this.postData = '';
				this.errors = err.response.data
			})
		}
	},
	components:{
		postfeed,
		commentForm,
		CommentFeed
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>