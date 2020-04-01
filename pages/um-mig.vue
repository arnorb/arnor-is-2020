<template>
  <div class="main">
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-3">
                <p>Ég heiti Arnór og ég er sjálfstætt starfandi vefhönnuður og vefforritari. Þú getur <nuxt-link to="/verkefni">skoðað verkefni sem ég hef unnið</nuxt-link> að en líka <nuxt-link to="/">lesið meira um mig</nuxt-link>. Ef þú vilt <nuxt-link to="/">hafa samband</nuxt-link> þá svara ég þér fljótt.</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!--<b-img fluid :srcset="require('~/assets/img/bjarg-frontpage.png').srcSet" />-->
                <b-img fluid src="/img/landslag2.jpg"></b-img>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>
