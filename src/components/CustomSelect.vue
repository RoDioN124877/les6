<template>
  <div>
    <select v-model="selValue">
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
      >{{ item.title }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  items: Array<{
    title: string;
    value: string;
  }>,
  modelValue: string;
};
const props = defineProps<Props>();
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emits = defineEmits<Emits>();

const selValue = ref(props.modelValue);

watch(() => props.modelValue, (newval) => {
  selValue.value = newval;
})

watch(selValue, (newval, oldval) => {
  emits('update:modelValue', newval);
})
</script>

<style scoped>
select {
  border: rgb(132, 194, 194) solid 2px;
  border-radius: 4px;
}
</style>