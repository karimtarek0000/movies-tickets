<template>
  <!--  -->
  <div class="list-movies__movie">
    <!-- Image -->
    <div class="list-movies__movie__img">
      <LazyImage :srcImg="movie.image" :alt="movie.name" />
    </div>
    <!-- Select -->
    <div class="list-movies__movie__select">
      <GSvg
        :name-icon="getMovieIdSelected === movie.id ? 'selected' : 'unselect'"
        :title="getMovieIdSelected === movie.id ? 'selected' : 'unselect'"
      />
    </div>
    <!-- Titles -->
    <div class="list-movies__movie__info">
      <span class="list-movies__movie__info__title">
        <CutText :text="movie.name" :targetPosition="12">
          <template #text="{displayText}">
            {{ displayText }}
          </template>
        </CutText>
      </span>
      <button
        class="list-movies__movie__info__btn-select"
        @click="sendMovie(movie)"
      >
        {{ getMovieIdSelected === movie.id ? "unselect" : "select now" }}
      </button>
    </div>
  </div>
</template>

<script>
import CutText from "@/components/CutText";
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      reuired: true
    },
    getMovieIdSelected: {
      type: [Number, Boolean],
      default: null
    }
  },
  components: {
    CutText
  },
  methods: {
    //
    sendMovie(movie) {
      // 1) - If user select first movie or select movie some one movie and after
      //   select another movie will remove all selected from other movie and send new movie
      this.$emit("movieInfo", movie);
      // 2) - Check if movie id equal getMovieSelectedId thats mean user
      //   click unselected will send null
      if (movie.id === this.getMovieIdSelected) this.$emit("movieInfo", null);
    }
  }
};
</script>

<style></style>
