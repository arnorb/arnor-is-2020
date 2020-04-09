<template>
    <div class="landingpage">

        <Header :isDark="true"/>
        <nuxt />
        <Footer :isLanding="true"/>

    </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

export default {
    components: {
        Header, Footer
    }
}
</script>

<style>

 

</style>
