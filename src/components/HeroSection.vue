<template>
  <section class="home">
    <div class="card mx-4 sm:mx-0">
      <h1 class="text-4.5xl sm:text-6xl">
        Decentralized Cloud Storage Tool For <span>Digital People</span>
      </h1>
      <h3 class="text-xl sm:text-2xl sm:w-480 md:w-672">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </h3>
      <div
        class="flex items-center justify-center pt-14 sm:inline-block flex-col"
      >
        <a
          class="
            inline-block
            bg-scloudblue-light
            hover:bg-scloudblue-dark hover:text-white
            border border-scloudblue-light
            text-scloudblue text-base
            no-underline
            font-semibold
            w-48
            text-center
            py-3
            rounded-lg
          "
        >
          Learn About S-Cloud</a
        >
        <a
          class="
            inline-block
            mt-5
            sm:mt-0 sm:ml-6
            font-semibold
            bg-scloudblue
            hover:bg-scloudblue-dark
            border border-scloudblue
            text-white text-base
            no-underline
            w-48
            text-center
            py-3
            rounded-lg
          "
        >
          Try S-Cloud</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  components: {},
};
</script>
<style scoped>
.home {
  background-image: url("@/assets/heroimg.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-position: bottom center;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  text-align: center;
}
.card {
  margin-top: 25vh;
  max-width: 846px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
h1 {
  font-family: "Nexa Extra Bold";
  line-height: 150%;
  color: #202020;
}
span {
  color: #25ce9e;
}
h3 {
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #202020;
}
</style>
