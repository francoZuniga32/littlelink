<template>
  <b-container class="conteiner">
    <section class="header">
      <article class="foto">
        <img src="/perfil.jpg" class="img" alt="">
      </article>
      <article>
        <h2>Franco Agustin Ojeda Zuñiga</h2>
        <button>Contatame <i class="material-icons">expand_more</i>
        </button>
      </article>
    </section>
    <section>
      <article>
        <p>
          Estudio en la Licenciatura en Ciencias de la Computación, y Tec. Administración en Sistemas y Software Libre. Soy programador web desde hace 4 años, Cofundador de Cooking Beats. Aprendo tecnologías nuevas de forma autodidacta.
        </p>
      </article>
    </section>
    <section>
      <article>
        <h4>Habilidades</h4>
        <ul>
          <li>Programación web Básica: html, css, js básico (DOM, acceso a atributos, etc).</li>
          <li>Programación web backend: php, nodejs, mysql.</li>
          <li>Frameworks: Vuejs, Nuxt js, Express js.</li>
          <li>Herramientas: Sequelize (ORM), JWT (json web token), Docker, Bash, Administración básica de linux.</li>
          <li>Idioma: Inglés técnico.</li>
        </ul>
      </article>
    </section>
    <section>
      <h4>Experiencia</h4>
      <div>
        <h5>Desarrollador web, En Tree soft. marzo 2021 - julio 2021</h5>
        <p>Desarrolle el perfil de desarrollador web, dando soporte y mantenimiento a una plataforma para una empresa de mantenimiento industrial (revestimiento de caños, tubing). Me encargue de la documentación del sistema y de su migración a tecnologías más modernas como express js y vue js. Por problemas de coordinación y tiempo no puede lograr dicha misión.</p>
      </div>
      <div>
        <h5>Pasante en la Policía de la Provincia del Neuquén, Dpto. Informática. septiembre 2016 - Octubre 2016.</h5>
        <p>
          Realice tareas afines con el área de programación de dicha entidad, aprendiendo lo básico de la programación web y realizando algunas tareas sencillas para dicho ente. 
        </p>
      </div>
      <div>
        <h5>Tallerista en Vocaciones Tic, septiembre 2018 - junio 2019.</h5>
        <p>Dentro del programa de Vocaciones TIC de la fundación sadosky, impartí talleres de programación en escuelas secundarias, y una capacitación de ATEN neuquén en Andacollo.</p>
      </div>
    </section>
    <section>
      <article>
        <h4>Proyectos</h4>
        <div>
          <h6>Cefai REST</h6>
          <p>API rest de materias y correlatividades de las carreras de la Facultad de Informatica, Universidad del Comahue. Construida en nodejs con express y conectada a una base de datos con un Sequelize ORM.</p>
        </div>
        <div>
          <h6>SaaS implementacin</h6>
          <p>Estoy integrando 2 apis una construida en nodejs con express y otra en python para controlar contenedores docker, y poder manejar una serie de aplicaciones.</p>
        </div>
        <div>
          <h6></h6>
          <p></p>
        </div>
        <div>
          <h6></h6>
          <p></p>
        </div>
        <div>
          <h6></h6>
          <p></p>
        </div>
      </article>
    </section>
    <section>
      <article class="form">
        <form action="">
          <label for="">Email</label>
          <input type="email" name="email">
          <label for="">Asunto</label>
          <input type="text" name="asunto">
          <label for="">Mensaje</label>
          <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
          </form>
      </article>
    </section>
  </b-container>
</template>
<style>
.header{
  display: flex;
  flex-direction: row;
}

.header article{
  height: 400px;
  max-width: 50%;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

article{
  display: flex;
  flex-direction: column;
}

article button{
  height: 40px;
  border: none;
  background-color: rgb(87, 189, 237);
  color: white;
  border-radius: 10px;
  text-align: center;
}

article button:active{
  background-color: rgb(78, 166, 208);
}

.header .img{
  width: 300px;
  height: 300px;
  border-radius: 300px;
}

.form form{
  flex-direction: column;
}
</style>
<script>
</script>