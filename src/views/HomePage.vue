<template>
  <div class="home" v-if="!isMobile">
    <Slide/>
    <Business/>
    <Clients/>
    <Footer/>
  </div>
  <div v-else>
    <SlideMobile/>
    <BusinessMobile/>
    <ClientsMobile/>
    <FooterMobile/>
  </div>
</template>

<style lang="scss">
.section {
  max-width: 100vw;
  height: 110vh;
  padding: 0 !important;
}
</style>

<script>

import Slide from '@/components/home/Slide.vue'
import Business from '@/components/home/Business.vue'
import Clients from '@/components/home/Clients.vue'
import Footer from '@/components/home/Footer.vue'
import SlideMobile from '@/components/home/mobile/SlideMobile.vue'
import BusinessMobile from '@/components/home/mobile/BusinessMobile.vue'
import ClientsMobile from '@/components/home/mobile/ClientsMobile.vue'
import FooterMobile from '@/components/home/mobile/FooterMobile.vue'

export default {
  name: 'HomeView',
  components: {
    Slide,
    Business,
    Clients,
    Footer,
    SlideMobile,
    BusinessMobile,
    ClientsMobile,
    FooterMobile,
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
