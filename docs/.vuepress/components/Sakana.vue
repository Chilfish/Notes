<template>
  <div id="sakana-widget"></div>
</template>

<script setup lang="ts">
import SakanaWidget from 'sakana-widget';
import { onMounted } from 'vue';

onMounted(() => {
  new SakanaWidget().mount('#sakana-widget');
  console.log('Sakana~');
});
</script>

<style scoped>
#sakana-widget {
  position: fixed;
  right: 3rem;
  bottom: 3rem;
}
</style>
