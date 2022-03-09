<template>
  <h2 class="w-full text-2xl m-4 text-blue-600">رسائل كتاب الأصدقاء</h2>
  <div class="flex flex-wrap">
    <div v-for="message in messages" :key="message" class="bg-gray-100 m-3 p-4 w-64 rounded-xl flex flex-col justify-between">
      <div class="flex justify-between text-blue-600">
        <h4 class="mt-2 font-bold">{{ message.message }}</h4>
      </div>
      <p class="text-sm mt-2">المرسل: {{ message.sender }}</p>
      <p class="text-sm mt-2">المتلقي: {{ message.receiver }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
