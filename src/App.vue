<template>
  <div id="app" class="app container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
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
  box-sizing: border-box;
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
  grid-template-rows: 120px 1fr;
}

.container {
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 5px;
}
</style>
