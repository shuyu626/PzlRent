
<template>
  <div>
    <Navbar @openSidebar="toggleState('sidebar')" @openChat="toggleState('chat')" @openCart="toggleState('cart')" />
    <Sidebar :open="isSidebarOpen" @closeSidebar="toggleState('sidebar')" />
    <slot />
    <Cart :open="isCartOpen" @openCart="toggleState('cart')"/>
    <ChatWindow :open="isChatOpen" :chatList="chatList" @openChat="isChatOpen = false" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '~/components/layout/Navbar.vue';
import Sidebar from '~/components/layout/Sidebar.vue';
import Footer from '~/components/layout/Footer.vue';
import ChatWindow from '~/components/layout/ChatWindow.vue';
import Cart from '~/components/layout/Cart.vue';

// State variables
const isSidebarOpen = ref(false);
const isChatOpen = ref(false);
const isCartOpen = ref(false);
const chatList = ref([
  { id: 1, user: 'yu___1235235', lastMessage: '想請問拼圖完成後的實際尺寸？', timestamp: '2025-06-01' },
  { id: 2, user: 'sdf_45555', lastMessage: '請問有缺片嗎？', timestamp: '2025-06-02' },
]);

const toggleState = (state: 'sidebar' | 'chat' | 'cart') => {
const sidebar = isSidebarOpen.value;
  const chat = isChatOpen.value;
  const cart = isCartOpen.value;

  // 全部關閉
  isSidebarOpen.value = false;
  isChatOpen.value = false;
  isCartOpen.value = false;

  // 根據要切換的狀態來反轉自己（使用 !），其他保持關閉
  if (state === 'sidebar') isSidebarOpen.value = !sidebar;
  if (state === 'chat') isChatOpen.value = !chat;
  if (state === 'cart') isCartOpen.value = !cart;
};
</script>

<style scoped lang="scss">
/* Add your styles here */
</style>