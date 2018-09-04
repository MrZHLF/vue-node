<template>
	<div class="loading">
		<img src="../../assets/loading.gif" alt="">
	</div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
	position: relative;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.loading img {
	position: absolute;
	width: 50px;
	height: 50px;
	top: calc(50% - 25px);
	left: calc(50% - 25px);
}
</style>
