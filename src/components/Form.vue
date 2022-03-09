<template>
  <div class="flex flex-col justify-start w-full text-blue-600">
    <div>
      <h1 class="text-xl lg:text-5xl"> أهلا بك {{ accountId }}!</h1>
      <p class="lg:text-xl mt-10">
        سجل الدخول مع محفظة 
         <a href="https://near.org/" target="_blank" class="underline">نير</a> 
        وارسل رسالة إلى أصدقائك
      !
      </p>
    </div>
    <form class="w-1/3 mt-10 flex flex-col items-start lg:flex-row lg:items-center">
      <label for="message" class="px-2 block text-sm font-medium text-red-400">نص الرسالة</label>
      <input v-model="message" type="text" name="message" id="message" class="px-2 shadow-sm border-2 border-red-200 focus:ring-red focus:border-red border-gray rounded-full" placeholder="نص الرسالة" />
      <label for="message" class="px-4 w-100 block text-sm font-medium text-red-400">المتلقي</label>
      <input v-model="toWho" type="text" name="toWho" id="toWho" class="px-2 shadow-sm border-2 border-red-200 focus:ring-red focus:border-red border-gray rounded-full" placeholder="حساب نير المرسل إليه" />
    </form>
    <div class="flex items-center mt-10 flex-col lg:flex-row">
      <div class="bg-gray-100 m-3 p-4 w-64 rounded-xl flex flex-col justify-between">
        <div class="flex justify-between">
          <h4 class="mt-2 font-bold">{{ message }}</h4>
        </div>
        <p class="text-sm mt-2 text-red-400">المرسل: {{ accountId }}</p>
        <p class="text-sm mt-2 text-red-400">المتلقي: {{ toWho }}</p>
      </div>

      <button class="bg-red-200 rounded-full px-10 py-2 lg:ml-10 lg:mt-5" @click="handleSubmit">ارسل</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { wallet } from '@/services/near';

export default {
  props: {
    // pass addMessage as a prop to Form
    // Form and Messages are sybling components that share state (Form sets messages; Messages gets messages)
    // since they share state, the state should be lifted to their parent component (Home)
    addMessage: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const message = ref('');
    const toWho = ref('');

    const handleSubmit = () => {
      props.addMessage({ message: message.value, toWho: toWho.value });
    };

    return {
      message,
      toWho,
      handleSubmit,
      accountId: wallet.getAccountId()
    };
  }
};
</script>

<style>
h1 {
  text-shadow: 2px 2px theme('colors.blue.200');
}
</style>
