<template>
  <div>
    post {{ itemStore.posts[props.id].title }}
    <router-link :to="{ name: 'home' }"><</router-link>
  </div>
</template>

<script setup lang="ts">
import { useItemStore } from "@/store/itemStore";
const itemStore = useItemStore();
interface Props {
  id: number;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
