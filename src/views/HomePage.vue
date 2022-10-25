<template>
  <div class="home" >
    <Carousel/>
    <VueBotUI/>
    <Business/>
    <Clients/>
    <Footer/>
  </div>
<!--  <div v-else>-->
<!--    <Carousel/>-->
<!--    <Business/>-->
<!--    <ClientsMobile/>-->
<!--    <FooterMobile/>-->
<!--  </div>-->
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
  name: 'HomePage',
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
      showNav: false
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>
