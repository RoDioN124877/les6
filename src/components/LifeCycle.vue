<template>
  <div id="ff">
    <input type="text" v-model="inp">
    {{ users }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const inp = ref('')
let users = ref<Array<any>>([]);

onMounted(async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await result.json();
  } catch (e) {
    console.log(e);
  }
})
</script>

<style scoped>

</style>