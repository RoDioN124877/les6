import { defineStore } from 'pinia'
import { ref } from "vue";
export const useItemStore = defineStore('itemStore', () => {
    const count = ref(0)
    const posts = ref()
    const accessToken = ref('')
    return {posts, count, accessToken }
})