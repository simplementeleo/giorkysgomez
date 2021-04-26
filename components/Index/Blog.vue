<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ff7f90" fill-opacity="1" d="M0,320L1440,64L1440,320L0,320Z"></path>
    </svg>
    <section-y class="blog">
      <Title text="Blog" class="pb-16 text-white" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div data-aos="fade-up-right" class="card p-2 md:p-5 bg-white rounded-md transform hover:-translate-y-1 duration-300 max-w-xs mx-auto" v-for="(post, index) in posts" :key="index">
          <img :src="require('~/assets/images/'+index+'.webp')" alt="Suscribete!">
          <p class="mt-5 text-center"> {{ post.description }} </p>
          <nuxt-link :to="`/blog/${post.slug}`" class="px-5 py-3 rounded-full btn-gior block mt-5 text-white text-center uppercase">
            ir
          </nuxt-link>
        </div>

      </div>

      <nuxt-link data-aos="fade-up-right" to="/blog"
        class="px-5 py-3 rounded-full btn-gior block mt-5 text-white text-center uppercase max-w-xs mx-auto duration-300 transform hover:-translate-y-1 mt-16">
        ver más
      </nuxt-link>
    </section-y>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ff7f90" fill-opacity="1" d="M0,320L1440,64L1440,0L0,0Z"></path>
    </svg>
  </div>
</template>
<style scoped>
  .blog {
    background: #ff7f90;
  }

</style>
<script>
  import Title from '../Utilities/Title'
  import SectionY from '../Utilities/SectionY'
  export default {
    props: ['posts'],
    components: {
      Title,
      SectionY
    },
    data() {
      return {
        hola: 'Hola vale'
      }
    },
 
    
  }

</script>
