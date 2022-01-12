<template>
  <b-container-fluid>
    <Nuxt />
    <br />
  </b-container-fluid>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
  margin: 0;
  color: black;
}

h1, h2, h3, h4, h5{
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  width: 100%;
  background-color: #3e498c;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: #6A7FF5;
  flex-direction: column;
}
.footer > div{
  width: 100%;
}
</style>
