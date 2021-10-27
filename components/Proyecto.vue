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
      @click="ver"
    >
      <b-card-text style="height: 100px; overflow: hidden; text-overflow: ellipsis;">
        {{ presentation }}
      </b-card-text>
    </b-card>
    <b-modal ok-variant="dark" cancel-variant="danger" size="xl" centered v-bind:id="modalid" v-bind:title="title">
      <div v-html="text">

      </div>
      <hr>
      <a class="btn btn-ligth" v-bind:href="link">Ver Proyecto</a>
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
  background-color: #F7F4EA;
  border-radius: 10px;
  border: 1px solid #565656;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.card:hover{
box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
.modal-content{
  background-color: #F7F4EA;
  border-color: #4F3B78;
}
</style>
