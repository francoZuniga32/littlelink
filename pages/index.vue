<template>
  <b-container class="conteiner">
	<div class="nav-bar">
		<div class="logo">
			fn.
		</div>
		<div class="links">
			<ul>
				<li>Sobre Mi</li>
				<li>Trabajos</li>
				<li>Proyectos</li>
			</ul>
		</div>
	</div>
	<div class="contenido">
		<div class="presentacion">
			<h1>Hola soy Franco Zuñiga</h1>
			<p>Soy estudiante en Ciencias de la Computacion, programador web y cofundador de <a>Cooking Beats</a>. Me gusta el mate, emprender nuevos proyectos y ayudar a los demas a adentrarse en el mundo de la progamacion</p>
		</div>
		<div class="imagen">
			<img src="/perfil.png"/>
		</div>
	</div>
	<div class="trabajos">
		<div class="trabajo" v-for="(t, i) in trabajos" :key="i">
			<h6>{{ t.titulo }}</h6>
			<p>{{ t.puesto }} - {{t.duracion}}</p>
			<p>{{ t.descripcion }}</p>
		</div>
	</div>
  </b-container>
</template>
<script>
export default{
	data(){
		return{
			trabajos:[
				{
					titulo: "Tree Soft",
					puesto: "Desarrollador Backend",
					descripcion: "migracion de funcionalidades de php a nodejs, utilizando expressjs, vuejs, sequalize orm.",
					duracion: "Mar 2021 - Jun 2021"
				},
				{
					titulo: "Vocaciones Tic, Fundacion Sadosky",
					puesto: "Talletista",
					descripcion: "imparti clases de desarllo de aplicaciones moviles con app inventor, en escuelas secundarias. explicando conceptos de diseño de aplicaciones y programacion",
					duracion: "Sep 2018 - Jun 2019"
				}
			]
		}
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');
body{
	font-family: 'Ubuntu', sans-serif;
	color: #C4C4C4;
	background-color: #292929;
}

.nav-bar{
	padding-top: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
}

.logo{
	font-size: 28px;
	font-style: medium;
	min-width: 50px;
	max-width: 20%;
}

.links{
	min-width: 300px;
	max-width: 80%;
	display:flex;
	flex-direction:row;
	align-content: center;
}
ul li{
	size: 18px;
	text-decoration: none;
	padding-left: 30px;
	display: inline;
}
.contenido{
	width: 100%;
	margin-top: 10%;
	display:flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
}
.presentacion{
	display: flex;
	flex-direction: column;
	width: 40%;
	min-width: 300px;
	border: #C4C4C4 2px solid;
	border-color: #C4C4C4;
	padding: 10px;
}
.imagen {
	min-width: 300px;
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
}

.trabajos{
	margin-top: 10%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
}

.trabajo {
	display:flex;
	flex-direction: column;
	max-width: 300px;
	border-left: 2px #c4c4c4 solid;
	padding: 10px;	
}

.imagen img{
	width: 80%;
}
</style>
