<template>
  <div class="home" style="overflow-y: hidden !important;">
    <Carousel :images="carousel_images"/>
    <VueBotUI/>
    <Business/>
    <Clients :clients="clients"/>
    <Footer v-if="!isMobile"/>
    <FooterMobile v-if="isMobile"/>
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
import FooterMobile from '@/components/home/mobile/FooterMobile'
import { VueBotUI } from 'vue-bot-ui'

export default {
  name: 'MgPage',
  components: {
    Carousel,
    Business,
    Clients,
    Footer,
    FooterMobile,
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
      carousel_images: [
        require('@/assets/img/cover/mg_cover.png'),
        require('@/assets/img/cover/mgp_cover.png'),
        require('@/assets/img/cover/mga_cover.png'),
        require('@/assets/img/cover/mgs_cover.png'),
        require('@/assets/img/cover/agility_cover.png'),
      ],
    }
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 998;
      return this.isMobile;
    },
  },
  mounted() {
    window.scrollTo()
  },
  created() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
}
</script>
