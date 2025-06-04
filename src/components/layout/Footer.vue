<template>
  <footer class="footer bg-primary py-6 border-t">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div class="flex items-center space-x-3">
        <Icon name="mdi:puzzle" size="24" class="text-white" />
        <span class="text-xl font-bold text-white">PzlRent 租賃平台</span>
      </div>
      <div class="mt-4 md:mt-0 text-white text-sm">
        聯絡資訊：<a href="mailto:service@pzlrent.com" class="underline">service@pzlrent.com</a> ｜ 電話：02-1234-5678
      </div>
      
    </div>
    <hr class="w-4/5 mx-auto my-5 border-t border-gray-300" />
    <div class="mt-2 text-center text-white text-xs">
      &copy; 2025 PzlRent. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
// 無需邏輯
</script>

<style scoped>
.footer {
  /* 可自訂樣式 */
}
</style>
