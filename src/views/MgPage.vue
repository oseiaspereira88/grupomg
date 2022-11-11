<template>
  <div class="home" style="overflow-y: hidden !important;">
    <Carousel/>
    <VueBotUI/>
    <Business/>
    <Clients :clients="clients"/>
    <Footer/>
  </div>
</template>

<style lang="scss">
.section {
  max-width: 100vw;
  padding: 0 !important;
}
</style>

<script>

import Carousel from '@/components/home/Carousel.vue'
import Business from '@/components/home/Business.vue'
import Clients from '@/components/home/Clients.vue'
import Footer from '@/components/home/Footer.vue'
import { VueBotUI } from 'vue-bot-ui'

export default {
  name: 'MgPage',
  components: {
    Carousel,
    Business,
    Clients,
    Footer,
    VueBotUI,
  },
  data: () => {
    return {
      isMobile: true,
      showNav: false,
      clients: [
        {image_src: require('@/assets/img/logos/mg_logo.png')},
        {image_src: require('@/assets/img/cards/card_mga.png')},
        {image_src: require('@/assets/img/cards/card_mgp.png')},
        {image_src: require('@/assets/img/cards/card_mgs.png')},
      ],
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
  },
  mounted() {
    window.scrollTo()
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>
