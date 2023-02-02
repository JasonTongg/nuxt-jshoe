<template>
  <div class="movieList">
    <movie2 :data="movieData" v-for="movieData in movies"></movie2>
    <h1>tes</h1>
    {{ movie }}
  </div>
</template>
<script>
import movie from "../../components/movies/MovieList.vue";
export default {
  components: {
    movie2: movie,
  },
  middleware: ["check-auth", "auth"],
  computed: {
    movies() {
      let movie = this.$store.getters.getMovieData;
      let userId = this.$store.getters.getUserId;
      // return movie.filter((item) => item.userId === userId);
      return movie;
    },
  },
};
</script>
<style scoped>
.movieList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>
