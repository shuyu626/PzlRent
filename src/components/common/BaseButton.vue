<template>
  <button
    :type="type"
    :class="['btn', sizeClass, ButtonClass]"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '送出'
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  size: {
    type: String as () => 'full' | 'normal',
    default: 'w-auto'
  },
  ButtonClass: {
    type: String,
    default: ''
  }
})

// width class
const sizeClass = computed(() => {
  return props.size === 'full' ? 'w-full' : 'w-auto'
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>
<style scoped>
.btn {
  @apply rounded-md px-4 py-2 font-medium transition-colors duration-200 focus:outline-none;
}

.btn--primary{
  @apply bg-primary text-white hover:bg-primary-dark;
}

.btn--accent{
  @apply bg-accent text-white hover:bg-accent-dark;
}

.btn--secondary{
  @apply bg-secondary text-white hover:bg-secondary-dark;
}

.btn--neutral {
  @apply bg-neutral text-white hover:bg-neutral-dark;
}

.btn--outline{
  @apply bg-transparent border-2 hover:brightness-110;
}

.btn--primary-outline {
  @apply btn--outline border-primary text-primary;
}

.btn--accent-outline {
  @apply btn--outline border-accent text-accent;
}

.btn--secondary-outline {
  @apply btn--outline border-secondary text-secondary;
}

.btn--white-outline {
  @apply btn--outline border-white text-white hover:bg-white/20;
}
</style>
