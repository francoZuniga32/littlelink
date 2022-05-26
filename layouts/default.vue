<template>
  <b-container-fluid>
    <Nuxt />
    <br />
    <div class="footer">
      <div>
        <div>
          <h5>Redes</h5>
          <a href="https://github.com/francoZuniga32" target="_blank">
            <p>Github</p> <img src="/icons/github.png" width="20px">
          </a>
          <a href="https://www.linkedin.com/in/franco-agustin-ojeda-zu%C3%B1iga-84826117a/" target="_blank">
            <p>Linkeding</p><img src="/icons/linkedin.png" width="20px" />
          </a>
          <a href="https://www.instagram.com/franco.zuniga32/" target="_blank">
            <p>Instagram</p><img src="/icons/instagram.png" />
          </a>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>franco.ojeda@est.fi.uncoma.edu.ar</p>
          <p>+54 299 4139643</p>
        </div>
        <div>
          <h5>CV</h5>
          <img src="/qrcv.png" width="100px" alt="">
          <a href="francozunigacv.pdf">CV-link</a>
        </div>
      </div>
      <div class="atribuciones">
        <p> undefined <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a
            href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a></p>
      </div>
      <div class="copy">
        &#169 2022 franco agustin ojeda zuñiga
      </div>
    </div>
  </b-container-fluid>
</template>
<style>
body {
  scroll-behavior: smooth;
}

.footer{
  bottom: 0;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  background-color: #000;
}

.footer div:first-child{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}

.footer div:first-child div {
  width: 3fr;
  height: 100%;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  min-width: 300px;
}

.footer div:first-child a {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer a img {
  width: 20px;
  height: 20px;
}

.atribuciones{
  width: 1fr;
  font-size: 6pt;
}

.copy{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
