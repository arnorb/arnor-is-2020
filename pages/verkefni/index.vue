<template>
    <div>
        <b-container>
            <h1 class="border-bottom my-5 pb-5">Verkefni</h1>
            <b-card no-body v-for="post in projPosts" :key="post.title" img-alt="" img-right class="rounded-0 mb-5">
                <b-row no-gutters>
                    <b-col md="5" order-md="2">
                        <b-link class="card-link" :to="'/verkefni/'+post.slug"><b-card-img :src="post.thumbnail" class="rounded-0 pb-md-5"></b-card-img></b-link>
                    </b-col>
                    <b-col md="7" order-md="1">
                        <b-card-body class="pl-md-0">
                            <b-card-title><b-link class="card-link" :to="'/verkefni/'+post.slug">{{post.title}}</b-link></b-card-title>
                            <b-card-text>
                                {{post.description}}
                            </b-card-text>
                            <b-link class="card-link" :to="'/verkefni/'+post.slug"><b-icon icon="arrow-right-short" scale="1.5"></b-icon> Um verkefnið</b-link>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
  computed: {
    projPosts() {
      return this.$store.state.projPosts;
    },
  },
};
</script>

<style lang="scss" scoped>

    h1 {
        border-color: #ced4da;
    }


</style>