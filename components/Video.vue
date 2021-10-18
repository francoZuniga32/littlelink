<template>
  <b-card
    v-bind:title="title"
    v-bind:img-src="img"
    img-alt="Image"
    img-top
    @click="to()"
    overlay
  >
  </b-card>
</template>
<script>
export default {
    props:{
        title: String,
        img: String,
        url: String,
    },
    methods:{
        to(){
            window.location(this.url, '_blank')
        }
    }
}
</script>
<style>
.card{
  margin: 1%;
}
</style>