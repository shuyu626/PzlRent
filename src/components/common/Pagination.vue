<template>
  <div v-if="totalItems" class="h-[42px] flex text-neutral-dark cursor-pointer">
    <button :class="['pagination', { 'hover:bg-neutral/10' : !isPreviousPageDisabled }]" @click="goToPreviousPage">
      <Icon name="mdi:chevron-left" size="24" :class="{'text-gray-200' : isPreviousPageDisabled}"/>
    </button>
    <button v-for="(page, index) in totalPage" :class="['pagination', { 'bg-accent-light': selectedPage === index }, { 'hover:bg-neutral/10': selectedPage !== index}]" @click="toggle(index)">
      {{ page }}
    </button>
    <button :class="['pagination', { 'hover:bg-neutral/10' : !isNextPageDisabled }]" @click="goToNextPage" :disabled="isNextPageDisabled">
      <Icon name="mdi:chevron-right" size="24" :class="{'text-gray-200' : isNextPageDisabled}"/>
    </button>
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

const isPreviousPageDisabled = computed(()=>{
  return pages.value <= 1 || selectedPage.value === 0;
})

const isNextPageDisabled = computed(()=>{
  return selectedPage.value === pages.value - 1;
})

const toggle = (index:number) => {
  selectedPage.value = selectedPage.value === index ? 0 : index
}
const goToNextPage = () => {
  if(!isNextPageDisabled.value){
    selectedPage.value += 1
  }
}

const goToPreviousPage = () => {
  if(!isPreviousPageDisabled.value){
    selectedPage.value -= 1
  }
}
</script>
<style scoped>
.pagination {
  @apply flex justify-center items-center size-10 rounded-full mx-1
}
</style>