<template>
  <b-container-fluid>
    <b-navbar toggleable="lg">
      <b-row style="w-100">
        <b-col>
          <a href="https://github.com/francoZuniga32" target="_blank"
          ><img class="icon" width="30xp" src="icons/github.png" alt=""
        /></a>
        </b-col>
        <b-col><a href="https://www.instagram.com/franco.zuniga32/" target="_blank"
          ><img class="icon" width="30px" src="icons/instagram.png" alt=""
        /></a></b-col>
        <b-col><a href="" target="_blank"
          ><img class="icon" width="30px" src="icons/youtube.png" alt=""
        /></a></b-col>
      </b-row>
    </b-navbar>
    <Nuxt />
    <div class="footer">
      <div>
        Iconos diseñados por
        <a
          href="https://www.flaticon.es/autores/pixel-perfect"
          title="Pixel perfect"
          >Pixel perfect</a
        >
        from
        <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
      </div>
    </div>
  </b-container-fluid>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400&display=swap');
body {
  margin: 0;
  background-color:#113F67;
  color: white;
  font-family: 'Roboto Mono', monospace;
}
.navbar{
  background-color: #38598B;
  border-radius: 0px 0px 10px 10px;
}

.icon {
  margin: 0 2%;
}
.social{
  width: 100%;
}

.footer{
  background-color: #38598B;
  height: 200px;
}

.footer div{
  margin-bottom: 0;
}
</style>
