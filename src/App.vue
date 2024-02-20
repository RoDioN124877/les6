<template>
  <div>
    <router-view></router-view>
    <!-- <custom-input
      v-model="fromCustomInput"
    ></custom-input>
    <input type="text">
    <input type="text" v-focus>
    <button @click="addItem">Создать</button>
    <custom-select
      :items="items"
      v-model="selectValue"
    ></custom-select>
    <button @click="toggle = !toggle">toggle</button>
    <life-cycle v-if="toggle"></life-cycle> -->
    <section class="container">
      <div v-for="post in itemStore.posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          {{ post.id }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useItemStore } from "./store/itemStore";
import CustomInput from "./components/CustomInput.vue";
import CustomSelect from "./components/CustomSelect.vue";
import LifeCycle from "./components/LifeCycle.vue";
const itemStore = useItemStore();
const toggle = ref(true);
const fromCustomInput = ref("");
const selectValue = ref<string>("");

const items = ref([
  {
    title: "First",
    value: "one",
  },
  {
    title: "Second",
    value: "two",
  },
]);

const addItem = () => {
  items.value.push({
    title: fromCustomInput.value,
    value: fromCustomInput.value,
  });
  fromCustomInput.value = "";
};
onMounted(async () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    itemStore.accessToken = token;
  } else {
    const token = String(Math.random());
    localStorage.setItem("access_token", token);
    itemStore.accessToken = token;
  }

  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  itemStore.posts = await data.json();
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 1440px;
  justify-content: center;
}
.container div {
  width: 20px;
}
</style>
