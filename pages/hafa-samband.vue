<template>
    <div class="main pb-5">
    <b-container>
        <Contact/>
        <b-row class="mt-3 mt-md-5">
            <b-col>
                <!--<b-img fluid :srcset="require('~/assets/img/bjarg-frontpage.png').srcSet" />-->
                <b-img fluid src="/img/landslag.jpg"></b-img>
            </b-col>
        </b-row>
    </b-container>

  </div>
</template>

<script>
import Contact from "~/components/Contact"

export default {
    components: {
        Contact
    }
}
</script>

<style>

</style>