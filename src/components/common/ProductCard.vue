<template>
  <div class="w-full max-h-[380px] rounded shadow-lg">
    <div class="max-h-[300px] w-full overflow-hidden bg-amber-100 cursor-pointer relative">
      <img :src="productCard!.image" alt="Product Image" class="w-full h-full object-cover brightness-95 hover:scale-125 hover:brightness-100" />
      <span class="absolute bottom-3 right-1 bg-secondary-dark text-white rounded-lg px-2 border border-secondary">{{ productCard!.pieces }}片</span>

    </div>
    <div class="flex flex-col items-center p-3 ga-4">
      <h1 class="text-base font-medium">{{ productCard!.title }}</h1>
      <p class="text-neutral font-medium">{{ productCard!.price }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">

interface ProductCard {
  id?: number;
  title: string;
  image: string;
  price: string;
  pieces: number;
}

const props = defineProps({
  productCard: {
    type: Object as () => ProductCard ,
  }
});
</script>

<style scoped>
</style>
