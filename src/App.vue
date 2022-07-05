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
        { id: 0, playerCount: 2, status: 'success' },
        { id: 1, playerCount: 3, status: '' },
        { id: 2, playerCount: 2, status: '' },
        { id: 3, playerCount: 3, status: '' },
        { id: 4, playerCount: 3, status: '' },
      ],
      cancellations: 2,
      players: [
        { id: 0, name: 'Player 1', isResistance: true, selected: false },
        { id: 1, name: 'Player 2', isResistance: true, selected: false },
        { id: 2, name: 'Player 3', isResistance: true, selected: false },
        { id: 3, name: 'Player 4', isResistance: false, selected: false },
        { id: 4, name: 'Player 5', isResistance: false, selected: false },
      ],
      playerId: 4
    }
  },

  provide() {
    return {
      players: this.players,
      playerId: this.playerId,
      missions: this.missions,
      cancellations: this.cancellations,
      getPlayer: this.getPlayer,
      getCurrentMission: this.getCurrentMission,
      setDialog: this.setDialog
    }
  },

  methods: {
    getPlayer(id) {
      const player = this.players.filter(player => player.id === id);
      return player[0];
    },

    getCurrentMission() {
      const mission = this.missions.filter(mission => mission.status === '');
      return mission[0];
    },

    setDialog(dialogName) {
      this.showDialog = dialogName;
    }
  }
}
</script>
