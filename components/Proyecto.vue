<template>
  <div>
    <b-card
      v-bind:title="title"
      v-bind:img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      bg-variant="dark"
    >
      <b-card-text>
        {{ presentation }}
      </b-card-text>

      <b-button @click="ver">Ver mas</b-button>
    </b-card>
    <b-modal body-bg-variant="dark" header-bg-variant="dark" footer-bg-variant="dark" v-bind:id="modalid" v-bind:title="title">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    img: String,
    presentation: String,
    text: String,
    link: String,
  },
  data() {
    return {
      modalid: null,
    };
  },
  mounted() {
    this.modalid = `proyecto-${this.id}`;
  },
  methods:{
      ver(){
          this.$bvModal.show(this.modalid);
      }
  }
};
</script>
