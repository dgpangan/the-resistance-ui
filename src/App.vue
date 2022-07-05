<template>
  <the-board></the-board>
  <card-draw v-if="showDialog==='card-draw'"></card-draw>
  <team-select v-if="showDialog==='team-select'"></team-select>
  <team-vote v-if="showDialog==='team-vote'"></team-vote>
  <team-vote-results v-if="showDialog==='team-vote-results'"></team-vote-results>
</template>

<script>
import TheBoard from './components/TheBoard.vue';
import CardDraw from './components/CardDraw.vue';
import TeamSelect from './components/TeamSelect.vue';
import TeamVote from './components/TeamVote.vue';
import TeamVoteResults from './components/TeamVoteResults.vue';

export default {
  components: { TheBoard, CardDraw, TeamSelect, TeamVote, TeamVoteResults },

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
        { id: 0, name: 'Darren',  isResistance: true,   selected: false, teamVote: '',  missonVote: '' },
        { id: 1, name: 'Clarisa', isResistance: true,   selected: false, teamVote: 'approve',  missonVote: '' },
        { id: 2, name: 'Shan',    isResistance: true,   selected: false, teamVote: 'approve',  missonVote: '' },
        { id: 3, name: 'Eman',    isResistance: false,  selected: false, teamVote: 'reject',  missonVote: '' },
        { id: 4, name: 'Gran',    isResistance: false,  selected: false, teamVote: 'reject',  missonVote: '' },
      ],
      playerId: 0,
      playerInTurn: 0,
    }
  },

  provide() {
    return {
      players: this.players,
      playerId: this.playerId,
      playerInTurn: this.playerInTurn,
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
