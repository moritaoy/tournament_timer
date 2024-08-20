<template>
  <div class="sandbox">
    <!-- ここにこのコンポーネントの HTML を書きます -->
    <h1>SandBox</h1>

    <p>{{ msg }}</p>
    <p>{{ now() }}</p>
    <p>{{ 776 + 1 }}</p>

    <p>{{ ok ? 'YES' : 'NO' }}</p>

    <p>{{ msg.split('').reverse().join('') }}</p>

    <p v-if="seen">Now you see me</p>
    <a v-bind:href="url">Vue.js ガイド</a>
    <button v-on:click="log('クリックされました！')">Click Me!</button>
  </div>
</template>

<script>

// ここに JavaScript を書きます

// このコンポーネントで使用する Vue オブジェクト
export default {
  data() {
    return {
      msg: "Hello, World!",
      ok: true,
      seen: true,
      url: "http://example.com",
    };
  },

  // メソッド
  methods: {
    now() {
      return new Date();
    },
    log(logMsg) {
      this.seen=!this.seen;
    }
  }
};
</script>

<style>
/* ここに、このコンポーネントに適用する CSS を書きます */
.sandbox {
  color: red;
}
</style>
