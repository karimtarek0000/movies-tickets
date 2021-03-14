<template>
  <main>
    <!-- 1) - Section render all movies -->
    <SectionListMovie>
      <!-- Movie card -->
      <MovieCard
        slot="cardMovie"
        v-for="movie in getAllMovies"
        :key="movie.id"
        :movie="movie"
        @movieInfo="getMovie = $event"
        :getMovieIdSelected="statusGetMovie ? getMovie.id : null"
      />
    </SectionListMovie>
    <!-- 2) - Section action user -->
    <SectionActionUser :statusGetMovie="statusGetMovie" :movie="getMovie">
      <!-- 1) - Choose day -->
      <SelectBox
        slot="selectBox"
        v-model="selectDay"
        note="Note: Only the day of the current week is chosen"
        :options="days"
      />
      <!-- 2) - Choose a party -->
      <SelectBox
        slot="selectBox"
        v-model="selectParty"
        :options="party"
        label="choose a party"
      />
      <!-- 3) - Screen cinema -->
      <ScreenCinema slot="screenCinema" />
    </SectionActionUser>
  </main>
</template>

<script>
//
import MovieCard from "@/components/MovieCard";
import SelectBox from "@/components/SelectBox";
import SectionListMovie from "@/components/SectionListMovie";
import SectionActionUser from "@/components/SectionActionUser";
import ScreenCinema from "@/components/ScreenCinema";
//
export default {
  name: "Home",
  data() {
    return {
      getMovie: null,
      selectDay: 2,
      selectParty: "",
      days: [1, 2, 3, 4, 5],
      party: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    getAllMovies() {
      return this.$store.state.allMovies;
    },
    statusGetMovie() {
      return this.getMovie !== null;
    }
  },
  created() {
    this.$store.dispatch("getMovies");
  },
  components: {
    SectionListMovie,
    SectionActionUser,
    MovieCard,
    SelectBox,
    ScreenCinema
  }
};
</script>

<style lang="scss">
main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
}
</style>
