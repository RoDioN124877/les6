<template>
  <div>
    Item view {{ props.id }}
    <router-link :to="{ name: 'home' }"><</router-link>
    {{ type }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: number;
  type: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
