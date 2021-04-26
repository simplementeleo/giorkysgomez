<template>
  <div>
   
    <section-y class="px-1 sm:px-10 md:px-16 lg:px-20 mt-12">
      <article>
         <img src="~/assets/images/1.webp" width="100%" alt="Suscríbete">
        <h1 data-aos="fade-up-right" class="text-xl md:text-5xl text-center my-12"> {{ post.title }} </h1>
        <nuxt-content data-aos="fade-up-right" :document="post" class="leading-loose"></nuxt-content>
        <a data-aos="fade-up-right" :href="post.video" class="px-5 py-3 rounded-full btn-gior block mt-16 text-white text-center uppercase transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              Ver video
          </a>
      </article>
    </section-y>
  </div>
</template>
<style scoped >

  h1 {
    color: #ff8091;
    font-family: 'Pacifico', cursive;
  }
  .nuxt-content-container >>> a {
    color: fuchsia;
    text-decoration: fuchsia;
  }
  .nuxt-content-container >>> p {
    margin-bottom: 20px;
  }
  .nuxt-content-container >>> ul {
    list-style: inside;
    margin-bottom: 20px;
  }
</style>

<script>
  import SectionY from '../../components/Utilities/SectionY'

  export default {
    components: {
      SectionY
    },
    async asyncData({$content, params }) {
      const post = await $content(`posts/${params.post}`)
        .fetch()
        .catch(err => {
          console.log(err)
        })
      return {
        post
      }
    },
    head() {
      return {
        title: this.post.title + ' | Giokys Gómez'
      }
    }
  }

</script>
