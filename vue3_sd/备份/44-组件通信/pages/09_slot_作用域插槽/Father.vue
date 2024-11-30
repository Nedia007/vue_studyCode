<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <!-- 获取slot传过来的值 -->
        <template v-slot:qwe="params">
          <ol>
            <li v-for="g in params.games" :key="g.id">
              {{ g.name }}
            </li>
          </ol>
        </template>
      </Game>
      <Game>
        <template v-slot:qwe="params">
          <ul>
            <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <!-- 直接解构数据 -->
        <template v-slot:qwe="{games}">
          <h3 v-for="g in games" :key="g.id">{{ g.name }}</h3>
        </template>

      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'
// 数据在子那边，但是根据数据生成的结构却由父亲决定
// 压岁钱在孩子这里，但是压岁钱买的东西由父亲决定
  // 作用域插槽由作用域出发点 子组件维护数据交互都是自己决定的 但是最后呈现出来的结构需要父组件决定 
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