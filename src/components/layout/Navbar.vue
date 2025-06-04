<template>
  <nav class="p-4 bg-primary flex justify-between items-center">
    <div class="flex items-center justify-center space-x-3">
      <button @click="openSidebar">
        <Icon name="mdi:menu" size="24" class="text-white" />
      </button>
      <nuxt-link to="/" class="text-white text-xl" active-class="font-bold">PzlRent</nuxt-link>
    </div>
    <ul class="hidden sm:flex space-x-6">
      <li v-for="link in navLinks" :key="link.to">
        <nuxt-link :to="link.to" class="text-white text-md hover:bg-amber-500 p-3 rounded" active-class="font-bold">
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
    <div class="flex gap-5">
      <Icon name="mdi:cart" size="24" class="text-white cursor-pointer" @click="openCart"/>
      <Icon name="mdi:chat-processing" size="24" class="text-white cursor-pointer" @click="openChat"/>
      <nuxt-link to="/login" class="text-white" active-class="font-bold">
        <Icon name="mdi:login" size="24"  class="text-white" />
      </nuxt-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
const navLinks = [
  { to: "/market", text: "二手買賣" },
  { to: "/rent", text: "租借" },
  { to: "/", text: "拼圖" },
  { to: "/about", text: "關於我們" },
];
const emit = defineEmits<{
  (event: 'openSidebar'): void;
  (event: 'openChat'): void;
  (event: 'openCart'): void;
}>()

const openSidebar = () => {
  emit('openSidebar') 
}

const openChat = () => {
  emit('openChat')
}

const openCart = () => {
  emit('openCart')
}
</script>