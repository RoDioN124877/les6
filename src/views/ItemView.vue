<template>
  <div>
    Item view {{ props.id }}
    <router-link :to="{ name: 'home' }"><</router-link>
  </div>
</template>

<script setup lang="ts">

interface Props {
  id: number;
}
const props = defineProps<Props>();

</script>

<style scoped></style>
