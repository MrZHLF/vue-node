<template>
  <div>
	<h4>教育经历</h4>
	<table class="table">
		<thead>
			<tr>
				<th>学校</th>
				<th>学历</th>
				<th>年份</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="edu of education" :key="edu._id">
				<td>{{edu.school}}</td>
				<td>{{edu.degree}}</td>
				<td>{{edu.from}}~{{edu.to}}</td>
				<td>
					<button class="btn btn-danger" @click="deleteEducation(edu._id)">删除</button>
				</td>
			</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data () {
    return {}
  },
  props:{
	education:Array
  },
  methods:{
	deleteEducation(id){
		this.$emit("deletecation",id)
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
