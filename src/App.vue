<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

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

nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
