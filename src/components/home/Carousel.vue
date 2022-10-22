<template>
  <v-container id="home-section" class="section">
    <v-carousel
        class="pb-4"
        height="80vh"
        hide-delimiter-background
        show-arrows-on-hover cycle>

      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item">
        <v-parallax :src="item" height="600" :class="'parallax_item_' + i"></v-parallax>
      </v-carousel-item>
    </v-carousel>
    <div class="pt-1" style="background: #0a948f"></div>
  </v-container>
</template>

<style>
#home-section {
  height: auto;
}
.v-parallax__image {
  width: 100vw !important;
  visibility: hidden;
}
</style>

<script>

export default {
  name: 'Carousel',
  components: {},
  data() {
    return {
      items: [
        require('@/assets/img/slides/grupomg.png'),
        require('@/assets/img/slides/pre_moldados.png'),
        require('@/assets/img/slides/ambientes.png'),
        require('@/assets/img/slides/agility.png'),
        require('@/assets/img/slides/segurança.png'),
      ],
      slide_titles: [
        'Grupo MG',
        'MG Pre-Moldados e Construções',
        'MG Ambientes Planejados',
        'Agility',
        'MGS Segurança',
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
    this.correctParallax()

    for(let image of document.getElementsByClassName('v-parallax__image')){
      image.style.visibility = 'visible';
    }
  },
}
</script>
