<template>
  <div class="flex w-full min-h-screen">
    <nuxt-link to="/" class="absolute top-8 left-4 z-10">
      <Icon name="mdi:arrow-left" size="36" style="color: #d7d3d0;" />
    </nuxt-link>
    <div 
    class="sm:w-1/2 flex justify-center items-center p-8 min-h-screen duration-500"
    :style="{ transform: isLogin ? 'translateX(0)' : 'translateX(100%)' }"
    >
      <AuthForm :buttonText="isLogin ? '登入' : '註冊'"/>
    </div>
    <div 
    class="flex flex-col justify-center items-center sm:w-1/2 bg-accent duration-500"
    :style="{ transform: isLogin ? 'translateX(0)' : 'translateX(-100%)' }">
      <AuthPanel 
      v-bind="panelProps" 
      @toggleMode="toggleAuthMode"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthForm from '~/components/LoginRegisterPage/AuthForm.vue';
import AuthPanel from '~/components/LoginRegisterPage/AuthPanel.vue';
definePageMeta({
  layout: false,
});
const isLogin = ref(true);
const panelProps = computed(() => ({
  title: isLogin.value ? 'Welcome Back' : 'Hello, Friend!',
  subtitle: isLogin.value
    ? 'To keep connected with us please login with your personal info'
    : 'Enter your details and start your journey with us',
  buttonText: isLogin.value ? 'Sign up' : 'Sign in'
}));
const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};
</script>