<template>
  <div class="form-group">
		<!-- 封装组件适用于textarea标签 -->
    <textarea
      class="form-control form-control-lg" 
      :class="{'is-invalid': error}"
      :placeholder="placeholder"
      :name='name'
			:value="value"
      @input="$emit('input', $event.target.value)"
    >
		</textarea>
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
    <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: 'TextAreaGroup',
  props:{
		type: {
      type: String,
      default: "text"
    },
		value: String,
    placeholder: String,
    name: String,
    error: String,
    info: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
