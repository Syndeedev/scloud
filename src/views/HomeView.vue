<template>
  <div>
    <hero-section/>
    <s-features/>
    <s-cloud-storage/>
    <wallet-modal :modalOpen="openModal" @closeModal="openModal = $event"/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import SFeatures from '@/components/SFeatures.vue'
import SCloudStorage from '@/components/SCloudStorage.vue'
import WalletModal from '@/components/WalletModal.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    SFeatures,
    SCloudStorage,
    WalletModal
  },
  data(){
    return{
      openModal:false
    }
  }
}
</script>
<style scoped>
</style>
