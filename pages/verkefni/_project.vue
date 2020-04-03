<template>
  <div class="main project">
    <b-container>
        <b-row class="justify-content-center mb-3">
            <b-col lg="9">
                <h1 class="project-heading pt-2 mb-3 mb-lg-0">{{projPost.title}}</h1>
            </b-col>
            <b-col lg="3">
                <b-button :href="projPost.siteurl" squared block size="" variant="outline-dark" target="_blank" class="px-5 py-3"><b-icon icon="arrow-right-short" scale="1.5"></b-icon> Skoða vef</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-3 mb-md-5">
                <b-img fluid :src="projPost.thumbnail" alt="" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-3 mb-md-5">
                <div class="main-content" v-html="$md.render(projPost.body)" />
            </b-col>
        </b-row>
        <Contact :isCard="true"/>     
    </b-container>
  </div>
</template>

<script>
import Contact from "~/components/Contact"

export default {
    components: {
        Contact
    },
    // beforeCreate() {
    //     process.client.body.className = this.projPost.shorttitle;
    // },

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

    p {
        color: #000;
    }

    .main.project {
        margin-bottom: -3rem;
    }


</style>

<style lang="scss">

        #footer .row {
            padding-top: 3rem;
        }

</style>