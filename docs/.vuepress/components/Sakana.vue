<template>
  <div id="sakana-widget"></div>
</template>

<script lang="ts">
import SakanaWidget from 'sakana-widget';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    onMounted(() => {
      new SakanaWidget().mount('#sakana-widget');
      console.log('Sakana~');
    });
  },
});
</script>

<style>
#sakana-widget {
  position: fixed;
  right: 3rem;
  bottom: 3rem;
}
</style>
