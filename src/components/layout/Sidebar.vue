<template>
  <aside v-show="open" class="w-64 h-full bg-primary shadow-md flex flex-col p-4 fixed top-0 left-0 z-50">
    <nav>
      <ul class="space-y-4">
        <li>
          <div class="flex justify-between items-center">
            <nuxt-link
              to="/"
              class="text-white text-2xl font-bold mb-6 block"
            >
              PzlRent
            </nuxt-link>
            <button>
              <Icon name="mdi:menu" size="24" style="color: white;" @click="open = !open"/>
            </button>
          </div>
        </li>
        <li v-for="link in navLinks" :key="link.to">
          <nuxt-link
            :to="link.to"
            class="block px-4 py-2 rounded hover:bg-amber-500 text-white font-medium transition-colors"
            active-class="text-gray-700"
          >
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const navLinks = [
  { to: "/market", text: "二手買賣" },
  { to: "/rent", text: "租借" },
  { to: "/", text: "拼圖" },
  { to: "/", text: "聯絡我們" },
];
const open = ref(false);
</script>

<style scoped>
</style>
