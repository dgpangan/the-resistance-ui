<template>
  <dialog open>
    <h2>The following players were selected to go to this mission:</h2>
    <ul>
      <li v-for="player in selectedPlayers" :key="player.id">
        {{ player.name }}
        <span v-if="player.id === playerId">(You)</span>
      </li>
    </ul>
    <p>How would you vote?</p>
    <button @click="setVote('approve')">Approve</button>
    <button :disabled="playerId === playerInTurn" @click="setVote('reject')">Reject</button>
  </dialog>
</template>

<script>
export default {
  inject: ['players', 'playerId', 'playerInTurn', 'getPlayer', 'setDialog'],
  data() {
    return {
      selectedPlayers: this.players.filter(player => player.selected)
    }
  },

  methods: {
    setVote(vote) {
      const player = this.getPlayer(this.playerId);
      player.teamVote = vote;
      this.setDialog('team-vote-results');
    }
  }
}
</script>