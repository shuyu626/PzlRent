<template>
    <div v-show="open">
      <div 
        class="fixed inset-0 bg-neutral-dark bg-opacity-50 z-40"
        @click="closeSidebar" 
      ></div>
      <transition name="fade">
        <aside v-show="open" class="w-64 h-full bg-primary shadow-md flex flex-col p-4 fixed top-0 left-0 z-50">
          <nav>
            <ul class="space-y-4">
              <li>
                <div class="flex justify-between items-center mb-6 ">
                  <nuxt-link
                    to="/"
                    class="text-white text-2xl font-bold block"
                  >
                    PzlRent
                  </nuxt-link>
                  <button @click="closeSidebar">
                    <Icon name="mdi:menu" size="24" class="text-white"/>
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
      </transition>
    </div>
</template>

<script setup lang="ts">
const navLinks = [
  { to: "/market", text: "二手買賣" },
  { to: "/rent", text: "租借" },
  { to: "/", text: "拼圖" },
  { to: "/about", text: "聯絡我們" },
];
const props = defineProps<{
  open: boolean;
}>()
const emit = defineEmits<{
  (event: 'closeSidebar'): void;
}>()

const closeSidebar = () => {
  emit('closeSidebar') 
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-225px);
}

.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
}
</style>
