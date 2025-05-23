<script setup lang="ts"></script>

<template>
  <div>
    <div class="p-6 bg-primary flex justify-between">
      <button>
        <router-link to="/" class="text-white" active-class="font-bold">PzlRent</router-link>
      </button>
      <button>
        <router-link to="/Rent" class="text-white" active-class="font-bold">Rent</router-link>
      </button>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
</style>

