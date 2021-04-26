<template>
    <div>
        <footer class="py-12 px-5 md:px-32 flex justify-center md:justify-end">
                <a class="h-12 w-12 bg-red-500 rounded-full inline-block mr-5 flex justify-center items-center" v-for="(net, index) in networks" :key="index" :href="net.url">
                    <i :class="['text-white', 'text-xl', 'fa', 'fa-' + net.icon]"></i>
                </a>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            networks: [
                {
                    url: 'https://www.instagram.com/giorkysgomez/?hl=es-la',
                    icon: 'instagram',
                },
                  {
                    url: 'https://www.facebook.com/Giorkysgomez',
                    icon: 'facebook',
                },
                  {
                    url: 'https://twitter.com/giorkysgomez',
                    icon: 'twitter',
                },
                  {
                    url: 'https://youtube.com/channel/UCp0FmKmadcSl1OaZi1Rpn2Q',
                    icon: 'youtube',
                }
            ]
        }
    }
}
</script>