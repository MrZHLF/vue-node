<template>
  <div>
	<h4>个人履历</h4>
	<table class="table">
		<thead>
			<tr>
				<th>公司</th>
				<th>职位</th>
				<th>年份</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="exp in experience" :key="exp._id">
				<td>{{exp.company}}</td>
				<td>{{exp.description}}</td>
				<td>{{exp.from}} ~ {{exp.to}}</td>
				<td>
					<button class="btn btn-danger" @click="deletePerience(exp._id)">删除</button>
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
    return {
      
    }
  },
  props:{
	experience:Array
  },
  methods:{
	deletePerience(id) {
		this.$emit("deleteExperience", id);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
