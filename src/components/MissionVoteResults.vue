<template>
  <dialog open>
    <h2>Misson vote results</h2>
    <ul>
      <li v-for="player in selectedPlayers" :key="player.id">{{ player.missionVote }}</li>
    </ul>
    <button @click="done()">Done</button>
  </dialog>
</template>

<script>
export default {
  inject: ['players', 'setDialog'],
  data() {
    return {
      // TODO: shuffle
      selectedPlayers: this.players.filter(player => player.selected)
    }
  },
  methods: {
    done() {
      this.setDialog('');
    }
  }
}
</script>