<template>
  <div v-show="open" class="fixed inset-0" @click="toggleCart">

  <div class="fixed top-20 right-10 bg-white border border-neutral-light/50 w-[280px] min-h-[180px] max-h-[600px] overflow-y-auto flex flex-col" @click.stop>
    <div class="flex items-center gap-3 px-3 py-2 bg-neutral-100 border-b  border-neutral-light/50">
      <Icon name="mdi:cart" size="24" class="text-neutral"/>
      <span class="text-neutral">購物車</span>
    </div>
    <ul class="w-full divide-y flex-1">
      <li class="flex items-center p-3 gap-3" v-for="n in 9">
        <div class="size-16 overflow-hidden">
          <img src="https://shoplineimg.com/5ff1da1434957d0020ba64c4/678f34e390fe4a00010ddbf6/800x.webp?source_format=jpg" class="w-full object-over" alt="">
        </div>
        <div class="flex-1">
          <h3 class="text-sm text-neutral"> Luna - 秋日漫步</h3>
          <div class="flex justify-between items-center">
            <p class="text-xs">NT$999 x 1</p>
            <Icon name="mdi:trash-can-outline" size="18" class="text-neutral cursor-pointer"/>
          </div>
        </div>
      </li>
    </ul>
    <div class="p-3">
      <BaseButton        
        text="訂單結帳"
        size="full"
        class="btn--accent text-sm"/>
    </div>
  </div>
  </div>

</template>
<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue';
const props = defineProps<{
  open: boolean
}>()
const emit = defineEmits<{
  (event: 'openCart'): void;
}>()
const toggleCart = () => {
  emit('openCart');
};
</script>