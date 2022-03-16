<template>
  <section>
    <div
      v-if="modalOpen"
      class="modal "
      role="dialog"
      aria-modal="true"
      @click.self="close()"
    >
      <div class="modal__content pb-6 max-h-500 xl:max-h-700 scroll " :class="size || 'modal--sm'">
        <div class="flex modal_header justify-between items-center py-4 lg:flex mx-4 sm:mx-8">
          <h1 class="text-2xl sm:text-3xl">{{walletHeader}}</h1>
          <img @click="close()" class="cursor-pointer" alt="x" src="@/assets/icons/x.svg" />
        </div>
        <div class="w-full lg:flex p-4 sm:p-8">
          <div
            class="w-full lg:w-1/2 flex items-center justify-center lg:pr-5 lg:block"
          >
          <slot></slot>
          </div>

          <div
            class="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center lg:ml-4 justify-center flex-col text-center lg:px-6 pt-10 colTwo"
          >
            <img alt="wallet" src="@/assets/icons/wallet.svg" />
            <h3 class="text-2xl pt-4 pb-3">What is a wallet?</h3>
            <h4 class="text-xl pb-8">Your wallet is your login identity</h4>
            <h6 class="sm:w-352">
              Your wallet is both a storage for your digital assets and your
              login access. With our decentralized solution, you do not need to
              create an account, just connect your wallet. <br /><br />
              We do not have access to your wallet privacy keys and password.
            </h6>
            <a class="pt-6 pb-4" href="#">Learn More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "connectWallet",
  props: {
    size: String,
    modalOpen: {
      type: Boolean,
      default: false,
    },
    walletHeader: {
      type: String,
      default: "Connect your wallet",
    },
  },
  methods: {
    close() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  background: rgba(24, 29, 39, 0.6);
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal__content {
  background: #ffffff;
  opacity: 1;
  border-radius: 4px;
  width: 460px;
  min-height: 400px;
}
.modal--md {
  width: 1000px;
  min-height: 400px;
}

.modal--sm {
  width: 400px;
  min-height: 400px;
}

.modal--xsm {
  width: 400px;
  min-height: 180px;
}
/* &:focus {
      outline: none;
    } */
.colTwo {
  background: #fbfbfb;
  border-radius: 24px;
}
.colTwo h3, .modal_header h1 {
  font-family: "Nexa Extra Bold";
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  text-align: center;

  color: #000000;
}
.colTwo h4 {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: #2666cf;
}
.colTwo a {
  font-family: "Nexa Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: #2666cf;
}
.modal_header{
  border-bottom: 2px solid #EDEDED;
}
.scroll {
  /* max-height: 700px; */
  overflow-y: auto;
  overflow-x: hidden;
}


.scroll::-webkit-scrollbar {
  background: transparent !important;
  width: 5px;
  height: 8px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #c4c4c4 !important;
  max-height: 20px !important;
  border-radius: 6px;
}
</style>
