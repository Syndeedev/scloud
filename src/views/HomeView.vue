<template>
  <div>
    <hero-section />
    <s-features />
    <s-cloud-storage />
    <wallet-modal
      :modalOpen="openModal"
      @closeModal="openModal = $event"
      :size="'modal--md'"
    >
      <template>
        <div class="colOne text-center">
        <div v-for="(item,index) in walletTypes" :key="index">
          <div class="wallet my-2 py-4">
            <h2>{{item}}</h2>
          </div>
        </div>
          <div class="pt-4">
            <a>Get a wallet</a>
          </div>
          <div class="flex items-center justify-center">
            <h4 class="pt-8 sm:w-392">
              By connecting your wallet, you agree to the
              <span>terms of use</span> and <span>privacy policy</span>.
            </h4>
          </div>
        </div>
      </template>
    </wallet-modal>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import SFeatures from "@/components/SFeatures.vue";
import SCloudStorage from "@/components/SCloudStorage.vue";
import WalletModal from "@/components/WalletModal.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    SFeatures,
    SCloudStorage,
    WalletModal,
  },
  data() {
    return {
      openModal: true,
      walletTypes:[
        "Metamask","Wallet Connect","Trust Wallet","Coinbase"
      ]
    };
  },
};
</script>
<style scoped>
.wallet {
  background: #fbfbfb;
  border-radius: 9px;
  /* height: 92px;*/
  width: 100%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.wallet:hover{
  background: #FFFFFF ;
border: 2px solid #2666CF;
}
 /*.wallet::focus{
   background: #FFFFFF !important;
border: 2px solid #2666CF;
box-sizing: border-box;
border-radius: 9px;
 }*/

.wallet h2 {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: #4d4d4d;
}
.colOne a {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  text-decoration-line: underline;
  cursor: pointer;
  color: #2666cf;
}
.colOne h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #8b8b8b;
}
.colOne span {
  text-transform: capitalize;
  color: #2666cf;
}
</style>
