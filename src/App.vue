<template>
  <the-board></the-board>
  <card-draw></card-draw>
</template>

<script>
import TheBoard from './components/TheBoard.vue';
import CardDraw from './components/CardDraw.vue';

export default {
  components: { TheBoard, CardDraw }
}
</script>
