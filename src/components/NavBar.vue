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
          @click="openModalOne = true"
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
            @click="openModalOne = true"
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
      :modalOpen="openModalOne"
      @closeModal="openModalOne = $event"
      :size="'modal--md'"
    >
      <template>
        <div class="colOne text-center">
          <div v-for="(item, index) in walletTypes" :key="index">
            <div  @click="connectSelectedWallet(item.name)" class="wallet my-2 py-4 justify-center sm:justify-start ">
              <img style="height:40px;" class="sm:mx-14" :src="item.image">
              <h2 class="pl-2">{{ item.name }}</h2>
            </div>
          </div>
          <div class="pt-4">
            <a @click="createNewWallet()">Get a wallet</a>
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
    <wallet-modal
      :modalOpen="openModalTwo"
      @closeModal="openModalTwo = $event"
      :size="'modal--md'"
      :walletHeader="'Create new wallet'"
    >
      <template>
        <div class="colOne">
            <p>Scloud is compatible with any Ethereum wallet. 
                We recommend Metamask on desktop and Android, and Rainbow on iOS.</p>
          <div v-for="(item, index) in createWalletTypes" :key="index">
            <div @click="createSelectedWallet(item.name)" class="wallet my-2 py-4 justify-center sm:justify-start">
              <img style="height:40px;" class="sm:mx-14" :src="item.image">
              <h2 class="pl-2">{{ item.name }}</h2>
            </div>
          </div>
          <div class="pt-4 text-center">
            <a @click="connectWallet()">I have a wallet</a>
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
      openModalOne: false,
      openModalTwo: false,
      walletTypes: [
          {
            name:"Metamask",
            image: require('@/assets/icons/MetaMask.png')
          },
          {
            name:"Wallet Connect",
            image: require('@/assets/icons/walletConnect.png')
          },
          {
            name:"Trust Wallet",
            image: require('@/assets/icons/trust.png')
          },
          {
            name:"Coinbase",
            image: require('@/assets/icons/coinbase.png')
          }
        ],
      createWalletTypes: [
        {
            name:"Metamask",
            image: require('@/assets/icons/MetaMask.png')
          },
          {
            name:"Rainbow",
            image: require('@/assets/icons/rainbow.png')
          }
        ],
    };
  },
  components: {
    WalletModal,
  },
  methods:{
      createNewWallet(){
          this.openModalOne = false
          this.openModalTwo = true
      },
      connectWallet(){
          this.openModalOne = true
          this.openModalTwo = false
      },
      createSelectedWallet(value){
          console.log(value)
      },
      connectSelectedWallet(value){
        console.log(value)
      }
  }
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
  /* justify-content: center; */
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