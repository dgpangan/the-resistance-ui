<template>
  <the-board></the-board>
  <card-draw v-if="showDialog==='card-draw'"></card-draw>
  <team-select v-if="showDialog==='team-select'"></team-select>
</template>

<script>
import TheBoard from './components/TheBoard.vue';
import CardDraw from './components/CardDraw.vue';
import TeamSelect from './components/TeamSelect.vue';

export default {
  components: { TheBoard, CardDraw, TeamSelect },

  data() {
    return {
      showDialog: 'team-select'
    }
  }
}
</script>
