<template>
  <div class="w-full p-8 max-w-md bg-white rounded">
    <form action="" class="space-y-4">
      <InputField
        id="username"
        label="帳號"
        v-model="username"
        type="text"
        placeholder="請輸入帳號"
        inputClass="input--focus"
      ></InputField>
      <InputField
        id="password"
        label="密碼"
        v-model="password"
        type="password"
        placeholder="請輸入密碼"
        inputClass="input--focus"
      ></InputField>
      <BaseButton
        type="submit"
        :text="buttonText"
        size="full"
        class="btn--accent"
      ></BaseButton>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputField from '@/components/common/InputField.vue';
import BaseButton from '@/components/common/BaseButton.vue';
const username = ref('');
const password = ref('');
const props =defineProps({
  buttonText: {
    type: String,
    default: '登入'
  }
})
</script>