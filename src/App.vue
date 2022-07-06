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

import { MISSIONS, PLAYERS, DIALOG, RECALLS, PLAYER_ID, PLAYER_IN_TURN } from './constants.js';

export default {
  components: { TheBoard, CardDraw, TeamSelect, TeamVote, TeamVoteResults, MissionVote, MissionVoteResults },

  data() {
    return {
      players:       PLAYERS,
      missions:      MISSIONS,
      showDialog:    DIALOG,
      recalls:       RECALLS,
      playerId:      PLAYER_ID,
      playerInTurn:  PLAYER_IN_TURN,
    }
  },

  provide() {
    return {
      players:       this.players,
      playerId:      this.playerId,
      playerInTurn:  this.playerInTurn,
      missions:      this.missions,
      recalls:       this.recalls,
      getPlayer:     this.getPlayer,
      getThisPlayer: this.getThisPlayer,
      getMission:    this.getMission,
      setDialog:     this.setDialog
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

    getMission() {
      const mission = this.missions.filter(mission => mission.status === '');
      return mission[0];
    },

    setDialog(dialogName) {
      this.showDialog = dialogName;
    }
  }
}
</script>
