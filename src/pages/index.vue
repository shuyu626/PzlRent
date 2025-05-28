<template>
  <div class="bg-background min-h-screen">
    <section class="bg-primary-light mb-16 text-center">
      <div class="w-full relative overflow-hidden" style="height: 600px;">
        <img src="https://i.pinimg.com/736x/84/4f/9d/844f9d56059a01278842e21aeb269729.jpg" alt="" class="object-contain w-full">
      </div>
      <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <h1 class="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          找到下一個拼圖的快樂！
        </h1>
        <p class="text-neutral text-lg mb-6">
          二手拼圖買賣與租借平台，讓拼圖更環保也更有趣。
        </p>
        <NuxtLink
          to="/market"
          class="inline-block bg-primary text-white text-lg px-6 py-3 rounded-2xl shadow-md hover:bg-primary-dark transition"
        >
          立即開始探索
        </NuxtLink>
      </div>
    </section>


    <section class="py-5 lg:py-10 px-5 max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-neutral-dark my-6">服務項目</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        <div v-for="n in 4" class="bg-accent w-64 h-48 rounded"></div>
      </div>
    </section>

    <!-- Category Quick Filters -->
    <section class="py-5 lg:py-10 px-5 max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-neutral-dark my-6">快速分類</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        <div v-for="category in categories" :key="category.title" class="text-center space-y-2">
          <div
            class="bg-accent text-white mx-auto size-28 rounded-full text-center cursor-pointer hover:bg-accent-light overflow-hidden shadow-2xl"
          >
            <img :src="category.image" alt="" class="brightness-90 object-cover w-full h-full hover:brightness-100">
          </div>
          <p>{{ category.title }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-10 px-4 max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-neutral-dark mb-6">熱門租借區</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="product in featuredProducts" class="">
          <img :src="product.image" :alt="product.title" class="object-cover w-full h-48">
          <p>{{ product.title }}</p>
        </div>
      </div>
    </section>

    <section class="py-10 px-4 max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-neutral-dark mb-6">二手買賣區</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="product in secondHandProducts">
          <img :src="product.image" :alt="product.title" class="object-cover w-full h-48">
          <p>{{ product.title }}</p>
        </div>
      </div>
    </section>

    <section class="py-10 px-4 max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-neutral-dark mb-6">聯絡我們</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="bg-neutral text-white p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">客服中心</h3>
          <p class="text-sm">有任何問題或建議，歡迎聯絡我們的客服團隊。</p>
          <NuxtLink to="/" class="text-primary mt-4 inline-block">聯絡我們</NuxtLink>
        </div>
        <div class="bg-neutral text-white p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">常見問題</h3>
          <p class="text-sm">查看我們的常見問題解答，快速找到答案。</p>
          <NuxtLink to="/" class="text-primary mt-4 inline-block">查看 FAQ</NuxtLink>
        </div>
        <div class="bg-neutral text-white p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">社群媒體</h3>
          <p class="text-sm">關注我們的社群媒體，獲取最新消息和活動資訊。</p>
          <NuxtLink to="/" class="text-primary mt-4 inline-block">前往社群媒體</NuxtLink>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {title:'風景',image:'https://i.pinimg.com/736x/d3/d5/8d/d3d58d759222f88bcb259fc3666dee0e.jpg'},
  {title:'動畫',image:'https://i.pinimg.com/736x/fc/b6/22/fcb6220a9bf34e0414498eb318a34b39.jpg'},
  {title:'藝術',image:'https://i.pinimg.com/736x/a0/40/fe/a040fe60d7ca42c741722f61da16752f.jpg'},
  {title:'城市',image:'https://i.pinimg.com/736x/82/cc/7f/82cc7fab585383496788db7b3b59d71b.jpg'},
  {title:'動物',image:'https://i.pinimg.com/736x/3e/a8/c9/3ea8c9d6eb8b64cd36a6813b249a795a.jpg'},
  {title:'抽象',image:'https://i.pinimg.com/736x/c6/5e/52/c65e5264f7f040f7901b5fd7df147f6f.jpg'}
]

const featuredProducts = [
  {
    id: 1,
    title: '風景拼圖 1000片',
    image: 'https://i.pinimg.com/736x/c6/ee/8d/c6ee8d42201005c3aa05f9b7575ccdaf.jpg',
    price: 350,
    isRental: true,
  },
  {
    id: 2,
    title: '可愛貓咪拼圖 500片',
    image: 'https://i.pinimg.com/736x/3d/34/96/3d34969e2d7fef833c9161e26d922d08.jpg',
    price: 200,
    isRental: false,
  },
  {
    id: 3,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/6d/65/35/6d65359aa068c8f00998fca16b4b2c9f.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 4,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/474x/05/03/33/0503337b396850d20cc0ae541e386c63.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 5,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/ff/4c/ae/ff4caeadf94db0e320f1d4a190f026a0.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 6,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/b7/e4/6c/b7e46c2616584e31e245cbe03c7a8dc5.jpg',
    price: 400,
    isRental: true,
  },
]

const panelProps = {
  title: '歡迎來到 PzlRent',
  subtitle: '探索我們的拼圖世界，找到你的下一個挑戰！',
  buttonText: '立即開始'
}

// 二手買賣拼圖
const secondHandProducts = [
  {
    id: 1,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/db/bc/19/dbbc191413aaf10b13b2836c81fa31b8.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 2,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/72/03/56/720356c9e5817aa313ab5382ea4089f7.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 3,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/bc/7a/01/bc7a013c367acf9b96757fbaa5a0e4a3.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 4,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/4f/80/8a/4f808a443d2f681c8440b5d66abd2de9.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 5,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/d1/25/f2/d125f25de5876466615aecd94dd01a03.jpg',
    price: 400,
    isRental: true,
  },
  {
    id: 6,
    title: '抽象藝術拼圖 1000片',
    image: 'https://i.pinimg.com/736x/db/29/08/db29087b442bb1c61bc3cc9460ce8393.jpg',
    price: 400,
    isRental: true,
  },
]
</script>

<style scoped>
</style>