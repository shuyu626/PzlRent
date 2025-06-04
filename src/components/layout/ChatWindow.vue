<template>
  <transition name="fade">
    <div v-show="open" class="w-[300px] flex flex-col fixed bottom-0 right-16 z-50 cursor-pointer rounded-t-md shadow-2xl">
      <nav class="h-[50px] flex justify-between items-center gap-3 px-3 bg-accent rounded-t-md"  @click="!selectedChat ? openChat() : null">
        <div class="flex gap-3 items-center">
          <button v-if="currentChatUser">
          <Icon name="mdi:arrow-left" size="20" class="text-white" @click.stop="goBackToChatList"/>
        </button>
        <span class="text-md text-white">{{ currentChatUser || '聊天室'}}</span>
        </div>
        <button v-if="currentChatUser" >
          <Icon name="mdi:close" size="20" class="text-white" @click="openChat()"/>
        </button>
      </nav>
      <div v-if="!selectedChat" class="flex flex-col h-[280px] overflow-y-auto bg-white">
        <ul role="list" class="divide-y divide-gray-100 bg-white">
          <li v-for="chat in chatList" class="flex justify-between p-3 m-2 hover:bg-gray-100 rounded-md" @click="startChat(chat)">
            <div class="flex min-w-0 gap-x-4">
              <img class="size-10 flex-none rounded-full bg-gray-50" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
              <div class="min-w-0 flex-auto">
                <p class="w-[120px] truncate text-sm/6 font-semibold text-gray-900">{{ chat.user }}</p>
                <p class="w-[100px] mt-1 truncate text-xs/5 text-gray-500">{{ chat.lastMessage }}</p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="mt-1 text-xs/5 text-gray-400">{{ chat.timestamp }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="selectedChat" class="flex flex-col h-[280px] bg-white">
        <div class="flex-1 overflow-y-auto p-5">
          <div class="flex flex-col flex-wrap justify-center gap-5 text-[14px]">
            <div class="self-start bg-neutral-light rounded-2xl px-3 py-1">想請問拼圖完成後的實際尺寸？</div>
            <span class="self-end bg-primary rounded-2xl rounded-br-none px-3 py-1">您好，大約是 115 x 73 cm</span>
            <div class="self-start bg-neutral-light rounded-2xl px-3 py-1">想確認是否缺片</div>

          </div>
        </div>
        <div class="flex justify-between items-center p-3 gap-2 bg-white">
          <InputField class="flex-1 text-[14px]" />
          <Icon name="mdi:send-circle" size="30" class="text-accent" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import InputField from '../common/InputField.vue';
const props = defineProps<{
  open: boolean
  chatList?: Chat[]
}>()

const emit = defineEmits<{
  (event: 'openChat'): void;
}>()

const openChat = () => {
  emit('openChat') 
  selectedChat.value = null
  currentChatUser.value = ''
}
const goBackToChatList = ():void => {
  selectedChat.value = null
  currentChatUser.value = ''
}

interface Chat {
  id: number;
  user: string;
  lastMessage: string;
  timestamp: string;
};
const selectedChat = ref<Chat | null>(null);
const currentChatUser = ref('')
const startChat = (chat: Chat) => {
  selectedChat.value = chat
  currentChatUser.value = chat.user
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(300px);
}

.fade-enter-to,
.fade-leave-from {
  transform: translateY(0);
}
</style>