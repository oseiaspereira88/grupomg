<template>
  <v-container id="carousel-section" class="section">
    <v-carousel
        class="pb-4"
        height="80vh"
        hide-delimiter-background
        show-arrows-on-hover
        cycle>

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
        if(window.innerWidth <= 600) {
          return (window.innerWidth - 1380)/(-1.65) + 'px';
        } else {
          return (window.innerWidth - 1380)/(-1.68) + 'px';
        }
      }

      //tamanhos de tela ::::::::::::::::::::::::::::::::::

      let carouselHeight = 0;
      if(window.innerWidth <= 600) {
        carouselHeight = 280;
      } else if(window.innerWidth <= 800) {
        carouselHeight = 380;
      } else if(window.innerWidth <= 960) {
        carouselHeight = 480;
      }

      let styles = `
        #carousel-section .v-parallax__image{
          padding-bottom: ${ getPaddingByWidth() } !important;
        }
      `;

      let mobileStyles = `
        #carousel-section .v-carousel{
          height: ${carouselHeight}px !important;
        }
      `;

      let styleSheet = document.createElement("style")

      if(window.innerWidth <= 960) {
        styleSheet.innerText = styles + mobileStyles
      } else{
        styleSheet.innerText = styles
      }

      document.head.appendChild(styleSheet)
    },
  },
  mounted: function(){
    this.correctParallax()
  },
}
</script>
