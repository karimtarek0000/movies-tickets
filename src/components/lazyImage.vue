<template>
  <img
    class="image"
    :src="statusInterSectingImg"
    :alt="statusInterSectingAlt"
  />
</template>

<script>
export default {
  name: "lazyImage",
  props: {
    srcImg: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "no"
    }
  },
  data() {
    return {
      interSecting: false,
      observer: null,
      options: {
        threshold: 0.25
      }
    };
  },
  computed: {
    // IF INTERSECTING TRUE WILL BE ADD IMAG INTO SRC
    statusInterSectingImg() {
      return this.interSecting ? this.srcImg : "";
    },
    //
    statusInterSectingAlt() {
      return this.interSecting ? this.alt : "";
    }
  },
  watch: {
    // WATCH THE INTERSECTION
    interSecting(n) {
      if (n) this.$el.style.setProperty("opacity", 1);
    }
  },
  mounted() {
    // INIT INTER SECTION OBSERVER
    this.observer = new IntersectionObserver(entries => {
      // SET IMAGE IN VARIABLE
      const image = entries[0];
      if (image.isIntersecting) {
        // WILL BE SET INTERSECTING TO TRUE
        this.interSecting = true;
        // NOT WATCH ANY MORE
        this.observer.disconnect();
      }
    }, this.options);
    // INIT
    this.observer.observe(this.$el);
  },
  destroyed() {
    // NOT WATCH ANY MORE
    this.observer.disconnect();
  }
};
</script>

<style scoped>
/*  */
.image {
  opacity: 0;
  transition: opacity 1.5s ease-out;
}
/*  */
img {
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
