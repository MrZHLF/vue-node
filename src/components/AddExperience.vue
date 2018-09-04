<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 m-auto">
				<a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
				<h1 class="display-4 text-center">添加个人经历</h1>
				<small class="d-block pb-3">* 表示必填项</small>
				<form @submit.prevent="submit">
					<TextField
						type="text"
						name="title"
						placeholder="* 工作内容"
						v-model="msgInfo.title"
						:error="errors.title">
					</TextField>
					<TextField
						type="text"
						name="company"
						placeholder="* 公司"
						v-model="msgInfo.company"
						:error="errors.company">
					</TextField>
					<TextField
						type="text"
						name="location"
						placeholder="* 地点"
						v-model="msgInfo.location"
						:error="errors.location">
					</TextField>
					<h6>开始时间</h6>
					<TextField
						type="date"
						name="from"
						v-model="msgInfo.from"
						:error="errors.from">
					</TextField>
					<h6>结束时间</h6>
					<TextField
						type="date"
						name="to"
						v-model="msgInfo.to"
						:error="errors.to"
						:disabled="msgInfo.current">
					</TextField>
					<div class="form-check mb-4">
						<input type="checkbox" 
							class="form-check-input"
							 v-model="msgInfo.current"
							 id="current"
							name="current">
							<label class="form-check-label" for="current">当前在职</label>
					</div>
					<TextArea
						placeholder="工作描述"
						name='description'
						v-model="msgInfo.description"
						:error='errors.description'
						info='其他工作职责等' >
						</TextArea>
					<input type="submit" class="btn btn-info btn-block mt-4" value="添加">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import TextField from './common/TextFieldGroup'
import TextArea from './common/TextAreaGroup'
export default {
  name: 'AddExperience',
  data () {
    return {
      msgInfo:{
				title:"",
				company:"",
				location:"",
				from:"",
				to:"",
				description:"",
				current:false
			},
			errors:""
    }
  },
  methods:{
		submit() {
			if(this.msgInfo.current) {
				this.msgInfo.to = "在职"
			}
			this.$axios.post('/api/profile/experience',this.msgInfo).then(res => {
				this.errors = ""; // 清空错误提示
        this.$router.push("/dashboard");
				
			}).catch(err => {
				if (err.response.data) {
					this.errors = err.response.data
				}
			})
		} 
  },
  components:{
	  TextField,
	  TextArea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
