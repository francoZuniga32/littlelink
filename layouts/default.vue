<template>
  <b-container-fluid>
    <Nuxt />
    <br />
    <div class="footer">
      <div>
       	<h5>Redes</h5>
	<a href="https://github.com/francoZuniga32" target="_blank"><p>Github</p> <img src="/icons/github.png" width="20px"></a>
	<a href="https://www.linkedin.com/in/franco-agustin-ojeda-zu%C3%B1iga-84826117a/" target="_blank"><p>Linkeding</p><img src="/icons/linkedin.png" width="20px" /></a>
<a href="https://www.instagram.com/franco.zuniga32/"target="_blank"><p>Instagram</p><img src="/icons/instagram.png"/></a>
      </div>
      <div>
	      <h5>Secciones</h5>
	      <a href="#sobremi">Sobre Mi</a>
	      <a href="#trabajos">Trabajos</a>
	      <a href="proyectos">Proyectos</a>
      </div>
      <div>
	      <h5>Atribuciones</h5>
      		<div> undefined <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a></div>
      </div>
    </div>
  </b-container-fluid>
</template>
<style>
body{
	scroll-behavior: smooth;
}
.footer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 0;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  background-color: black;
}

.footer div{
	width: 3fr;
	height: 100%;
	display: flex;
	align-content: space-between;
	flex-direction: column;
	justify-content: center;
  width: 30%;
  min-width: 300px;
}

.footer a{
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.footer a img{
	width: 20px;
	height: 20px;
}
</style>
