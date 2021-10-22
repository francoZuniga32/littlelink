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
          Soy franco zuñiga soy estudiante de Ciencias de la Computación y Administración de Sistemas.
           Programo web desde hace 4 años, ademas cuento con experiencia programando software para  empresas.
        </p>
        <p>
          Creo que tengo lo suficiente como para poder ayudarte con tus proyectos espero que puedas contar conmigo.
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
      <b-col style="height: 300px; overflow-x: scroll;">
        <h2>Experiencia:</h2>
        <ul class="timeline">
          <li v-for="(trabajo, i) in experiencia" :key="i">
            <h5>{{ trabajo.titulo}}</h5>
            <h6>{{ trabajo.area }}. {{ trabajo.puesto }}</h6>
            <hr>
            <p>
              {{ trabajo.descripcion }}
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
      experiencia:[
        {
          titulo: "Policia de la Provincia del Neuquen",
          puesto: "Pasante",
          area: "Dpto de informática, Area de programacion",
          descripcion: "Realizar tareas de capacitación en el funcionamiento del dpto de informática de dicho ente, centrándome en el area de programacion, aprendiendo los pasos y formas en la que se desarrolla un software."
        },
        {
          titulo: "Pasantías en la Facultad de Informática",
          puesto: "Pasante",
          area: "Universidad del Comahue, Facultad de Informática",
          descripcion:"Realice pasantías realizando labores educativas. Participe como tallerista del programa de Vocaciones TIC, participe como ayudante en Vocaciones TIC itinerante, realizando actividades en Loncopué y Chos Malal. Además de participar de varias actividades de la facultad."
        },
        {
          titulo: "Programador en Tree Soft",
          puesto: "Desarrollador web",
          area: "Programacion",
          descripcion:"migre el backend de una aplicación construida en PHP a nodejs con Express y Sequelize, lo que resultó en una api rest. Además de desarrollar una aplicación en Vuejs Cli para consumir dicha api."
        },
        {
          titulo: "Programador principal de Cooking Beats",
          puesto: "Programador Principal",
          area: "Programacion",
          descripcion:"Cooking beats es un marketplace comunidad para productores de audio y beatmakers. Soy cofundador además de programador principal. Finalistas de nave federal 2021."
        },
      ],
      proyectos: [
        {
          title: "Cooking Beats",
          img: "miniaturas/cookingbeats.png",
          presentation:
            "Marketplace comunidad de beatmakers y productores de audio. Finalista de naves federal (banco macro)",
          text: `
            <p>Creamos Cooking Beats con el objetivo de ayudar a la comunidad de beatmaker y productor a poder comercializar su música por medio de una plataforma que asegure que ambas partes sean beneficiadas. El sistema está construido en tecnologías modernas por lo que siempre estamos avanzando a nuevos entornos.</p>
          `,
          link: "http://cookingbeats.ar/",
        },
        {
          title: "Debian FAI",
          img: "miniaturas/debianfai.png",
          presentation:
            "página web de la distribución de Debian de la facultad de informática",
          text: `
            <p>Está construida en html, js y css puro además de que uso bootstrap para el grid y lo demás. Contiene lo necesario para saber instalarlo además de los archivos de la distro.</p>
          `,
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
        {
          title: "CEFAI app",
          img: "miniaturas/img.png",
          presentation: "Aplicación de horarios y consulta de correlatividades",
          text: `
            <p>Esta aplicación de momento está fuera de línea ya que estamos en proceso de migrar a un ORM. El sitio ofrece un sistema de horarios para mostrar qué materias se están dictando además del aula en donde se cursa.</p>
            <p>Otra de las funcionalidades es la de consultar las correlativas para poder saber el régimen de correlatividades sin tener que leer una tabla. Una de las cosas que queremos agregar es la capacidad de contar con cursos de programación para los estudiantes de la carrera. </p>
          `,
          link:
            "https://github.com/francoZuniga32/francozuniga32.github.io/tree/master/docs",
        },
      ],
      demos: [
        {
          title: "Ecomerce",
          img: "miniaturas/ecommerce.png",
          presentation:
            "Demostración de cómo funciona un ecommerce de forma sencilla",
          text: `
            <p>Podrá realizar las acciones básicas y necesarias para poder realizar una compra. Podrá seleccionar un producto, la cantidad y cargarlas a un carrito de compras. Tengo que trabajar en el sistema de paginación y además en los filtros de búsqueda.</p>
          `,
          link: "http://cookingbeats.ar/",
        },
        {
          title: "Producto Flow",
          img: "miniaturas/img.png",
          presentation:
            "Aplicación de control de produccion.",
          text: `
            <p>Son innumerables las empresas que requieren un sistema de seguimiento de su produccion, he aquí una demo de como funcionaria una en la vida real. Podrá ingresar un pedido, luego de esto tendrá que completar los formularios para los procesos de dicho producto y podrá ver por qué etapa están dichos productos. Luego de finalizar podrá realizar la entrega de dicho pedido. Además de esto podrá ver algunas métricas como por ejemplo en qué etapa está se encuentra un pedido.</p>
          `,
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
