<template>
  <div class="home" style="overflow-y: hidden !important;">
    <Carousel :images="carousel_images"/>
    <VueBotUI/>
    <Business/>
    <Clients :clients="clients"/>
    <ResponsiveFooter
        business_name="Grupo MG Ltda."
        business_cnpj="00.000.000/0001-00"
        :logo_src="require('@/assets/img/logos/mg_white_min_logo.png')"
        email_link="mailto:grupomg@gmail.com?subject=Contato%20de%20Cliente%20via%20Website"
        instagram_link="https://instagram.com/_u/grupomg/"
        whatsapp_link="https://api.whatsapp.com/send?phone=84996212299"
    />
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
import ResponsiveFooter from "@/components/general/ResponsiveFooter.vue";
import {VueBotUI} from 'vue-bot-ui'

export default {
  name: 'MgPage',
  components: {
    Carousel,
    Business,
    Clients,
    ResponsiveFooter,
    VueBotUI,
  },
  data: () => {
    return {
      showNav: false,
      clients: [
        {image_src: require('@/assets/img/logos/mg_min_logo.png')},
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
}
</script>
