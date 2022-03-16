<template>
  <section class="section">
    <div class="main-card p-4 sm:p-12 md:p-20 lg:p-28">
      <div
        class="
          flex
          items-center
          flex-col
          justify-center
          xl:items-start xl:justify-start
        "
      >
        <div class="md:w-520">
          <h1 class="text-4xl text-center xl:text-left pt-16 md:pt-0 pb-6">
            Decentralized Cloud Storage Tool For Digital People
          </h1>
        </div>
        <div class="mid-card w-full lg:flex p-4 sm:p-12 md:p-20 lg:p-28">
          <div class="w-full lg:w-1/2 flex items-center justify-center">
            <img src="@/assets/storage.png" alt="storage" />
          </div>
          <div
            class="
              w-full
              lg:w-1/2
              flex
              items-center
              justify-center
              lg:block lg:pl-6
            "
          >
            <div class="xl:w-96">
              <h2 class="text-2xl mb-6 mt-6 lg:mt-0 text-center lg:text-left">
                Decentralized Cloud Storage Tool For Digital People
              </h2>
              <div v-for="(item, index) in storageContents" :key="index">
                <div class="flex items-start my-4">
                  <div class="mt-1">
                    <img
                      width="30px"
                      height="30px"
                      src="@/assets/icons/tick.svg"
                      alt="tick"
                    />
                  </div>
                  <h3 class="ml-4">{{ item.content }}</h3>
                </div>
              </div>
              <div class="flex items-center justify-center sm:block">
                <a
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
                    mt-6
                    rounded-lg
                  "
                >
                  Try S-Cloud</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SCloudStorage",
  data() {
    return {
      storageContents: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section {
  background: #f9fbff;
}
.main-card {
  max-width: 1500px;
  margin: auto;
}
h1 {
  font-family: "Nexa Bold";
  font-style: normal;
  color: #202020;
  line-height: 150%;
  color: #202020;
}
.mid-card {
  background: #ffffff;
}
h2 {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: #2666cf;
}
</style>