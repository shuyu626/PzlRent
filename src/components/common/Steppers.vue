<template>
  <div class="flex justify-center items-center w-full">
    <template v-for="(label, index) in steps" :key="label">
        <div :class="['relative size-10 rounded-full flex items-center justify-center', currentStep == index ? 'bg-accent' : 'border-2 border-accent']">
          <span :class="['font-semibold text-lg', currentStep == index ? 'text-white' : 'text-accent']">{{ index + 1 }}</span>
          <span class="absolute top-12 whitespace-nowrap">{{ label }}</span>
        </div>
      <div v-if="index < steps.length - 1" class="flex-1 h-[3px] bg-accent mx-2"></div>
    </template>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  steps: string[]
  currentStep: number
}>()
</script>