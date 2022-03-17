<template>
  <div>
    <hero-section />
    <s-features />
    <s-cloud-storage />
   
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import SFeatures from "@/components/SFeatures.vue";
import SCloudStorage from "@/components/SCloudStorage.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    SFeatures,
    SCloudStorage
  },
  
};
</script>
<style scoped>

</style>
