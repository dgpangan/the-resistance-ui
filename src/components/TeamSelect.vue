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
  </dialog>
</template>

<script>
export default {
  inject: ['players', 'playerId', 'getPlayer'],
  methods: {
    selectPlayer(id) {
      const player = this.getPlayer(id);
      if (this.selectedPlayers() >= 2 && !player.selected) return false;
      player.selected = !player.selected;
    },
     selectedPlayers() {
      return this.players.filter(player => player.selected).length;
    }
  }
}
</script>

<style scoped>
  .selected {
    color: green;
  }
</style>