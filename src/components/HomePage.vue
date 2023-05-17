<template>
  <div>
    <v-menu
                v-model="settingsMenu"
                transition="slide-y-transition"
              >
      <div v-for="(item, index) in steps" :key="index">
        {{  item.name }}
      </div>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'HomePage',

  data() {
    return {
      settingsMenu: true,
      steps: [
        {
          name: 'step1',
        },
        {
          name: 'step2',
        },
      ],
    };
  },

  async mounted() {
    await new Promise(r => setTimeout(r, 2000));
    this.items = [];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
