<template>
  <div>
    <Navbar />
    <Sidebar />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Sidebar from '~/components/layout/Sidebar.vue';
import Footer from '~/components/layout/Footer.vue';
</script>

<style scoped lang="scss">
</style>

