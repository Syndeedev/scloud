<template>
  <section>
    <div
      v-if="modalOpen"
      class="modal"
      role="dialog"
      aria-modal="true"
      @click.self="close()"
    >
      <div class="modal__content" :class="size || 'modal--sm'">
        <h1>i am a modal</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"connectWallet",
    props:{
        size: String,
        modalOpen: {
            type: Boolean,
            default: false,
        }
    },
    methods:{
        close(){
            this.$emit('closeModal', false)
        }
    }

}
</script>

<style  scoped>
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
  width: 460px;
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
</style>