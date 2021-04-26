<template>
  <main>
    <Home />
    <AboutMe id="sobre" />
    <Mision id="mision" />
    <Blog :posts="posts"/>
    <Footer />
  </main>
</template>
<script>
import Home from '../components/Index/Home'
import AboutMe from '../components/Index/AboutMe'
import Mision from '../components/Index/Mision'
import Blog from '../components/Index/Blog'
export default {
  components: {
    Home,
    AboutMe,
    Mision,
    Blog
  },
    head() {
        return {
            title: 'Inicio | Giorkys Gómez'
        }
    },
     async asyncData({ $content, params, error }){
      const posts = await $content('posts')
        .only(['title', 'description', 'path', 'slug'])
        .sortBy('createdAt')
        .limit(3)
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