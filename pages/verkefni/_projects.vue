<template>
    <article>
        <h1>{{projPost.title}}</h1>
        <div v-html="$md.render(projPost.body)" />
    </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/verkefni/${params.project}.json`),
      };
  },
};
</script>

<style>

</style>