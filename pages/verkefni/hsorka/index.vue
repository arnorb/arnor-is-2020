<template>
  <div class="project">
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-3">
                <h1 class="project-heading">Vefur HS Orku</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-3 mb-md-5">
                <b-img fluid :srcset="require('~/assets/img/hsorka-frontpage.png').srcSet" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-5">

                <p>Eldri vefur <a href="https://www.hsveitur.is/" target="others">HS veitna</a> var orðinn úreltur og úr sér genginn, hann var í eldra kerfi sem erfitt var að uppfæra og mikið af úreltu efni á honum. Þar að auki hafði fólk þar á bæ í huga að láta uppfæra mörkun og útlit fyrirtækisins og aðskilja sig þannig meira HS Orku, en fyrirtækin höfðu áður verið eitt og hétu áður Hitaveita Suðurnesja áður en nýleg lög um orkudreifingu og -sölu tóku gildi.</p>
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

<style lang="scss" scoped>
</style>
