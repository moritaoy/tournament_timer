import { defineStore } from 'pinia'

export const counterStore = defineStore({
  id: 'count',
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double: (state) => {
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})