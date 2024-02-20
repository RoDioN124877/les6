<template>
  <div>
    <input
      class="input"
      type="text"
      :value="props.modelValue"
      @input="inputHandler"
      :placeholder="props.placeholder"
    />
  </div>

</template>

<script setup lang="ts">

interface Props {
  modelValue?: string;
  placeholder?: string;
}
const props = defineProps<Props>();
const emits = defineEmits(["update:modelValue"]);

const inputHandler = (event: Event) => {
  if (!event.target) return;
  emits("update:modelValue", (event.target as HTMLButtonElement).value);
};
</script>

<style scoped>
.input {
  border: teal solid 2px;
  border-radius: 0.25rem;
  padding: 4px 6px;
}
</style>
