<template>
  <div class="w-full max-w-md min-h-[600px] min-w-[200px] rounded shadow-md p-4">
    <div v-for="(category, index) in categories" :key="category.id" :class="['flex flex-col gap-2 p-2 ',{'': categories.length-1 !== index}]">
      <button class="flex justify-between py-1" @click="toggleCategory(index)">
        <p class="font-normal text-lg  text-gray-700">{{ category.name }}</p>
        <Icon :name=" expandedIndex === index ? 'mdi:chevron-down' : 'mdi:chevron-right'" size="24" :class="{ 'text-secondary':expandedIndex === index }" />
      </button>
      <ul v-show="expandedIndex === index" class="w-full space-y-2 pl-2 text-neutral">
        <li v-for="(subCategory, subIndex) in category.subCategories" :key="subCategory.id" :class="['hover:text-secondary cursor-pointer rounded-md p-1 pl-2',{'bg-primary-light text-secondary':expandedSubIndex === subIndex }]" @click="toggleSubCategory(subIndex)">
          <nuxt-link to="/market">{{ subCategory.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script setup lang="ts">
interface CategoryList {
  id: number,
  name: string,
  subCategories: { id: number, name: string }[]
}
const categories = ref<CategoryList[]>([
  {
    id: 1,
    name: '攝影風景系列',
    subCategories: [
      { id: 11, name: '山景' },
      { id: 12, name: '海邊' },
      { id: 13, name: '城市夜景' }
    ]
  },
  {
    id: 2,
    name: '熱門動漫系列',
    subCategories: [
      { id: 21, name: '鬼滅之刃' },
      { id: 22, name: '進擊的巨人' },
      { id: 23, name: '咒術迴戰' }
    ]
  },
  {
    id: 3,
    name: '名畫系列',
    subCategories: [
      { id: 31, name: '蒙娜麗莎' },
      { id: 32, name: '星夜' },
      { id: 33, name: '吶喊' }
    ]
  },
  {
    id: 4,
    name: '壁虎木質系列',
    subCategories: [
      { id: 41, name: '原木風格' },
      { id: 42, name: '雕刻風格' },
      { id: 43, name: '自然紋理' }
    ]
  },
  {
    id: 5,
    name: '畫家原作系列',
    subCategories: [
      { id: 51, name: '小油画' },
    ]
  },
  {
    id: 6,
    name: '迪士尼系列',
    subCategories: [
      { id: 61, name: '米奇米妮' },
      { id: 62, name: '獅子王' },
      { id: 63, name: '冰雪奇緣' }
    ]
  },
  {
    id: 7,
    name: '宮崎駿系列',
    subCategories: [
      { id: 71, name: '龍貓' },
      { id: 72, name: '神隱少女' },
      { id: 73, name: '霍爾的移動城堡' }
    ]
  }
])


const expandedIndex = ref<number | null>(null)
const expandedSubIndex = ref<number | null>(null)

const toggleCategory = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
  expandedSubIndex.value = null
}

const toggleSubCategory = (subIndex: number) => {
  expandedSubIndex.value = expandedSubIndex.value === subIndex ? null : subIndex
}
</script>
