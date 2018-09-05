<template>
  <div class="form mb-3">
	<div class="card card-info">
		<div class="card-header bg-info text-white">
			写点什么呢......
		</div>
		
		<div class="card-body">
			<form @submit.prevent="submit">
				<TextArea
					name="text"
					placeholder="随便写点吧"
					v-model="text"
					:error="errors.text"
				></TextArea>
				<input type="submit" class="btn btn-dark">
			</form>
		</div>
	</div>
  </div>
</template>

<script>
import TextArea from '../common/TextAreaGroup'
export default {
  name: 'postform',
  data () {
    return {
      text:"",
	  errors:{}
    }
  },
  methods:{
	submit() {
		const user = this.$store.getters.user;
		
		const newPost = {
			text: this.text,
			name:user.name,
			avatar:user.avatar
		};
		// 添加评论
		this.$axios.post("/api/posts",newPost).then(res => {
			this.errors = {};
			this.text = "";
			this.$emit('update'); //更新父组件
		}).catch(err => {
			this.errors = err.response.data
		})
		
	}
  },
  components:{
	TextArea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
