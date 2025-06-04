<template>
  <transition name="scale">
  <div v-if="open" class="z-10">
    <div class="fixed inset-0 flex bg-neutral-dark/50 justify-center items-center"  @click="closeQuickView">
      <div class="flex flex-col mx-5 p-3 sm:p-5 max-h-[700px] max-w-[600px] lg:w-2/3 lg:h-2/3 lg:min-h-[400px] lg:max-h-[500px] lg:max-w-[800px] lg:p-8 bg-white rounded-xl overflow-y-auto" @click.stop>
        <div class="flex justify-end">
          <button @click="closeQuickView">
            <Icon name="mdi:close" size="30" class="text-neutral-dark"/>
          </button>
        </div>
        <div class="flex flex-col lg:flex-row p-3 gap-2 lg:gap-8 pt-0">
          <div class="max-h-[150px] sm:max-h-[200px] lg:w-1/3 lg:min-w-[250px lg:max-h-none overflow-hidden">
            <img src="https://i.pinimg.com/736x/7c/3e/26/7c3e26852c49f6d4365e4c7c0eca3e84.jpg" alt="" class="w-full lg:h-full object-cover rounded-md">
          </div>
          <div class="flex flex-col gap-3 lg:gap-5 flex-1">
            <h1 class="text-2xl lg:text-3xl font-bold">小油画 - 馨月之約</h1>
            <h2 class="text-xl lg:text-2xl font-normal">NT $400</h2>
            <div class="space-y-1 rounded-md bg-primary-light/70 p-5 text-md">
              <p class="space-x-2"><span class="font-semibold">拼圖片數：</span><span class="text-gray-600">1000 片</span></p>
              <p class="space-x-2"><span class="font-semibold">實體尺寸：</span><span class="text-gray-600">70 x 50 cm</span></p>
              <p class="space-x-2"><span class="font-semibold">拼圖材質：</span><span class="text-gray-600">紙板</span></p>
              <p class="space-x-2"><span class="font-semibold">拼圖品牌：</span><span class="text-gray-600">Ravensburger</span></p>
              <p class="space-x-2"><span class="font-semibold">包裝狀況：</span><span class="text-gray-600">盒裝完整、略有磨損</span></p>
              <p class="space-x-2"><span class="font-semibold text-red-700">商品狀況：</span><span class="text-gray-600">已拼一次、片數無缺漏</span></p>
            </div>
            <div>
              <BaseButton text="加入購物車" size="full" class="btn--secondary text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>
<script setup lang="ts">
import BaseButton from './BaseButton.vue';
const props = defineProps<{
  open: boolean
}>()
const emit = defineEmits<{
  (event: 'closeQuickView'): void;
}>()

const closeQuickView = () => {
  emit('closeQuickView') 
}
</script>
<style scoped>
</style>