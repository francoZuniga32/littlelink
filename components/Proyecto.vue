<template>
  <div>
    <b-card
      v-bind:title="title"
      v-bind:img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 40rem;"
      class="mb-2"
    >
      <b-card-text style="height: 100px; overflow: hidden; text-overflow: ellipsis;">
        {{ presentation }}
      </b-card-text>

      <b-button style="background: #927FBF" @click="ver">Ver mas</b-button>
    </b-card>
    <b-modal ok-variant="dark" cancel-variant="danger" size="xl" centered v-bind:id="modalid" v-bind:title="title">
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
<style>
.card{
  background-color: #4F3B78;
  border-radius: 10px;
}
.modal-content{
  background-color: #4F3B78;
  border-color: #4F3B78;
}
</style>
