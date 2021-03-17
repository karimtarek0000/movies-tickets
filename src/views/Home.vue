<template>
  <main>
    <!-- 1) - Section render all movies -->
    <SectionListMovie>
      <template v-if="allMovies.length === 0">
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
      <!-- 4) - Submit booked -->
      <SubmitBooked slot="submit" @submit="submitBooked" />
    </SectionActionUser>
    <!--  -->
  </main>
</template>

<script>
//
import MovieCard from "@/components/MovieCard";
import SelectBox from "@/components/SelectBox";
import SectionListMovie from "@/components/SectionListMovie";
import SectionActionUser from "@/components/SectionActionUser";
import ScreenCinema from "@/components/ScreenCinema";
import SubmitBooked from "@/components/SubmitBooked";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    ...mapGetters(["getDatesPartys", "getSeatsNumbers", "statusUser"]),
    //
    statusGetMovie() {
      return this.getMovie !== null;
    }
  },
  methods: {
    //
    ...mapMutations([
      "setOccupied",
      "setPartysMovie",
      "setSelectedMovie",
      "removeSeats",
      "setAlert"
    ]),

    //
    ...mapActions(["getPartysMovie", "getMovies", "getDates"]),

    // This function will run if changed party
    changedParty() {
      // Check if GET_MOVIE exsist and SELECT_DAY not eqal 1
      // and SELECT_PARTY not eqal 1 will run all actions
      if (this.getMovie && this.selectDay !== 1 && this.selectParty !== 1)
        this.setOccupied(this.selectParty);

      // If SELECT_PARTY equal 1 will reset all actions user
      if (this.selectParty === 1) this.resetActionsSelectedMovie();
    },

    // This function will run if changed date
    changedDate() {
      // Check if GET_MOVIE exsist and SELECT_DAY not eqal 1 will run all actions
      if (this.getMovie && this.selectDay !== 1) this.actionsSelectedMovie();

      // If SELECT_DAY equal 1 will reset all actions user
      if (this.selectDay === 1) this.resetActionsSelectedMovie();
    },

    // This function into all actions will changes if user change name any time
    async actionsSelectedMovie() {
      // Send name movie and date movie
      await this.getPartysMovie({
        nameMovie: this.getMovie.name,
        dateParty: this.selectDay
      });

      // If SELECT_PARTY not equal 1 will send SELECT_PARTY
      if (this.selectParty !== 1) this.setOccupied(this.selectParty);
    },

    // This function reset all actions
    resetActionsSelectedMovie() {
      this.setPartysMovie(null);
      this.setOccupied();
      this.selectDay = 1;
      this.selectParty = 1;
      this.removeSeats();
    },

    // This function will run if submit button
    submitBooked() {
      if (this.getSeatsNumbers.length !== 0) {
        if (this.statusUser) {
          this.setAlert({ message: "error please try again!", status: true });
          console.log("submited");
          // this.resetActionsSelectedMovie();
        } else {
          this.$router.push({ name: "SignUp" });
          this.setAlert({ message: "please register first", status: true });
        }
      }
    }
  },
  created() {
    this.getMovies();
    this.getDates();
  },
  watch: {
    //
    getMovie(newMovie) {
      // 1) - Send new movie to state in store
      this.setSelectedMovie(newMovie);

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
    ScreenCinema,
    SubmitBooked
  }
};
</script>

<style lang="scss">
main {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  //
  @media (max-width: 1310px) {
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

  @media (max-width: 445px) {
    grid-template-columns: 100%;
  }
}
</style>
