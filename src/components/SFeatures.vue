<template>
  <section id="features" class="section">
    <div class="main-card p-4 sm:p-12 md:p-20 lg:p-28">
      <div>
        <div>
          <h2 class="text-4xl text-center xl:text-left pt-16 md:pt-0">
            The S-Cloud Features
          </h2>
        </div>
        <div
          class="
            w-full
            sm:flex sm:flex-wrap
            xl:flex-nowrap
            justify-center
            sm:justify-between
            items-center
          "
        >
          <div class="single-f-card">
            <div class="inner-f-card">
              <img alt="upload" src="@/assets/icons/upload.png" />

              <h3 class="text-2xl my-4">Upload</h3>
              <h4 class="xs:w-64">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </h4>
            </div>
          </div>
          <div class="single-f-card">
            <div class="inner-f-card">
              <img alt="upload" src="@/assets/icons/save.png" />
              <h3 class="text-2xl my-4">Save</h3>
              <h4 class="xs:w-64">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </h4>
            </div>
          </div>
          <div class="single-f-card">
            <div class="inner-f-card">
              <img alt="upload" src="@/assets/icons/sync.png" />
              <h3 class="text-2xl my-4">Sync</h3>
              <h4 class="xs:w-64">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </h4>
            </div>
          </div>

          <div class="single-f-card">
            <div class="inner-f-card">
              <img alt="upload" src="@/assets/icons/share.png" />
              <h3 class="text-2xl my-4">Share</h3>
              <h4 class="xs:w-64">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SFeatures",
};
</script>

<style scoped>
.section{
  box-shadow: 0px -4px 50px rgba(87, 204, 153, 0.12);
}
.main-card {
  max-width: 1500px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
}
h2 {
  font-family: "Nexa Bold";
  font-style: normal;
  color: #202020;
}
.main-f-card {
  margin-top: 50px;
}

h3 {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  color: #202020;
}
h4 {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #848484;
}
</style>