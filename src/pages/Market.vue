<template>
  <div class="min-h-screen flex p-5 lg:p-10 xl:p-20" >
    <!-- 側邊欄分類 -->
    <aside class="hidden md:block w-1/3 xl:w-1/4 p-5 ">
      <h2 class="text-xl font-semibold mb-4">商品分類</h2>
      <CategoryList></CategoryList>
    </aside>

    <main class="p-5 w-full min-h-screen">
      <div class="md:w-2/3 mx-auto flex flex-1">
        <InputField id="search" class="flex-1">
          <template #prefix>
            <Icon name="mdi:search" size="24" />
          </template>
        </InputField>
        <BaseButton
          text="Search"
          class="btn--accent ml-3"
        >
        </BaseButton>
      </div>
      <div class="flex my-5 md:mt-10">
        <div class="md:w-1/5 lg:w-2/5" aria-hidden="true"></div>
        <div class="w-full flex justify-end gap-5 ">
          <BaseSelect selected="商品排序" :options="sortOptions"></BaseSelect>
          <BaseSelect selected="每頁筆數" :options="perPageOptions" class="hidden sm:block"></BaseSelect>
          <BaseSelect selected="拼圖片數" :options="pieceCount"></BaseSelect>
        </div>
      </div>
      <div class="grid gap-5 xs:grid-cols-2 xs:gap-3 lg:grid-cols-3 lg:gap-5">
        <ProductCard v-for="product in products" :key="product.id" :productCard="product" @click="showQuickView =true"/>
      </div>
      <div class="flex justify-end my-4">
        <Pagination :totalItems="products.length" :selectedPerPage="selectedPerPage"/>
      </div>
    </main>
  </div>
  <Quickview :open="showQuickView" @closeQuickView="showQuickView = false"/>
</template>
<script setup lang="ts">
import InputField from '~/components/common/InputField.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import ProductCard from '~/components/common/ProductCard.vue';
import BaseSelect from '~/components/common/BaseSelect.vue';
import CategoryList from '~/components/common/CategoryList.vue';
import Pagination from '~/components/common/Pagination.vue';
import Quickview from '~/components/common/Quickview.vue';
const showQuickView = ref(false)
const sortOptions = ref([
  { value: 'price', label: '價格' },
  { value: 'rating', label: '評分' },
  { value: 'date', label: '日期' }
]) 

// 每頁筆數
const perPageOptions = ref([
  { value:'9', label:'每頁 9 筆' },
  { value:'12', label:'每頁 12 筆' },
  { value:'18', label:'每頁 18 筆' },
  { value:'24', label:'每頁 24 筆' },
])

const pieceCount = ref([
  { value:'300', label:'300 片' },
  { value:'500', label:'500 片' },
  { value:'600', label:'600 片' },
  { value:'800', label:'800 片' },
  { value:'1000', label:'1000 片' },
  { value:'1200', label:'1200 片' },
  { value:'1600', label:'1600 片' },
  { value:'2000', label:'2000 片' },

])

const selectedPerPage = ref('6')

const products = ref([
  {
    id: 1,
    title: '小油画 - 馨月之約',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608aff/800x.webp?source_format=jpg',
    price: 'NT $400',
    pieces: 500
  },
  {
    id: 2,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608afe/800x.webp?source_format=jpg',
    price: 'NT $600',
    pieces: 800
  },
  {
    id: 3,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e54/800x.webp?source_format=jpg',
    price: 'NT $500',
    pieces: 600
  },
  {
    id: 4,
    title: '小油画 - 窗邊的貓',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e55/800x.webp?source_format=jpg',
    price: 'NT $700',
    pieces: 900
  },
  {
    id: 5,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://i.pinimg.com/736x/58/e5/de/58e5decaf69b3f073fc667b24b0bd939.jpg',
    price: 'NT $600',
    pieces: 800
  },
  {
    id: 6,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://i.pinimg.com/736x/7c/3e/26/7c3e26852c49f6d4365e4c7c0eca3e84.jpg',
    price: 'NT $500',
    pieces: 600
  },
  {
    id: 7,
    title: '小油画 - 窗邊的貓',
    image: 'https://i.pinimg.com/736x/2c/76/12/2c76121b1945f97342a1f377000f223f.jpg',
    price: 'NT $700',
    pieces: 900
  },
  {
    id: 8,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608afe/800x.webp?source_format=jpg',
    price: 'NT $600',
    pieces: 800
  },
  {
    id: 9,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e54/800x.webp?source_format=jpg',
    price: 'NT $500',
    pieces: 600
  },
  {
    id: 10,
    title: '小油画 - 窗邊的貓',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e55/800x.webp?source_format=jpg',
    price: 'NT $700',
    pieces: 900
  },
  {
    id: 11,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608afe/800x.webp?source_format=jpg',
    price: 'NT $600',
    pieces: 800
  },
  {
    id: 12,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e54/800x.webp?source_format=jpg',
    price: 'NT $500',
    pieces: 600
  },
  {
    id: 13,
    title: '小油画 - 窗邊的貓',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e55/800x.webp?source_format=jpg',
    price: 'NT $700',
    pieces: 900
  },
]);
</script>