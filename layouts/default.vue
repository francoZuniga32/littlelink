<template>
  <b-container-fluid>
    <b-navbar toggleable="lg">
      <b-container class="d-flex justify-content-center align-items-center">
        <b-row align-h="center">
          <b-col>
            <a href="https://github.com/francoZuniga32" target="_blank"
              ><img class="icon" width="30xp" src="icons/github.png" alt=""
            /></a>
          </b-col>
          <b-col
            ><a
              href="https://www.instagram.com/franco.zuniga32/"
              target="_blank"
              ><img
                class="icon"
                width="30px"
                src="icons/instagram.png"
                alt=""/></a
          ></b-col>
          <b-col
            ><a
              href="https://www.youtube.com/channel/UCS7Feycv14mG8J2JFTzr4Xw"
              target="_blank"
              ><img
                class="icon"
                width="30px"
                src="icons/youtube.png"
                alt=""/></a
          ></b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <Nuxt />
    <br />
    <footer class="footer d-flex justify-content-center ">
      <b-row class="text-center">
        <a
            href="https://cafecito.app/francozuniga"
            rel="noopener"
            target="_blank"
            >
          invitame un cafesito    
        </a>
      </b-row>
      <b-row>
        <p>
Iconos diseñados por
        <a
          href="https://www.flaticon.es/autores/pixel-perfect"
          title="Pixel perfect"
          >Pixel perfect</a
        >
        from
        <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
        </p>
      </b-row>
    </footer>
  </b-container-fluid>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
  margin: 0;
  background-color: #F7F4EA;
  color: black;
  font-family: "Roboto Mono", monospace;
}

h1, h2, h3, h4, h5{
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  width: 100%;
  background-color: #6A7FF5;
  border-radius: 0px 0px 10px 10px;
}

.icon {
  margin: 0 2%;
}
.social {
  width: 100%;
}

a, a:hover{
  color: white;
}

.footer{
  width: 100%;
  padding: 10px;
  background-color: #6A7FF5;
  flex-direction: column;
  border-radius: 10px 10px 0px 0px;
}
.footer > div{
  width: 100%;
}
</style>
