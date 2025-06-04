<template>
  <div class="space-y-2">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative">
      <div v-if="$slots.before" class="absolute inset-y-0 -left-12 flex items-center pl-3">
        <slot name="before" />
      </div>
      <div v-if="$slots.prefix" class="absolute inset-y-0 left-0 flex items-center pl-3">
        <slot name="prefix" />
      </div>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :class="['input', inputClass,
        { 'has-prefix': $slots.prefix, 'has-suffix': $slots.suffix }]" 
        v-bind="$attrs"
        :autocomplete="autocomplete"
        :value="modelValue"
        @input="updateValue"
      />
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <slot name="suffix" />
      </div>
      <div v-if="$slots.after" class="absolute inset-y-0 -right-12 flex items-center pl-3">
        <slot name="after" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  },
  autocomplete: {
    type: String,
    default: 'one-time-code'
  }
});

const emit = defineEmits()
const updateValue = (event:Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<style scoped>
.input{
  @apply px-3 py-2 w-full border rounded focus:outline-none;
}

.input--focus {
  @apply focus:ring-2 focus:ring-accent-light
}

.input.has-prefix {
  @apply pl-10;
}

.input.has-suffix {
  @apply pr-10;
}

input[type="checkbox"]{
  @apply size-4 accent-secondary-dark
}
</style>
