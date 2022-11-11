<template>
  <v-container id="home-section" class="section">
    <v-carousel
        class="pb-4"
        height="80vh"
        hide-delimiter-background
        show-arrows-on-hover>

      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-parallax :src="require('@/assets/img/cover/mg_cover.png')" height="600" :class="'parallax_item_' + i"></v-parallax>
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
  /*visibility: hidden;*/
}
</style>

<script>

export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        { src: require('@/assets/img/cover/mg_cover.png') },
        { src: require('@/assets/img/cover/mgp_cover.png') },
        { src: require('@/assets/img/cover/mga_cover.png') },
        { src: require('@/assets/img/cover/mgs_cover.png') },
        { src: require('@/assets/img/cover/agility_cover.png') },
      ],
    }
  },
  created() {
    window.addEventListener("resize", this.correctParallax);
  },
  destroyed() {
    window.removeEventListener("resize", this.correctParallax);
  },
  methods: {
    correctParallax() {
      let parallax_images = document.getElementsByClassName('v-parallax__image');

      function getPaddingByWidth() {
        return (window.innerWidth - 1380)/(-1.68) + 'px';
      }

      let padding = getPaddingByWidth();
      for (let i = 0; i < parallax_images.length; i++) {
        parallax_images[i].style.paddingBottom = padding;
      }

      console.log(padding);
    },
  },
  mounted:function(){
    //this.correctParallax()

    // for(let image of document.getElementsByClassName('v-parallax__image')){
    //   image.style.visibility = 'visible';
    // }
  },
}
</script>
