import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMovies: []
  },
  mutations: {
    //
    setAllMovies(state, movies) {
      state.allMovies = movies;
    }
  },
  actions: {
    //
    async getMovies({ commit }) {
      try {
        const { data } = await axios.get("/moviesTickets");
        commit("setAllMovies", data.movies);
      } catch {
        alert("some error please try again!");
      }
    }
  }
});
