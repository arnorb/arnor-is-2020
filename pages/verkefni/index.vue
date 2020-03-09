<template>
  <div>
      <div v-for="post in projPosts" :key="post">
        <h1>{{post.title}}</h1>
      </div>
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