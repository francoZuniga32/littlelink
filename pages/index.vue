<template>
  <b-container>
    <b-row
      class="d-flex justify-content-center align-items-center"
      style="margin-top: 1%"
    >
      <b-avatar src="perfil.jpg" size="6rem"></b-avatar>
    </b-row>
    <b-row>
      <h1 class="text-center">Franco Zuñiga, Desarrollador Web</h1>
    </b-row>
    <b-row>
      <proyecto v-for="(data, i) in proyectos" :key="i" :id="i" :title="data.title" :img="data.img" :link="data.link" :presentation="data.presentation" :text="data.text"></proyecto>
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
