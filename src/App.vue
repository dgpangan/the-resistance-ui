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
      showDialog: 'team-select',
      missions: [
        { playerCount: 2, status: '' },
        { playerCount: 3, status: '' },
        { playerCount: 2, status: '' },
        { playerCount: 3, status: '' },
        { playerCount: 3, status: '' },
      ],
      cancellations: 2,
      players: [
        { id: 0, name: 'Player 1', isResistance: true },
        { id: 1, name: 'Player 2', isResistance: true },
        { id: 2, name: 'Player 3', isResistance: true },
        { id: 3, name: 'Player 4', isResistance: false },
        { id: 4, name: 'Player 5', isResistance: false },
      ],
      playerId: 3
    }
  },

  provide() {
    return {
      players: this.players,
      playerId: this.playerId,
      missions: this.missions,
      cancellations: this.cancellations
    }
  }
}
</script>
