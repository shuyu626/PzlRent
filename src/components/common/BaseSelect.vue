<template>
  <div ref="dropdownRef" class="relative w-full max-w-md">
    <div class="h-[42px] w-full flex justify-between items-center px-3 py-2 border cursor-pointer rounded-md" @click="toggleDropdown = !toggleDropdown">
      <p>{{ selected }}</p>
      <Icon name="mdi:chevron-down" size="24" style="color: #696969;" />
    </div>
    <ul :class="['max-h-[200px] absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm', {'hidden': !toggleDropdown}]" role="listbox">
      <li 
      v-for="(option, index) in options" 
      :class="['relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none hover:cursor-pointer', { 'bg-primary': selected === option.label }, { 'hover:bg-primary-light': selected !== option.label}]" 
      :id="`listbox-option-${index}`" 
      role="option" 
      @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
  
</template>
<script setup lang="ts">
const props = defineProps<{
  selected?: string,
  options: { label: string, value: string }[]
}>()
const toggleDropdown = ref<boolean>(false)
const selected = ref<string>(props.selected || '請選擇');

const selectOption = (option: { label: string, value: string }) => {
  selected.value = option.label;
  toggleDropdown.value = false;
};

const dropdownRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    toggleDropdown.value = false
  }
}

onMounted(()=>{
  if(!props.selected){
    selected.value = props.options[0].label;
  }
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
</style>
