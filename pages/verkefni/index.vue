<template>
    <div>
        <b-container>
            <b-col>
                <b-row>
                    <div v-for="post in projPosts" :key="post">
                    <h1><nuxt-link :to="post.slug">{{post.title}}</nuxt-link></h1>
                    </div>
                </b-row>
            </b-col>
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

<style>

</style>