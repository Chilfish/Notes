<template>
  <div id="sakana"></div>
</template>

<script setup lang="ts">
import Sakana from 'sakana';
import { onMounted } from 'vue';

onMounted(() => {
  Sakana.setMute(true);

  Sakana.init({
    el: '#sakana', // 启动元素 node 或 选择器
    character: 'takina', // 启动角色 'chisato','takina'
    inertia: 0.03, // 惯性
    decay: 0.99, // 衰减
    r: 60, // 启动角度
    y: 10, // 启动高度
    scale: 0.4, // 缩放倍数
    translateY: 0, // 位移高度
    canSwitchCharacter: true, // 允许换角色
    onSwitchCharacter(character) {
      // 切换角色回调
      console.log(character === 'takina' ? 'Sakana~' : 'Chinanago~');
    },
  });
  console.log('Sakana~');
});
</script>

<style scoped>
#sakana {
  position: fixed;
  right: 0rem;
  bottom: 0.5rem;
  transform-origin: 100% 100%;
}
</style>
