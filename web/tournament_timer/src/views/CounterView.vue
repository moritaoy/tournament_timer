<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>{{ counterStore.count }}</p>
    <div>
      <button class="btn btn-sm btn-primary" @click="counterStore.increment()">+</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js';
const counterStore = useCounterStore();
</script>