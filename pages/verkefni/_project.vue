<template>
  <div class="main project">
    <b-container>
        <b-row class="justify-content-center mb-3">
            <b-col lg="9">
                <h1 class="project-heading pt-2">{{projPost.title}}</h1>
            </b-col>
            <b-col lg="3">
                <b-button :href="projPost.siteurl" squared block size="" variant="outline-dark" target="_blank" class="px-5 py-3">Skoða vef</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-3 mb-md-5">
                <b-img fluid :src="projPost.thumbnail" alt="" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-3 mb-md-5">
                <div v-html="$md.render(projPost.body)" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col lg="8">
                <div class="shadow-lg p-4 p-md-5 mb-n5 bg-white rounded-lg">
                    <p>Ert þú að leita að einföldum og þægilegum vef sem einfaldar alla upplýsingagjöf til viðskiptavina? Hafðu þá samband.</p>
                    <p>Þú getur <a href="https://www.facebook.com/messages/t/arnorb" class="fbmesslink">skotið að mér skilaboðum á Messenger</a> eða <a href="tel:+3546945400" class="tellink">heyrt í mér í síma 694 5400</a>.</p> 
                </div>
            </b-col>
        </b-row>     
    </b-container>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.projPost.title + " | Arnór Bogason – vefhönnuður",
            meta: [
                { hid: 'description', name: 'description', content: this.projPost.description }
            ]
        }
    },

    async asyncData({ params, payload }) {
        if (payload) return { projPost: payload };
        else
            return {
                projPost: await require(`~/assets/content/verkefni/${params.project}.json`),
        };
    },
};
</script>

<style lang="scss" scoped>

    a {
        &.fbmesslink {
            color: #234874;
        }
        &.tellink {
            color: #85630D;
        }
        text-decoration: underline;
        &:hover {
            color: #000;
        }
    }

    #footer {
        margin-top: 0 !important;
    }


</style>