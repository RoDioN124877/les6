<template>
    <div>
      <header>
        <h1>Смартфоны/Smartphones</h1>
      </header>
      <div class="container">
        <div class="product" v-for="laptop in laptopData">
          <h2>{{ laptop.title }}</h2>
          <p>{{ laptop.direc }}</p>
          <p>Цена: ${{ laptop.price }}</p>
        </div>
  
        <!-- Добавьте больше товаров по аналогии -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  const laptopData = ref([
    {
      img: "aaa",
      title: "Смартфоны 1",
      direc: "Описание Смартфоны 1...",
      price: "999",
    },
    {
      img: "aaa",
      title: "Смартфоны 2",
      direc: "Описание Смартфоны 2...",
      price: "999",
    },
  ]);
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
  }
  .container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
  }
  .product {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
    overflow: hidden;
  }
  .product img {
    max-width: 100%;
    height: auto;
  }
  .product h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .product p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  </style>
  