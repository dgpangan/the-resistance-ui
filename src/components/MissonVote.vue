<template>
  <dialog open>
    <h2>Vote on the mission result</h2>
    <p v-if="player.isResistance">As a part of the resistance, you can only vote for success.</p>
    <p>
      <span
        @click="playerVote = 'success'"
        :class="playerVote === 'success' ? 'marked' : ''">
        Success
      </span>
      <span
        v-if="!player.isResistance"
        @click="playerVote = 'fail'"
        :class="playerVote === 'fail' ? 'marked' : ''">
        Fail
      </span>
    </p>
    <button @click="setVote">Vote</button>
  </dialog>
</template>

<script>
export default {
  inject: ['getThisPlayer', 'setDialog'],
  data() {
    return {
      player: this.getThisPlayer(),
      playerVote: ''
    }
  },

  methods: {
    setVote() {
      if (this.playerVote === 'success' || this.playerVote ==='fail') {
        this.player.missionVote = this.playerVote;
        this.setDialog('');
      }
    }
  }
}
</script>

<style scoped>
  .marked {
    color: green;
  }
</style>