<template>
    <b-container fluid class="text-white bg-dark p-5">
        <b-container>
            <b-row class="justify-content-center pt-5">
                <b-col lg="4"> 
                    <nuxt-link class="nav-link" to="/">Um mig</nuxt-link>
                </b-col>
                <b-col lg="4" class="text-center"> 
                    <nuxt-link class="nav-link" to="/">Fleiri verkefni</nuxt-link>
                </b-col>  
                <b-col lg="4" class="text-right"> 
                    <nuxt-link class="nav-link" to="/">Forsíða</nuxt-link>
                </b-col>                
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav-link {
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
</style>