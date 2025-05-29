<template>
  <div v-if="totalItems" class="h-[42px] flex text-neutral-dark cursor-pointer">
    <span v-if="pages > 1 && selectedPage !==0" class="pagination hover:bg-neutral/10 ">
      <Icon name="mdi:chevron-left" size="24"/>
    </span>
    <span v-for="(page, index) in totalPage" :class="['pagination', { 'bg-accent-light': selectedPage === index }, { 'hover:bg-neutral/10': selectedPage !== index}]" @click="toggle(index)">
      {{ page }}
    </span>
    <span v-if="selectedPage !== pages -1 " class="pagination hover:bg-neutral/10 ">
      <Icon name="mdi:chevron-right" size="24"/>
    </span>
  </div>



</template>
<script setup lang="ts">
const props = defineProps<{
  totalItems: number,
  selectedPerPage: string
}>()
const selectedPage = ref<number>(0)
const pages = computed(()=>{
  return Math.ceil(props.totalItems / Number(props.selectedPerPage));
})
const totalPage = computed(()=>{
  const pages = Math.ceil(props.totalItems / Number(props.selectedPerPage));

  return Array.from({ length: pages }, (_, i) => i + 1);
})

const toggle = (index:number) => {
  selectedPage.value = selectedPage.value === index ? 0 : index
}
</script>
<style scoped>
.pagination {
  @apply flex justify-center items-center size-10 rounded-full mx-1
}
</style>