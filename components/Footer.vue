<template>
    <b-container fluid id="footer" class="footer text-white bg-dark p-5" :class="{ 'mt-3 mt-lg-5' : !isLanding }">
        <b-container>
            <b-row class="justify-content-center pt-5">
                <b-col lg="4"> 
                    <nuxt-link class="nav-link" to="/um-mig"><b-icon icon="arrow-right-short" scale="1.2"></b-icon> Um mig</nuxt-link>
                </b-col>
                <b-col lg="4" class="text-center"> 
                    <nuxt-link class="nav-link" to="/verkefni"><b-icon icon="arrow-right-short" scale="1.2"></b-icon> Fleiri verkefni</nuxt-link>
                </b-col>  
                <b-col lg="4" class="text-right"> 
                    <nuxt-link class="nav-link" to="/"><b-icon icon="arrow-right-short" scale="1.2"></b-icon> Forsíða</nuxt-link>
                </b-col>                
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {
    props: {
        isLanding: Boolean 
    }
}
</script>

<style lang="scss" scoped>
    .nav-link {
        font-size: 2.5rem;
        font-weight: 300;
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
</style>