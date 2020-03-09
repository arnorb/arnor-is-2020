<template>
  <div class="main project">
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-3">
                <h1 class="project-heading">{{projPost.title}}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-3 mb-md-5">
                <b-img fluid :src="projPost.thumbnail" alt="" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col lg="8" class="mb-5">
                <div v-html="$md.render(projPost.body)" />
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.projPost.title + " – Arnór Bogason vefhönnuður",
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

<style>

</style>