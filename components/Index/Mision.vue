<template>
    <section-y>
        <Title text="Mi Misión" class="pb-16" />
        <div class="flex flex-wrap justify-center gap-10">
            <div data-aos="fade-up-right" class="card rounded-lg relative bg-red-500 p-10 py-16 flex flex-col items-end text-right text-white" v-for="i in 3" :key="i">
                <div class="absolute w-20 h-20 bg-white rounded-full circle"></div>
                <h1 class="text-6xl pb-1 border-b-2 border-white w-1/3 font-bold">0{{ i }}</h1>
                <h3 class="text-xl leading-loose mt-2">Lorem ipsum dolor.</h3>
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
 .pb-16 {
        color: #ff8091;
    }
    .circle {
        left: -35px;
        top: 40px;
    }
    .card {
        max-width: 275px;
        margin: 0 auto;
    }
    .card:nth-child(1){
        background: #01dabf;
        box-shadow: 5px 5px 20px #01dabf9e;
    }
    .card:nth-child(2){
        background: #ff8091;
        box-shadow: 5px 5px 20px #ff80919e;
    }
    .card:nth-child(3){
        background: #c77ef4;
        box-shadow: 5px 5px 20px #c77ef49e;
    }

</style>