<template>
  <div class="form-group">
    <input
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name='name'
      :disabled='disabled'
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
    <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: 'TextFieldGroup',
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
    disabled: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
