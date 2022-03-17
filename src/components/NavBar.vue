<template>
  <div>
    <nav
      class="
        flex
        items-center
        justify-between
        fixed
        px-6
        sm:px-10
        md:px-12
        lg:px-24
        xl:px-24
        py-6
      "
    >
      <div>
        <a href="/"> <img src="@/assets/icons/S-CLOUD.png" alt="s-cloud" /></a>
      </div>
      <div class="md:flex items-center justify-center hidden">
        <router-link class="mx-4" to="#features">Features</router-link>
        <router-link class="mx-4" to="#about">About Scloud</router-link>
        <router-link class="mx-4" to="#about">How it works</router-link>
        <a
          style="color: white"
          @click="openModal = true"
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
          Connect Wallet</a
        >
      </div>
      <div
        class="md:hidden cursor-pointer"
        @click="dropdownMenuIsVisible = !dropdownMenuIsVisible"
      >
        <img
          v-if="!dropdownMenuIsVisible"
          width="21"
          height="15"
          alt="menu"
          src="@/assets/icons/hamburger.svg"
        />
        <img
          v-if="dropdownMenuIsVisible"
          width="21"
          height="15"
          alt="x"
          src="@/assets/icons/x.svg"
        />
      </div>
      <div
        class="block md:hidden bg-white fixed w-fit shadow right-2 top-14"
        :class="dropdownMenuIsVisible ? 'block' : 'hidden'"
      >
        <div class="flex flex-col p-4 text-center">
          <router-link class="m-2" to="#features">Features</router-link>
          <router-link class="m-2" to="#about">About Scloud</router-link>
          <router-link class="m-2" to="#about">How it works</router-link>
          <a
            style="color: white"
            @click="openModal = true"
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
              m-2
              rounded-lg
            "
          >
            Connect Wallet</a
          >
        </div>
      </div>
    </nav>
    <wallet-modal
      :modalOpen="openModal"
      @closeModal="openModal = $event"
      :size="'modal--md'"
    >
      <template>
        <div class="colOne text-center">
          <div v-for="(item, index) in walletTypes" :key="index">
            <div class="wallet my-2 py-4">
              <h2>{{ item }}</h2>
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
import WalletModal from "@/components/WalletModal.vue";
export default {
  name: "NavBar",
  data() {
    return {
      dropdownMenuIsVisible: false,
      openModal: false,
      walletTypes: ["Metamask", "Wallet Connect", "Trust Wallet", "Coinbase"],
    };
  },
  components: {
    WalletModal,
  },
};
</script>

<style scoped>
nav {
  background: #ffffff;
  width: 100%;
}

nav a {
  color: #727272;
}

nav a.router-link-exact-active {
  color: #2666cf;
  font-weight: bold;
  border-bottom: 3px solid #2666cf;
}
.wallet {
  background: #fbfbfb;
  border-radius: 9px;
  width: 100%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.wallet:hover {
  background: #ffffff;
  border: 2px solid #2666cf;
}

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