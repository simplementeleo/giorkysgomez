<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ff7f90" fill-opacity="1" d="M0,320L1440,64L1440,0L0,0Z"></path>
    </svg>
    <section-y>
      <Title text="Blog" class="pb-16" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div data-aos="fade-up-right"
          class="shadow-2xl p-2 md:p-5 bg-white rounded-md transform hover:-translate-y-1 duration-300 max-w-xs mx-auto"
          v-for="(post, index) in posts" :key="index">
          <img :src="require('~/assets/images/'+index+'.webp')" alt="Suscribete!">
          <p class="mt-5 text-center"> {{ post.description }} </p>
          <nuxt-link :to="{ path: `/blog/${post.slug}/`, component: '/_post.vue' }"
            class="px-5 py-3 rounded-full btn-gior block mt-5 text-white text-center uppercase">
            ir
          </nuxt-link>
        </div>
      </div>
    </section-y>
  </div>
</template>
<style scoped>
   .pb-16 {
        color: #ff8091;
    }
</style>
<script>
  import Title from '../../components/Utilities/Title'
  import SectionY from '../../components/Utilities/SectionY'

  export default {
  
    components: {
      Title,
      SectionY,
    },
    head() {
      return {
        title: 'Blog | Giorkys Gómez'
      }
    },
      async asyncData({ $content, params, error }){
      const posts = await $content('posts')
        .only(['title', 'description', 'path', 'slug'])
        .sortBy('createdAt')
        .where({
          published: true
        })
        .fetch()
        .catch(error => {
          console.log(error)
        })
        return { posts };
    },
  }

</script>
