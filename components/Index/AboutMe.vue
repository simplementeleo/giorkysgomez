<template>
    <section-y class="mt-100vh block">
        <Title text="Sobre Mi" class="pb-16" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <p data-aos="fade-up-right" class="leading-loose flex items-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores sunt ratione ipsam in id ullam atque illo non fuga facere recusandae porro maiores est temporibus fugit, minus nostrum totam neque. Esse sapiente voluptas magni culpa vitae. Earum, libero? Repudiandae!
            </p>
            <div data-aos="fade-up-right" class="flex justify-center items-center h-full">
                <img src="~/assets/images/logo.png" alt="Suscribete!">
            </div>
        </div>
    </section-y>
</template>
<script>
import Title from '../Utilities/Title'
import SectionY from '../Utilities/SectionY'
export default {
    components: {
        Title,
        SectionY
    }
}
</script>
<style scoped>
    .mt-100vh {
        margin-top: 100vh;
    }
    .pb-16 {
        color: #ff8091;
    }
</style>