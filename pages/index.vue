<template>
  <b-container>
    <b-row
      class="d-flex justify-content-center align-items-center"
      style="margin: 10% 0%"
    >
      <b-col sm>
        <h1 class="text-left">
          <b>Franco Zuñiga, Desarrollador Web</b>
        </h1>
      </b-col>
      <b-col sm>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          veritatis atque pariatur veniam eius ratione iusto recusandae
          aspernatur reiciendis eos. Dolor quibusdam eos, optio earum
          reprehenderit in quae quas adipisci.
        </p>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <h2>Tecnologuias:</h2>
        <ol>
          <li v-for="(tec, i) in tecnologuias" :key="i">{{ tec }}</li>
        </ol>
      </b-col>
      <b-col>
        <h2>Road-map:</h2>
        <ul class="timeline">
          <li>
            <h5>ORM</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula....
            </p>
          </li>
          <li>
            <a href="#">21 000 Job Seekers</a>
            <a href="#" class="float-right">4 March, 2014</a>
            <p>
              Curabitur purus sem, malesuada eu luctus eget, suscipit sed
              turpis. Nam pellentesque felis vitae justo accumsan, sed semper
              nisi sollicitudin...
            </p>
          </li>
          <li>
            <a href="#">Awesome Employers</a>
            <a href="#" class="float-right">1 April, 2014</a>
            <p>
              Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla
              odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec
              tempor nibh...
            </p>
          </li>
        </ul>
      </b-col>
      <b-col>
        <h2>Logros:</h2>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <h2>Proyectos</h2>
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
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <h2>Demos</h2>
        <b-row class="row row-cols-1 row-cols-md-4">
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
      </b-col>
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
      tecnologuias: [
        "HTML",
        "CSS-Basico",
        "JS",
        "PHP",
        "MySQL",
        "Node JS",
        "Sequelise ORM",
        "Linux / Bash",
      ],
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
          title: "CMS nodejs & nuxt js",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "CEFAI app",
          img: "perfil.jpg",
          presentation: "lorem ipsu,",
          text: "sdfasdfasdkfjasldjkfkajs;df",
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
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
        },
        {
          title: "Producto Flow",
          img: "perfil.jpg",
          presentation:
            "Ecomerce de Instrumentales. Proyecto finalizata de NAVES Federal.",
          text: ``,
          link: "http://cookingbeats.ar/",
        },
      ],
    };
  },
};
</script>
<style>
.nav-fill .nav-item .nav-link {
  color: white;
}

.nav-tabs .nav-link {
}

.nav-tabs .nav-link.active {
  color: white;
  background-color: #4f3b78;
  border-color: #363b4e;
}

.tab-content {
  background-color: #363b4e;
  border-radius: 10px;
  padding: 1%;
}

ol {
  list-style-type: none;
  counter-reset: li;
}

li:before {
  counter-increment: li;
  content: counter(li, decimal-leading-zero);
  color: #6a7ff5;
  margin-right: 0.25em;
}

ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: black;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>
