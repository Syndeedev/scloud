<template>
  <div id="app">
    <nav class="flex items-center justify-between fixed px-6 sm:px-10 md:px-12 lg:px-24 xl:px-24 py-6">
      <div>
       <a href="/"> <img src="@/assets/icons/S-CLOUD.png" alt="s-cloud"></a>
      </div>
      <div class="md:flex items-center justify-center hidden">
        <router-link class="mx-4" to="#features">Features</router-link> 
        <router-link class="mx-4" to="#about">About Scloud</router-link>
        <router-link class="mx-4" to="#about">How it works</router-link>
        <a href="#about"
                    class="
                      inline-block
                      bg-scloudblue
                      hover:bg-scloudblue-dark
                      border border-scloudblue
                      text-white text-base
                      no-underline
                      font-semibold
                      w-48
                      text-center
                      py-3
                      rounded-lg
                    "
                  >
                    Connect Wallet</a>
      </div>
      <div class="md:hidden" >
        <img src="@/assets/icons/hamburger.svg">
      </div>
    </nav>
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
  background: #ffffff;
  width: 100%;
  /* max-width: 1500px; */
 
}

nav a {
  
  color: #727272;
}

nav a.router-link-exact-active {
  color: #2666CF;
  font-weight: bold;
  /* padding-bottom: 20px; */
  border-bottom: 3px solid #2666CF;
}
</style>
