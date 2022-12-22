<template>
  <div class="home">
    <Navbar
        :items="nav_itens"
        :nav_image_src="require('@/assets/img/logos/mga_logo.png')"
        nav_bg_color="#117263"
    />
    <VueBotUI/>
    <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="100vh"
        style="overflow-x: hidden;"
    >
      <Cover :image_src="require('@/assets/img/cover/mga_cover.png')"/>

      <Services :services="services"/>

      <About
          text="Nossa empresa é especializada em soluções de tecnologia da informação,
                com foco em desenvolvimento de sistemas web e mobile, consultoria e treinamentos.
                Nossa missão é entregar soluções de tecnologia da informação que atendam as
                necessidades de nossos clientes, com foco em qualidade, agilidade
                e custo-benefício."

          :image_src="require('@/assets/img/mgp/mgp-2.png')"
          :video_src="require('@/assets/video/mga-info-video.mp4')"
      />

      <Portfolio :works="works"/>

      <Solicitation whatsapp_number="84994310065"/>

      <Reliability v-if="!isMobile"/>

      <Reliability v-if="isMobile"/>

      <Clients :clients="clients"/>

      <Information
          email="contato_mga@gmail.com"
          phone="84 99943-1006"
          :video_src="require('@/assets/video/mga-info-video.mp4')"
      />

      <ResponsiveFooter
          :is_secondary_page="true"
          :logo_src="require('@/assets/img/logos/mga_logo.png')"
          business_name="MGA Ambientes Planejados"
          business_cnpj="00.000.000/0000-00"
          email_link="mailto:mga.oficial@gmail.com?subject=Contato%20de%20Cliente%20via%20Website"
          instagram_link="https://instagram.com/_u/mga_ambientes/"
          whatsapp_link="https://api.whatsapp.com/send?phone=84996212299"
      />
    </v-sheet>
  </div>
</template>

<script>

import Navbar from "@/components/secondary/principal/Navbar.vue";
import Cover from "@/components/secondary/principal/Cover.vue";
import Services from "@/components/secondary/principal/Services.vue";
import About from "@/components/secondary/principal/About.vue";
import Portfolio from "@/components/secondary/principal/Portfolio.vue";
import Solicitation from "@/components/secondary/principal/Solicitation.vue";
import Reliability from "@/components/secondary/principal/Reliability.vue";
import Clients from "@/components/secondary/principal/Clients.vue";
import Information from "@/components/secondary/principal/Information.vue";
import ResponsiveFooter from "@/components/general/ResponsiveFooter.vue";
import { VueBotUI } from 'vue-bot-ui'

export default {
  name: 'MgaPage',
  components: {
    ResponsiveFooter,
    Navbar,
    Cover,
    Services,
    About,
    Portfolio,
    Solicitation,
    Reliability,
    Clients,
    Information,
    VueBotUI
  },
  data: () => {
    return {
      nav_itens: [
        {
          title: 'Início',
          link: '#home',
          icon: 'mdi-home'
        },
        {
          title: 'Serviços',
          link: '#servicos',
          icon: 'mdi-cogs'
        },
        {title: 'Quem Somos',
          link: '#quem-somos',
          icon: 'mdi-account-group'
        },
        {
          title: 'Contatos',
          link: '#contatos',
          icon: 'mdi-whatsapp'
        },
        {
          title: 'Grupo MG',
          link: '/',
          icon: 'mdi-open-in-new'
        }
      ],
      services: [
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mga.png'),
          show: false,
          id: 1
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_agility.png'),
          show: false,
          id: 2
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgp.png'),
          show: false,
          id: 3
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgs.png'),
          show: false,
          id: 4
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mga.png'),
          show: false,
          id: 5
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgp.png'),
          show: false,
          id: 7
        },
      ],
      works: [
        {src: require('@/assets/img/portifolio/mga/portifolio-01.jpg'), id: 1},
        {src: require('@/assets/img/portifolio/mga/portifolio-02.jpg'), id: 2},
        {src: require('@/assets/img/portifolio/mga/portifolio-03.jpg'), id: 3},
        {src: require('@/assets/img/portifolio/mga/portifolio-04.jpg'), id: 4},
        {src: require('@/assets/img/portifolio/mga/portifolio-05.jpg'), id: 5},
        {src: require('@/assets/img/portifolio/mga/portifolio-06.jpg'), id: 6},
        {src: require('@/assets/img/portifolio/mga/portifolio-07.jpg'), id: 7},
        {src: require('@/assets/img/portifolio/mga/portifolio-08.jpg'), id: 8},
        {src: require('@/assets/img/portifolio/mga/portifolio-09.jpg'), id: 9},
        {src: require('@/assets/img/portifolio/mga/portifolio-10.jpg'), id: 10},
        {src: require('@/assets/img/portifolio/mga/portifolio-11.jpg'), id: 11},
      ],
      clients: [
        {srcImage: require('@/assets/img/logos/mg_min_logo.png')},
        {srcImage: require('@/assets/img/cards/card_mga.png')},
        {srcImage: require('@/assets/img/cards/card_mgp.png')},
        {srcImage: require('@/assets/img/cards/card_mgs.png')},
      ],
      isMobile: true,
      showNav: false,
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>

