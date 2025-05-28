<template>
  <nav class="p-4 bg-primary flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <Icon name="mdi:menu" size="24" style="color: white;" />
      <nuxt-link to="/" class="text-white text-xl" active-class="font-bold">PzlRent</nuxt-link>
    </div>
    <ul class="flex space-x-6">
      <li v-for="link in navLinks" :key="link.to">
        <nuxt-link :to="link.to" class="text-white text-md hover:bg-amber-500 p-3 rounded" active-class="font-bold">
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/login" class="text-white" active-class="font-bold">
      <Icon name="mdi:login" size="24" style="color: white;" />
    </nuxt-link>
  </nav>
</template>
<script setup lang="ts">
const navLinks = [
  { to: "/market", text: "二手買賣" },
  { to: "/rent", text: "租借" },
  { to: "/", text: "拼圖" },
  { to: "/", text: "聯絡我們" },
];
</script>