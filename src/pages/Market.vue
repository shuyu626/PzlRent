<template>
  <div class="min-h-screen flex">
    <div class="hidden lg:block w-1/4 border-r p-5">
      <h2 class="text-xl font-semibold mb-4">商品分類</h2>
      <ul class="space-y-2">
        <li><a href="#" class="text-blue-600 hover:underline">全部商品</a></li>
        <li><a href="#" class="text-blue-600 hover:underline">熱門商品</a></li>
        <li><a href="#" class="text-blue-600 hover:underline">新上架商品</a></li>
        <li><a href="#" class="text-blue-600 hover:underline">特價商品</a></li>
      </ul>
    </div>
    <div class="w-3/4 p-5 w-full min-h-screen">
      <div class="w-2/3 mx-auto flex flex-1">
        <InputField id="search" class="flex-1">
          <template #prefix>
            <Icon name="mdi:search" size="24" />
          </template>
        </InputField>
        <BaseButton
        text="Search"
        class="btn--primary ml-3"
        >
        </BaseButton>
      </div>
      <div class="grid gap-5 xs:grid-cols-2 xs:gap-3 lg:grid-cols-3 m-5 lg:m-8 lg:gap-5">
        <ProductCard v-for="product in products" :key="product.id" :productCard="product"/>
      </div>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import InputField from '~/components/common/InputField.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import ProductCard from '~/components/common/ProductCard.vue';

const products = ref([
  {
    id: 1,
    title: '小油画 - 馨月之約',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608aff/800x.webp?source_format=jpg',
    price: '$400',
    pieces: 500
  },
  {
    id: 2,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608afe/800x.webp?source_format=jpg',
    price: '$600',
    pieces: 800
  },
  {
    id: 3,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e54/800x.webp?source_format=jpg',
    price: '$500',
    pieces: 600
  },
  {
    id: 4,
    title: '小油画 - 窗邊的貓',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e55/800x.webp?source_format=jpg',
    price: '$700',
    pieces: 900
  },
]);
</script>