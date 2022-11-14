<template>
  <v-app style="overflow-y: hidden !important;">
    <router-view style="overflow-y: hidden !important;"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">

body::-webkit-scrollbar {
  display: none;
}

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

.bg-right-container #animation1 {
  height: 70%;
}

</style>
