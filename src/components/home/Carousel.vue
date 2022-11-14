<template>
  <v-container id="home-section" class="section">
    <v-carousel
        class="pb-4"
        height="80vh"
        hide-delimiter-background
        show-arrows-on-hover>

      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-parallax :src="image" height="600" :class="'parallax_item_' + i"></v-parallax>
      </v-carousel-item>
    </v-carousel>
    <div style="background: #0a948f;"></div>
  </v-container>
</template>

<style>
#home-section {
  height: auto;
}
.v-parallax__image {
  width: 100vw !important;
}
</style>

<script>

export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true
    },
  },
  created() {
    window.addEventListener("resize", this.correctParallax);
  },
  destroyed() {
    window.removeEventListener("resize", this.correctParallax);
  },
  methods: {
    correctParallax() {
      function getPaddingByWidth() {
        return (window.innerWidth - 1380)/(-1.68) + 'px';
      }

      let styles = `
        .v-parallax__image{
            padding-bottom: ${ getPaddingByWidth() } !important;
        }
      `

      let styleSheet = document.createElement("style")
      styleSheet.innerText = styles
      document.head.appendChild(styleSheet)
    },
  },
  mounted: function(){
    this.correctParallax()
  },
}
</script>
