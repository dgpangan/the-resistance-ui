<template>
  <the-board></the-board>
  <card-draw v-if="showDialog==='card-draw'"></card-draw>
  <team-select v-if="showDialog==='team-select'"></team-select>
  <team-vote v-if="showDialog==='team-vote'"></team-vote>
  <team-vote-results v-if="showDialog==='team-vote-results'"></team-vote-results>
  <mission-vote v-if="showDialog==='mission-vote'"></mission-vote>
  <mission-vote-results v-if="showDialog==='mission-vote-results'"></mission-vote-results>
</template>

<script>
import TheBoard from './components/TheBoard.vue';
import CardDraw from './components/CardDraw.vue';
import TeamSelect from './components/TeamSelect.vue';
import TeamVote from './components/TeamVote.vue';
import TeamVoteResults from './components/TeamVoteResults.vue';
import MissionVote from './components/MissonVote.vue';
import MissionVoteResults from './components/MissionVoteResults.vue';

export default {
  components: { TheBoard, CardDraw, TeamSelect, TeamVote, TeamVoteResults, MissionVote, MissionVoteResults },

  data() {
    return {
      showDialog: '',
      missions: [
        { id: 0, playerCount: 2, status: '' },
        { id: 1, playerCount: 3, status: '' },
        { id: 2, playerCount: 2, status: '' },
        { id: 3, playerCount: 3, status: '' },
        { id: 4, playerCount: 3, status: '' },
      ],
      recalls: 0,
      players: [
        { id: 0, name: 'Darren',  isResistance: false,  selected: false, teamVote: '',        missionVote: ''        },
        { id: 1, name: 'Clarisa', isResistance: true,   selected: false, teamVote: 'approve', missionVote: 'success' },
        { id: 2, name: 'Shan',    isResistance: true,   selected: false, teamVote: 'approve', missionVote: 'success' },
        { id: 3, name: 'Eman',    isResistance: true,   selected: false, teamVote: 'reject',  missionVote: 'success' },
        { id: 4, name: 'Gran',    isResistance: false,  selected: false, teamVote: 'reject',  missionVote: 'fail'    },
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
      recalls: this.recalls,
      getPlayer: this.getPlayer,
      getThisPlayer: this.getThisPlayer,
      getCurrentMission: this.getCurrentMission,
      setDialog: this.setDialog
    }
  },

  methods: {
    getPlayer(id) {
      const player = this.players.filter(player => player.id === id);
      return player[0];
    },

    getThisPlayer() {
      return this.getPlayer(this.playerId);
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
