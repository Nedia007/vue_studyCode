<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏1">
        <ul>
          <li v-for="g in games" :key="g.id">
            {{ g.name }}
          </li>
        </ul>
      </Category>
      <Category title="美食">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="热门游戏1">
        <video src="videoUrl" controls></video>
      </Category>
    </div>

  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'
import Category from './Category.vue';
import { ref, reactive } from 'vue';

let games = reactive([
  { id: 'adsad', name: 'asdasd' },
  { id: 'adsad1', name: 'asdasd1' },
  { id: 'adsad2', name: 'asdasd2' },
  { id: 'adsad3', name: 'asdasd3' },

])
let imgUrl = 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
let videoUrl = 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>