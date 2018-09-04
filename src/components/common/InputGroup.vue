<template>
  <div class="input-group mb-3">
		<!-- 封装组件适用于input标签 -->
	<div class="input-group-prepend">
		<span class="input-group-text">
			<i :class="icon"></i>
		</span>
	</div>
    <input
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      :value="value"
      :placeholder="placeholder"
      :name='name'
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
  props:{
		type: {
      type: String,
      default: "text"
    },
		value: String,
    placeholder: String,
    name: String,
    error: String,
		icon:String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
