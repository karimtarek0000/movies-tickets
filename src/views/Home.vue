<template>
  <main>
    <!-- 1) - Section render all movies -->
    <SectionListMovie>
      <!-- Movie card -->
      <MovieCard
        slot="cardMovie"
        v-for="movie in allMovies"
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
    //
    changedParty() {
      if (this.getMovie && this.selectDay !== 1) {
        this.$store.commit("setOccupied", this.selectParty);
      }
    },
    //
    async changedDate() {
      if (this.getMovie && this.selectDay !== 1) {
        await this.$store.dispatch("getPartysMovie", {
          nameMovie: this.getMovie.name,
          dateParty: this.selectDay
        });

        //
        if (this.selectParty !== 1) {
          this.$store.commit("setOccupied", this.selectParty);
        }
      }
    }
  },
  created() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getDates");
  },
  watch: {
    //
    getMovie(newMovie) {
      //
      this.$store.commit("setSelectedMovie", newMovie);

      //
      // if (this.selectParty !== 1 && this.selectDay !== 1) {
      //   //
      //   this.$store.dispatch("getPartysMovie", {
      //     nameMovie: newMovie.name,
      //     dateParty: this.selectDay
      //   });
      //   this.$store.commit("setOccupied", this.selectParty);
      // }

      //
      if (!newMovie) {
        this.$store.commit("setPartysMovie", null);
        this.$store.commit("setOccupied");
        this.selectDay = 1;
        this.selectParty = 1;
      }
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
