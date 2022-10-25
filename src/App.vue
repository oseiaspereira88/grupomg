<template>
  <v-app>
    <v-main>
      <v-sheet
          id="scrolling-techniques-4"
          class="overflow-y-auto"
          max-height="100vh">
        <router-view/>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">

.scroll-none::-webkit-scrollbar {
  display: none;
}

.bg-right-container {
  position: absolute;
  top: 24vh;
  right: 0;
  z-index: 0;
  height: 100%;
  width: auto;
  border-radius: 16px;
  overflow: hidden;
}

.bg-left-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: auto;
  border-radius: 16px;
  overflow: hidden;
}

.bg-right-container #animation1{
  height: 70%;
}

</style>
