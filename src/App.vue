<template>
  <div id="app">
      <nav-bar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>

<style >
@font-face {
  font-family: "Nexa Extra Bold";
  src:  url(@/fonts/Nexa-Font/Nexa-Bold.otf) format("opentype");
}
@font-face {
  font-family: "Nexa Bold";
  src:  url(@/fonts/Nexa-Font/NexaBold.otf) format("opentype");
}
*{
   padding: 0;
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
  scroll-behavior: smooth;
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #202020;
  font-style: normal;
}
</style>
