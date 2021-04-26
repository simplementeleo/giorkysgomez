<template>
   <div>
        <h1 data-aos="fade-up-right" class="text-2xl md:text-5xl relative"> {{ text }} </h1>
   </div>
</template>
<script>
export default {
    // name: 'title-section',
    props: ['text']
}
</script>
<style scoped>

    h1 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-family: 'Pacifico', cursive;
    }
    h1::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background: #eb2cf1;
        bottom: -5px;
    }
</style>