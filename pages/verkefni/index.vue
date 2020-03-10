<template>
    <div>
        <b-container>
            <b-col>
                <b-row>
                    <b-card-group>
                        <b-card v-for="post in projPosts" :key="post.title" :title="post.title" :img-src="post.thumbnail" img-alt="" img-right>
                            <b-card-text>
                                {{post.description}}
                            </b-card-text>
                            <b-link class="card-link" :to="'/verkefni/'+post.slug"><b-icon icon="arrow-right-short" scale="1.5"></b-icon> Um verkefnið</b-link>
                        </b-card>
                    </b-card-group>
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

<style lang="scss" scoped>



</style>