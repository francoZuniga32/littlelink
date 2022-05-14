<template>
  <b-container class="conteiner">
	<div class="nav-bar">
		<div class="logo">
			fz.
		</div>
		<div class="links">
			<ul>
				<li>
					<a href="#sobremi">Sobre Mi</a>
				</li>
				<li>
					<a href="#trabajos">Trabajos</a>
				</li>
				<li>
					<a href="#proyectos">Proyectos</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="contenido" id="sobremi">
		<div class="presentacion">
			<h1>Hola soy Franco Zuñiga</h1>
			<p>Soy estudiante en Ciencias de la Computacion, programador web y cofundador de <a>Cooking Beats</a>. Me gusta el mate, emprender nuevos proyectos y ayudar a los demas a adentrarse en el mundo de la progamacion</p>
		</div>
		<div class="imagen">
			<img src="/perfil.png"/>
		</div>
	</div>
	<div class="trabajos" id="trabajos">
		<h3>Trabajos</h3>
		<div>	
			<div class="trabajo" v-for="(t, i) in trabajos" :key="i">
				<h6>{{ t.titulo }}</h6>
				<p>{{ t.puesto }} - {{t.duracion}}</p>
				<p>{{ t.descripcion }}</p>
			</div>
		</div>
	</div>
	<div class="trabajos" id="proyectos">
		<h3>Proyectos</h3>
		<div class="proyectos">
			<div class="proyecto" v-for="(p, i) in proyectos" :key="i">
				<h6>{{ p.titulo }}</h6>
				<p>{{ p.descripcion }}</p> 
				<div>
					<a v-for="(im, i) in p.links" v-bind:href="im.link">
						<img v-bind:src="im.img" width="50px"/>
					</a>
				</div>
			</div>
			<div class="flip"></div>
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
				},
				{
					titulo: "Policia de la Provincia del Neuquen",
					puesto: "Pasante",
					descripcion: "realize mis pasantias de 5to año del nivel secundario en la policia de la provincia del neuquen en el dpto de Informatica. Desepeñe mis tareas en el area de programacion.",
					duracion: "Sep 2016 - Dic 2016"
				}
			],
			proyectos:[
				{
					titulo: "S3 server",
					descripcion: "serviros de expresjs para cargar archivos a s3, sirve como base para cargas en s3",
					links: [
						{
							img: "/icons/github.png",
							link: "https://github.com/francoZuniga32/s3-server"
						}
					]
				},{
					titulo: "json2excel",
					descripcion: "app para convertir excel a json y json a excel en forma de api REST",
					links: [
						{
							img: "/icons/github.png",
							link: "https://github.com/francoZuniga32/excel2json"
						},{
							img: "/icons/docker-hub.png",
							link: "https://github.com/francoZuniga32/excel2json"
						},
					]
				},{
					titulo: "Hero bot",
					descripcion: "hero bot telegram para guardias de sistemas",
					links: [
						{
							img: "/icons/github.png",
							link: "https://github.com/francoZuniga32/hero-bot"
						}
					]
				},{
					titulo: "CEFAI rest",
					descripcion: "aplicacion rest de horarios, correlatividades del centro de estudiantes de la facultad de informatica.",
					links: [
						{
							img: "/icons/github.png",
							link: "https://github.com/francoZuniga32/CEFAIrest"
						}
					]
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
 
a, a:hover{
	font-family: 'Ubuntu', sans-serif;
	color: #C4C4C4;
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
	display:grid;
	grid-template-columns: repeat(2, 2fr);
}
.presentacion{
	grid-template-columns: 2fr;
	grid-column-gap: 10%;
	grid-row-gap: 10%;
	width: 90%;
	min-width: 300px;
	border: #C4C4C4 2px solid;
	border-color: #C4C4C4;
	padding: 10px;
}
.imagen {
	min-width: 300px; 
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
}
.trabajos{
	margin-top: 10%
}

.trabajos div{
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
}

.trabajo {
	display:flex;
	flex-direction: column;
	max-width: 300px;
	margin: 10px;
	border-left: 2px #c4c4c4 solid;
	padding: 10px;	
}


.imagen img{
	width: 100%;
}

.preyectos {
	display: flex;
	flex-direction: row;
}

.proyectos .proyecto{
	padding: 1%;
	width: 300px;
	border-right: 2px solid #c4c4c4;
	margin: 10px;
	transition: border linear 1s;
}

.proyecto:hover {
	box-shadow: 0px 0px 10px #c4c4c4;
}

.proyecto div{
	display:flex;
	flex-direction: row;
	flex-wrap: 10%;
}


@media (max-width: 425px){
	.contenido{
		grid-template-columns: repeat(1, 1fr);
	}
	.contenido .imagen{
		grid-row-start: 1;
	}

	.contenidor .presentacion{
		grid-row-start: 2;
	}
}
</style>
