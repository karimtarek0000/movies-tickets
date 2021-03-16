<template>
  <main>
    <!-- 1) - Section render all movies -->
    <SectionListMovie>
      <template v-if="!allMovies">
        <Loader />
      </template>
      <template v-else>
        <!-- Movie card -->
        <MovieCard
          slot="cardMovie"
          v-for="movie in allMovies"
          :key="movie.id"
          :movie="movie"
          @movieInfo="getMovie = $event"
          :getMovieIdSelected="statusGetMovie ? getMovie.id : null"
        />
      </template>
    </SectionListMovie>
    <!-- 2) - Section action user -->
    <SectionActionUser :statusGetMovie="statusGetMovie" :movie="getMovie">
      <!-- 1) - Choose day -->
      <SelectBox
        slot="selectBox"
        :options="getDatesPartys"
        v-model="selectDay"
        @changed="changedDate"
        type="date"
        note="Note: Only the day of the current week is chosen"
        label="choose the day"
      />
      <!-- 2) - Choose a party -->
      <SelectBox
        slot="selectBox"
        :options="timesPartys"
        v-model="selectParty"
        @changed="changedParty"
        label="choose a party"
      />
      <!-- 3) - Screen cinema -->
      <ScreenCinema
        slot="screenCinema"
        :selectDay="selectDay"
        :selectParty="selectParty"
      />
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
import { mapState, mapGetters } from "vuex";
//
export default {
  name: "Home",
  data() {
    return {
      getMovie: null,
      selectDay: 1,
      selectParty: 1
    };
  },
  computed: {
    //
    ...mapState(["allMovies", "timesPartys"]),
    //
    ...mapGetters(["getDatesPartys"]),
    //
    statusGetMovie() {
      return this.getMovie !== null;
    }
  },
  methods: {
    // This function will run if changed party
    changedParty() {
      if (this.getMovie && this.selectDay !== 1 && this.selectParty !== 1)
        this.$store.commit("setOccupied", this.selectParty);

      if (this.selectParty === 1) this.resetActionsSelectedMovie();
    },

    // This function will run if changed date
    changedDate() {
      // Run this function when change date
      if (this.getMovie && this.selectDay !== 1) this.actionsSelectedMovie();

      if (this.selectDay === 1) this.resetActionsSelectedMovie();
    },

    // This function into all actions will changes if user change name any time
    async actionsSelectedMovie() {
      await this.$store.dispatch("getPartysMovie", {
        nameMovie: this.getMovie.name,
        dateParty: this.selectDay
      });

      // If SELECT_PARTY not equal 1 will send SELECT_PARTY
      if (this.selectParty !== 1) {
        this.$store.commit("setOccupied", this.selectParty);
      }
    },

    // This function reset all actions
    resetActionsSelectedMovie() {
      this.$store.commit("setPartysMovie", null);
      this.$store.commit("setOccupied");
      this.selectDay = 1;
      this.selectParty = 1;
    }
  },
  created() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getDates");
  },
  watch: {
    //
    getMovie(newMovie) {
      // 1) - Send new movie to state in store
      this.$store.commit("setSelectedMovie", newMovie);

      // 2) - If NEW_MOVIE and SELECT_PARTY and SELECT_DAY exsist will run fn ACTIONS_SELECT_MOVIE
      if (newMovie && this.selectParty !== 1 && this.selectDay !== 1)
        this.actionsSelectedMovie();

      // 3) - If NEW_MOVIE is false will reset all actions
      if (!newMovie) this.resetActionsSelectedMovie();
    }
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

  //
  @media (max-width: 1310px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 60vw;
    justify-content: center;
  }

  @media (max-width: 1055px) {
    grid-template-columns: 70vw;
  }

  @media (max-width: 900px) {
    grid-template-columns: 80vw;
  }

  @media (max-width: 770px) {
    grid-template-columns: 90vw;
  }

  @media (max-width: 687px) {
    grid-template-columns: 55vw;
  }

  @media (max-width: 564px) {
    grid-template-columns: 70vw;
  }
}
</style>
