<template>
  <dialog open>
    <h2>Select X members that you would like to go on this mission:</h2>
    <ul>
      <li
        v-for="player in players"
        :key="player.id"
        :class="player.selected ? 'selected' : ''"
        @click="selectPlayer(player.id)">
        {{ player.name }}
        <span v-if="player.id === playerId">(You)</span>
      </li>
    </ul>
    <button @click="submitSelection()">Done</button>
  </dialog>
</template>

<script>
export default {
  inject: ['players', 'playerId', 'getPlayer', 'missions', 'getCurrentMission', 'setDialog'],
  data() {
    return {
      currentMission: this.getCurrentMission()
    }
  },
  methods: {
    selectPlayer(id) {
      const player = this.getPlayer(id);
      if (this.selectedPlayers() >= this.currentMission.playerCount && !player.selected) {
        return false;
      }
      player.selected = !player.selected;
    },
     selectedPlayers() {
      return this.players.filter(player => player.selected).length;
    },

    submitSelection() {
      // TODO: Make sure that enough number of players were selected.
      this.setDialog('team-vote');
    }
  }
}
</script>

<style scoped>
  .selected {
    color: green;
  }
</style>