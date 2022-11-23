<template>
  <v-container
      id="carousel-section"
      class="section" style="background: #F1F1F1"
  >
    <v-carousel
        class="pb-4"
        hide-delimiter-background
        show-arrows-on-hover
        cycle>

      <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
      >
        <v-parallax :src="image" height="600" :class="'parallax_item_' + i"/>
      </v-carousel-item>

    </v-carousel>
    <div style="background: #0a948f;"></div>
  </v-container>
</template>

<style>
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
          return (window.innerWidth - 1380)/(-1.56) + 'px';
        } else {
          return (window.innerWidth - 1380)/(-1.56) + 'px';
        }
      }

      //tamanhos de tela ::::::::::::::::::::::::::::::::::

      let carouselHeight = 0;
      if(window.innerWidth <= 600) {
        carouselHeight = 254;
      } else if(window.innerWidth <= 700) {
        carouselHeight = 360;
      } else if(window.innerWidth <= 800) {
        carouselHeight = 400;
      } else if(window.innerWidth <= 960) {
        carouselHeight = 420;
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
