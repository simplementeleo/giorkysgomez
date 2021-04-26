<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navigation from './Navigation'
import Footer from './Footer'
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
html {
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
}
.btn-gior {
        background: linear-gradient(to left, #fc9fd0, #ce82f4);
    }
/* 
Pacifico
Oleo Script
Pattaya
Leckerli One
Yesteryear
Rochester
Galada
Clicker script
Lily Script */
</style>
