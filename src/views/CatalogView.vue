<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link class="link" :to="{ name: 'cotalogAll' }"
            >Все</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'laptop' }"
            >Ноутбуки</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'smartphones' }"
            >Смартфоны</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'tablets' }"
            >Планшеты</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'pc' }">Пк</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'camera' }"
            >Фотоаппараты</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'tv' }"
            >Телевизоры</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'headphones' }"
            >Наушники</router-link
          >
        </li>
      </ul>
      <button @click="itemStore.count--">-</button>
      {{ itemStore.count }}
      <button @click="itemStore.count++">+</button>
    </nav>
    <router-view class="tovar"></router-view>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useItemStore } from "@/store/itemStore";
const itemStore = useItemStore();
</script>

<style scoped>
ul {
  list-style: none;
}
.container {
  display: flex;
}
.tovar {
  margin: auto;
}
nav {
  background-color: #333;
  color: white;
  padding: 10px 0;
  position: fixed;
}
.link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
}
.link:hover {
  background-color: #555;
}
</style>
