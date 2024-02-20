<template>
  <div>
    <router-link :to="{ name: 'about' }">About</router-link>
    Home view
    <div>
      <div v-for="user in users">
        <router-link :to="{
          name: 'item',
          params: {
            id: user.id
          }
        }">open</router-link>
        <div>{{ user.name }}</div>
      </div>
    </div>
  </div>
  <router-link :to=" {name:'cotalog'}">a</router-link>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const users = ref<any[]>([])

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users.value = await res.json();  
})
</script>

<style scoped>

</style>