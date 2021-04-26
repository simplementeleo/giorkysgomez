<template>
  <div>
    <header :class="['z-30', 'p-8', 'fixed', 'top-0', 'left-0', 'w-full', bgNav, 'duration-300']">
      <nav>
        <ul :class="['flex', 'justify-center', 'hidden', 'md:flex', 'font-bold']">
          <li v-for="(item, index) in items" :key="index"><nuxt-link class="px-5 py-3" :to="item.url">{{item.name}}</nuxt-link></li>
        </ul>
        <div class="absolute right-0 mr-5 top-0 mt-5 action block md:hidden text-right cursor-pointer" @click="nav = !nav">
          <span v-for="i in 3" :key="i"></span>
        </div>
        <!-- Responsive -->
        <div v-if="nav" class="duration-300 absolute w-full h-screen top-0 left-0 overlay z-40" @click="nav = !nav"></div>
        <div v-if="nav" class="fade absolute h-screen right-0 top-0 w-full max-w-sm nav-right z-50 p-8">
          <div class="text-right text-white cursor-pointer" @click="nav = !nav"> Cerrar </div>
          <div class="h-full">
            <ul class="flex flex-col h-full justify-center items-center text-white">
             
               <li v-for="(item, index) in items" :key="index" @click="nav = !nav" class="mt-8"><nuxt-link class="text-lg w-full mb-5 py-5 uppercase text-center font-bold" :to="item.url">{{item.name}}</nuxt-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              bgNav: '',
              nav: false,
              items: [
                { 
                  url: '/',
                  name: 'Inicio'
                },
                { 
                  url: '/#sobre',
                  name: 'Sobre mi'
                },
                { 
                  url: '/#mision',
                  name: 'Misión'
                },
                { 
                  url: '/blog',
                  name: 'Blog'
                },
              ]
          }
      },
    mounted() {
       window.addEventListener('scroll', (e) => {
          window.scrollY == 0 ? this.bgNav = 'noActive' : this.bgNav = 'active'
       })
    }
  }

</script>
<style scoped>
    .active {
        color: pink;
        background: #fff;
        box-shadow: 0px 5px 15px #00000026;
    }
    .noActive {
        color: #000;
        box-shadow: none;
    }
    .overlay {
      background: #09122067;
    }
    .nav-right {
      background: #ff8091;
      backdrop-filter: blur(10px);
    }
    .fade {
      animation: .1s fade linear forwards;
    }
    @keyframes fade {
      from {
      opacity: 0;
      }
       to {
      opacity: 1;
      }
    }
    .action span {
      background: #f5566c;
      margin-top: 5px;
      border-radius: 10px;
      height: 3px;
      display: block;
    }
    .action span:nth-child(1){
      width: 30px;
    }
     .action span:nth-child(2){
      width: 20px;
    }
     .action span:nth-child(3){
      width: 10px;
    }
</style>
