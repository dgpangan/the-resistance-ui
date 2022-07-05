<template>
  <dialog open>
    <h2>Select X members that you would like to go on this mission:</h2>
    <ul>
      <li v-for="player in players" :key="player.id">{{ player.name }}</li>
    </ul>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { id: 0, name: 'Player 1', isResistance: true },
        { id: 1, name: 'Player 2', isResistance: true },
        { id: 2, name: 'Player 3', isResistance: true },
        { id: 3, name: 'Player 4', isResistance: false },
        { id: 4, name: 'Player 5', isResistance: false },
      ]
    }
  }
}
</script>