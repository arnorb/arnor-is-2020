export const state = () => ({
    projPosts: [],
  });
  
  export const mutations = {
    setProj(state, list) {
      state.projPosts = list;
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/verkefni/', false, /\.json$/);
      let projPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      await commit('setProj', projPosts);
    },
  };