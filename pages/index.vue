<template>
  <div>
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-5">
                <p>Ég heiti Arnór og ég er sjálfstætt starfandi vefhönnuður og vefforritari. Ég tek að mér ýmisskonar verkefni og itae arcu molestie, finibus risus a, imperdiet quam. Vivamus erat metus, consequat ut viverra eget, venenatis sollicitudin orci. Vestibulum interdum commodo sem ut viverra. Praesent dolor elit, vulputate eget nibh a, tincidunt congue dolor. Nulla ac efficitur diam, eu egestas nulla. Proin elit neque, ultrices nec neque lacinia, vehicula suscipit urna. Etiam vel pretium augue, sit amet pharetra lectus.</p>
                <nuxt-link to="verkefni/hsorka">HS Orka</nuxt-link>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!--<b-img fluid :srcset="require('~/assets/img/bjarg-frontpage.png').srcSet" />-->
                <b-img fluid src="https://picsum.photos/1920/1080/?image=10"></b-img>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>

</style>
