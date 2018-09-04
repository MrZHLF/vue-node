<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 m-auto">
				<a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
				<h1 class="display-4 text-center">添加教育经历</h1>
				<small class="d-block pb-3">* 表示必填项</small>
				<form @submit.prevent="submit">
					<TextField
						type="text"
						name="school"
						placeholder="* 学校或培训"
						v-model="msgInfo.school"
						:error="errors.school">
					</TextField>
					<TextField
						type="text"
						name="degree"
						placeholder="* 学历"
						v-model="msgInfo.degree"
						:error="errors.degree">
					</TextField>
					<TextField
						type="text"
						name="fieldofstudy"
						placeholder="专业"
						v-model="msgInfo.fieldofstudy"
						:error="errors.fieldofstudy">
					</TextField>
					<h6>开始时间</h6>
                        <TextField 
                            type='date'
                            name='from'
                            v-model="msgInfo.from"
                            :error='errors.from'>
						</TextField>

                        <h6>结束时间</h6>
                        <TextField 
                            type='date'
                            name='to'
                            v-model="msgInfo.to"
                            :error='errors.to'
                            :disabled='msgInfo.current'>
						</TextField>
						<div class="form-check mb-4">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                name="current"
                                v-model="msgInfo.current"  
                                id="current" />
                            <label class="form-check-label" for="current">
                                当前在校
                            </label>
                        </div>

                        <TextArea
                            placeholder="在校表现"
                            name='description'
                            v-model="msgInfo.description"
                            :error='errors.description'
                            info='说说你在学习过程的经历'>
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
  name: 'AddEducation',
  data () {
    return {
      msgInfo:{
			school:"",
			degree:"",
			fieldofstudy:"",
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
				this.msgInfo.to = "在校"
			}
			this.$axios.post('/api/profile/education',this.msgInfo).then(res => {
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
