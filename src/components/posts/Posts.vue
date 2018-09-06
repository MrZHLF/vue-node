<template>
  <div class="feed">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<!-- 展示评论表单	 -->
				<postfrom
					@update="getPost"
				></postfrom>
				<!-- 展示评论内容 -->
				<PostFeed
					v-for="(post,index) in posts"
					:key="post._id"
					:post="post"
					:showAction='true'
					@update="getPost"
				></PostFeed/>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import postfrom from'./PostForm'
import PostFeed from'./PostFeed'
export default {
  name: 'post',
  data () {
    return {
			posts:[],
			errors:{}
		}
  },
  beforeRouteEnter(to,from,next) {
  	next(vm => {
  	vm.getPost()
  	})
  },
  methods:{
		getPost(){
			this.$axios.get("/api/posts").then(res => {
				this.posts = res.data
				// console.log(this.posts)
			}).catch(err => {
				this.errors = err.response.data
			})
		},
	
  },
  components:{
		postfrom,
		PostFeed
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
