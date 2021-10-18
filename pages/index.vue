<template>
  <b-container>
    <b-row
      class="d-flex justify-content-center align-items-center"
      style="margin-top: 1%"
    >
      <b-col class="d-flex justify-content-center">
        <b-avatar src="perfil.jpg" size="14em"></b-avatar>
      </b-col>
    </b-row>
    <b-row>
      <h1 class="text-center">
        <b>Franco Zuñiga, Desarrollador Web</b>
      </h1>
    </b-row>
    <b-row>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque veritatis atque pariatur veniam eius ratione iusto recusandae aspernatur reiciendis eos. Dolor quibusdam eos, optio earum reprehenderit in quae quas adipisci.</p>
    </b-row>
    <b-row>
      <b-tabs content-class="mt-3" fill>
        <b-tab active>
          <template variant='dark' #title>
            sdfasfasf
          </template>
          <b-row class="row row-cols-1 row-cols-md-4">
            <proyecto v-for="(data, i) in proyectos" :key="i" :id="i" :title="data.title" :img="data.img" :link="data.link" :presentation="data.presentation" :text="data.text"></proyecto>
          </b-row>
        </b-tab>
        <b-tab title="Youtube"><p>I'm the second tab</p></b-tab>
        <b-tab title="Demos"><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </b-row>
  </b-container>
</template>

<script>
import proyecto from '../components/Proyecto.vue';
export default {
  components:{
    proyecto
  },
  data() {
    return {
      proyectos: [
        {
          title: "Proyecto 1",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 2",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 3",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 1",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 1",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
      ],
    };
  },
};
</script>
<style>
.nav-fill .nav-item .nav-link{
  color: white;
}
.nav-tabs .nav-link.active{
  color: white;
  background-color: #38598B;
  border-color: white;
}
</style>