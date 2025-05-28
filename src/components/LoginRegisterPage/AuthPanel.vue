<template>
  <div class="w-full p-8 max-w-md space-y-4 text-center">
    <h1 class="text-5xl text-white">{{ title }}</h1>
    <p class="text-white mt-4">{{ subtitle }}</p>
    <BaseButton
      size="full"
      :text="buttonText"
      @click="$emit('toggleMode')"
      class="btn--white-outline"
    ></BaseButton>
  </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: '註冊'
  }
});
const emit = defineEmits(['toggleMode']);
const handleClick = () => {
  emit('toggleMode');
};
</script>