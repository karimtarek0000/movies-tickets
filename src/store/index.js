import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMovies: [],
    selectedMovie: null,
    partysMovie: null,
    seatsOccupied: [],
    //
    datesPartys: null,
    seatsNumbers: [],
    timesPartys: ["03:30 pm", "06:30 pm", "09:30 pm", "12:30 am"],
    // Alert
    alert: {
      type: null,
      message: null,
      status: false
    },
    // Auth
    user: {
      status: null
    }
  },
  mutations: {
    //
    setAllMovies(state, movies) {
      state.allMovies = movies;
    },
    //
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie;
    },
    //
    setPartysMovie(state, partys) {
      state.partysMovie = partys;
    },
    //
    setDatesPartys(state, dates) {
      state.datesPartys = dates;
    },
    //
    setOccupied(state, timeParty = []) {
      // 1) - If part movie data exsist will run all actions
      if (state.partysMovie) {
        const { occupied: getSeatsOccupied } = state.partysMovie.find(
          party => party.time === timeParty
        );
        state.seatsOccupied = getSeatsOccupied;
      } else {
        // Else will set seats occupied equal []
        state.seatsOccupied = timeParty;
      }
    },
    //
    addSeats(state, seat) {
      state.seatsNumbers.push(seat);
    },
    //
    removeSeats(state, seat = null) {
      if (seat === null) {
        state.seatsNumbers = [];
      } else {
        state.seatsNumbers.splice(seat, 1);
      }
    },
    //
    setAlert(state, payload) {
      state.alert = payload;
    }
  },
  getters: {
    //
    getSelectedMovie(state) {
      return state.selectedMovie;
    },
    //
    getDatesPartys(state) {
      return state.datesPartys;
    },
    //
    getSeatsOccupied(state) {
      return state.seatsOccupied;
    },
    //
    getSeatsNumbers(state) {
      return state.seatsNumbers;
    },
    //
    getAlert(state) {
      return state.alert;
    },
    //
    statusUser(state) {
      return state.user.status;
    }
  },
  actions: {
    // Get all movies
    async getMovies({ commit }) {
      try {
        const { data } = await axios.get("/movies");
        commit("setAllMovies", data);
      } catch {
        alert("some error please try again!");
      }
    },

    // Get party specific name movie and date
    async getPartysMovie({ commit }, infoMovie) {
      try {
        const { data: partys } = await axios.get(
          `/partys/?name-movie=${infoMovie.nameMovie}&date=${infoMovie.dateParty}`
        );

        commit("setPartysMovie", partys[0].times);
      } catch {
        alert("some error please try again!");
      }
    },

    // Get dates
    async getDates({ commit }) {
      const { data: dates } = await axios.get("/dates");

      commit("setDatesPartys", dates);
    }
  }
});
