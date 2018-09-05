<template>
  <div class="post">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a class="bnt btn-light" @click="$router.go(-1)">返回</a>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
