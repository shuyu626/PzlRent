<template>
  
  <div class="min-h-screen flex p-5 lg:p-10 xl:p-20 bg-primary-light" >


   
    <div class="max-w-5xl w-full mx-auto p-10 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-primary-dark mb-6">拼圖租借流程</h2>
      <div class="flex justify-between items-center p-8 my-8">
        <Steppers :steps="steps" :currentStep="currentStep" />
      </div>
      <div>
        <div v-if="currentStep === 0">
          <div class="border w-full p-5 rounded-md">
            <h2 class="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <Icon name="mdi:pencil-ruler" size="24"/>
              拼圖租借規則
            </h2>
            <ul class="list-decimal pl-5 flex flex-col gap-3">
              <li>
                為保障雙方權益，<strong>請於拆封時全程錄影</strong>，以確認拼圖是否缺片或損壞。
                拼圖寄出前將分為 <strong>4～6 大塊</strong>，便於檢查。
              </li>
              <li>
                歸還時請將拼圖 <strong>依原樣整理為 4～6 塊並包裝</strong>，避免散落或損壞。
              </li>
              <li>
                若拼圖有缺片或損壞，將依情況從押金中扣除或全額賠償。
              </li>
              <li>
                <strong>租金：</strong> 每日 $30，支援租期 7 / 14 / 21 天。
              </li>
              <li>
                <strong>逾期費用：</strong> 每逾期 1 天加收 $50。
              </li>
              <li>
                <strong>押金：</strong> 每筆收取 $500，歸還時確認無損壞與缺片將<strong>全額退還</strong>。
              </li>
            </ul>
            <div class="flex items-center my-6">
              <InputField v-model="agreed" type="checkbox" id="agreed" inputClass="mr-2"/>

              <span class="text-sm text-neutral-dark">我已閱讀並同意以上租借規則</span>
            </div>
            <div class="text-center">
              <BaseButton text="開始租借" class="btn--secondary" :disabled="!agreed" @click="nextStep"/>
            </div>
          </div>
        </div>
        <div v-else-if="currentStep === 1">
          <h3 class="text-xl font-semibold mb-4">步驟 2：選擇你想租的拼圖</h3>
            <div class="grid w-full gap-5 xs:grid-cols-3 p-20">
              <div v-for="puzzle in puzzles" :key="puzzle.id" :class="[
                'relative max-h-[250px] overflow-hidden group cursor-pointer',
                selectedPuzzle.some(p => p.id === puzzle.id)
                  ? 'bg-primary-light ring-4 ring-secondary'
                  : 'hover:shadow'
              ]">
                <img :src="puzzle.image" alt="" class="w-full object-over group-hover:brightness-50 transition" @click="selectPuzzle(puzzle)">
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-200" @click="selectPuzzle(puzzle)">
                  <h3 class="text-white font-semibold">{{ puzzle.title }}</h3>
                  <div>
                    <Icon name="mdi:plus-circle-outline" size="40" class="text-white"/>
                  </div>
                </div>
            </div>
          </div>
          <div v-if="selectedPuzzle.length > 0" class="flex flex-col justify-between border rounded-md bg-neutral/20 mt-8">
            <div class="bg-neutral p-4 rounded-t-md flex items-center">
              <h3 class="text-xl font-semibold text-white">已選擇租借項目（至多三組）</h3>
            </div>
            <div class="flex overflow-hidden p-5">
              <div class="grid w-full gap-5 xs:grid-cols-3">
                <div v-for="product in selectedPuzzle" :key="product.id" class="relative max-h-[250px] overflow-hidden group">
                  <img :src="product.image" alt="" class="w-full object-over cursor-pointer group-hover:brightness-75 transition" @click="selectPuzzle(product)">
                    <button
                      @click.stop="removeItem(product.id)"
                      class="absolute inset-0 flex items-center justify-center text-white bg-black/60 hover:bg-red-600 rounded-full w-10 h-10 m-auto opacity-0 group-hover:opacity-100 transition duration-200"
                    >
                      <Icon name="mdi:trash-can-outline" size="20" />
                    </button>
                </div>
              </div>
            </div>
          </div>
          <BaseButton
            :disabled="selectedPuzzle.length < 1"
            @click="nextStep"
            class="btn--secondary my-8"
            text="下一步"
          >
          </BaseButton>
        </div>
        <div v-else-if="currentStep === 2">
          <h3 class="text-xl font-semibold mb-4">步驟 3：填寫租借資料</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium">姓名</label>
              <input v-model="form.name" type="text" class="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label class="block text-sm font-medium">租借天數</label>
              <select v-model="form.days" class="w-full border px-3 py-2 rounded">
                <option value="">請選擇</option>
                <option value="3">3 天</option>
                <option value="7">7 天</option>
                <option value="14">14 天</option>
              </select>
            </div>
          </div>
          <div class="flex justify-between mt-6">
            <button @click="prevStep" class="text-neutral-dark">← 上一步</button>
            <button
              :disabled="!form.name || !form.days"
              @click="nextStep"
              class="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
            >
              下一步
            </button>
          </div>
        </div>
        <div v-else-if="currentStep === 3">
          <h3 class="text-xl font-semibold mb-4">步驟 4：確認訂單與付款</h3>
          <div class="bg-neutral-light p-4 rounded mb-4">
            <p>📦 拼圖：{{ selectedPuzzle.title }}（{{ selectedPuzzle.pieces }} 片）</p>
            <p>🗓️ 租期：{{ form.days }} 天</p>
            <p>👤 租借人：{{ form.name }}</p>
            <p>💰 預估費用：NT$ {{ form.days * 30 }}</p>
          </div>
          <div class="flex justify-between">
            <button @click="prevStep" class="text-neutral-dark">← 上一步</button>
            <button @click="nextStep" class="bg-accent text-white px-4 py-2 rounded">送出訂單</button>
          </div>
        </div>
        <div v-else class="text-center">
          <h3 class="text-xl font-semibold mb-4 text-green-600">✅ 租借完成！</h3>
          <p>感謝你的租借，我們會盡快安排出貨。</p>
          <p class="mt-4 text-sm text-neutral-dark">記得準時歸還，祝你拼得愉快！🧩</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputField from '~/components/common/InputField.vue'
import BaseButton from '~/components/common/BaseButton.vue'
import Steppers from '~/components/common/Steppers.vue'
import ProductCard from '~/components/common/ProductCard.vue'
import BaseTabs from '~/components/common/BaseTabs.vue'
const steps = ['閱讀規則', '選擇拼圖', '填寫資料', '確認付款', '完成']
const currentStep = ref(1)

const nextStep = () => {
  console.log(currentStep.value)
  if (currentStep.value < steps.length - 1) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}

const agreed = ref(false)

const puzzles = ref([
  {
    id: 1,
    title: '小油画 - 馨月之約',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608aff/800x.webp?source_format=jpg',
    pieces: 500
  },
  {
    id: 2,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608afe/800x.webp?source_format=jpg',
    pieces: 800
  },
  {
    id: 3,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e54/800x.webp?source_format=jpg',
    pieces: 600
  },
  {
    id: 4,
    title: '小油画 - 窗邊的貓',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/6539c19ca8295900013c1e55/800x.webp?source_format=jpg',
    pieces: 900
  },
  {
    id: 5,
    title: '小油画 - 與妳的悄悄話',
    image: 'https://i.pinimg.com/736x/58/e5/de/58e5decaf69b3f073fc667b24b0bd939.jpg',
    pieces: 800
  },
  {
    id: 6,
    title: ' 小油画 - 黑貓的聖誕節',
    image: 'https://i.pinimg.com/736x/7c/3e/26/7c3e26852c49f6d4365e4c7c0eca3e84.jpg',
    pieces: 600
  },
])
const selectedPuzzle = ref([{
    id: 1,
    title: '小油画 - 馨月之約',
    image: 'https://shoplineimg.com/5ff1da1434957d0020ba64c4/64e46db4a7ec100001608aff/800x.webp?source_format=jpg',
    pieces: 500
  }])
const selectPuzzle = (puzzle) => {
  const exists = selectedPuzzle.value.some(p => p.id === puzzle.id)
  if (!exists) {
    if(selectedPuzzle.value.length >=3) return
    selectedPuzzle.value.push(puzzle)
  } 
  else if(exists) {
    selectedPuzzle.value = selectedPuzzle.value.filter(p => p.id !== puzzle.id)
  }
}
const removeItem = (id: number) => {
  selectedPuzzle.value = selectedPuzzle.value.filter(p => p.id !== id)
}

const form = ref({
  name: '',
  days: '',
})
</script>




<!-- 
<template>
  <div class="flex min-h-screen">
    <WebSocketClient />
    
  </div>
</template>

<script setup lang="ts">
import WebSocketClient from '~/components/WebSocketClient.vue';
</script>

<style scoped>
.bg-neutral {
  background-color: #1e3a8a; /* 主色調，可根據需求調整 */
}
</style> -->