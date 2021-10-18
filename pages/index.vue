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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        veritatis atque pariatur veniam eius ratione iusto recusandae aspernatur
        reiciendis eos. Dolor quibusdam eos, optio earum reprehenderit in quae
        quas adipisci.
      </p>
    </b-row>
    <b-row>
      <b-tabs content-class="mt-3" fill>
        <b-tab active>
          <template variant="dark" #title>
            Proyectos
          </template>
          <b-row class="row row-cols-1 row-cols-md-4">
            <proyecto
              v-for="(data, i) in proyectos"
              :key="i"
              :id="i"
              :title="data.title"
              :img="data.img"
              :link="data.link"
              :presentation="data.presentation"
              :text="data.text"
            ></proyecto>
          </b-row>
        </b-tab>
        <b-tab title="Youtube">
          <b-row class="row row-cols-1 row-cols-md-4">
            <videoCard
              v-for="(data, i) in videos"
              :key="i"
              :title="data.title"
              :img="data.img"
              :url="data.url"
            ></videoCard>
          </b-row>
        </b-tab>
        <b-tab title="Demos">
          <b-row class="">
            <proyecto
              v-for="(data, i) in demos"
              :key="i"
              :id="`demo-${i}`"
              :title="data.title"
              :img="data.img"
              :link="data.link"
              :presentation="data.presentation"
              :text="data.text"
            ></proyecto>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-row>
  </b-container>
</template>

<script>
import proyecto from "../components/Proyecto.vue";
import videoCard from "../components/Video.vue";
export default {
  components: {
    proyecto,
    videoCard,
  },
  data() {
    return {
      proyectos: [
        {
          title: "Cooking Beats",
          img: "perfil.jpg",
          presentation:
            "Ecomerce de Instrumentales. Proyecto finalizata de NAVES Federal.",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "http://cookingbeats.ar/",
        },
        {
          title: "Debian FAI",
          img: "perfil.jpg",
          presentation:
            "Pagina de presentacion y descarga de la distro linux Debian FAI.",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 3",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 1",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "Proyecto 1",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
      ],
      videos: [
        {
          title: "ORM en 20 minutos",
          img: "miniaturas/ORM.png",
          url: "https://www.youtube.com/watch?v=sb7AD3x_UPk",
        },
      ],
      demos: [
        {
          title: "Ecomerce",
          img: "perfil.jpg",
          presentation:
            "Ecomerce de Instrumentales. Proyecto finalizata de NAVES Federal.",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link: "http://cookingbeats.ar/",
        }
      ],
    };
  },
};
</script>
<style>
.nav-fill .nav-item .nav-link {
  color: white;
}

.nav-tabs .nav-link{
  
}

.nav-tabs .nav-link.active {
  color: white;
  background-color: #4F3B78;
  border-color: #363B4E;
}

.tab-content {
  background-color: #363B4E;
  border-radius: 10px;
  padding: 1%;
}
</style>
