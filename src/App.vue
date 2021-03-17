<template>
  <div id="app" class="app container">
    <!--  -->
    <transition name="slide">
      <Alert v-if="statusAlert.status" />
    </transition>
    <!--  -->
    <Navbar />
    <router-view />
  </div>
</template>

<script>
//
import Navbar from "@/components/Navbar";
import Alert from "@/components/Alert";
//
export default {
  name: "App",
  computed: {
    statusAlert() {
      return this.$store.getters.getAlert;
    }
  },
  components: {
    Alert,
    Navbar
  }
};
</script>

<style lang="scss">
//

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap");
//
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

:root {
  --red: #ed1b24;
  --white: white;
  --green: #77a246;
}

html {
  scrollbar-color: black rgba(255, 255, 255, 0.164);
}

body {
  height: 100vh;
  font-family: Roboto, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/image/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--white);
  overflow-x: hidden;
  box-sizing: border-box;

  //
  @media (min-width: 1310px) {
    overflow: hidden;
  }

  @media (max-width: 1310px) {
    height: auto;
  }
}

.app {
  width: 100%;
  display: grid;
  grid-template-rows: 85px 1fr;
}

.container {
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 5px;
}

///////////////////////////////////
// Animation
.slide-enter-active {
  animation: slideIn 0.5s ease-in-out forwards;
}

.slide-leave-active {
  animation: slideOut 0.5s ease-in-out forwards;
}

//
@keyframes slideIn {
  0% {
    top: -50px;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}

//
@keyframes slideOut {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: -50px;
    opacity: 0;
  }
}
</style>
