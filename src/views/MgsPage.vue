<template>
  <div class="home">
    <Navbar
        :itens="nav_itens"
        :nav_image_src="require('@/assets/img/logos/mgs_logo.png')"
        nav_bg_color="#117263"
    />
    <VueBotUI/>
    <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="100vh"
        style="overflow-x: hidden;">

      <Cover :image_src="require('@/assets/img/cover/mgs_cover.png')"/>
      <Partners/>
      <About class="mt-4"
             text="Nossa empresa é especializada em soluções de tecnologia da informação,
        com foco em desenvolvimento de sistemas web e mobile, consultoria e treinamentos.
        Nossa equipe é formada por profissionais com mais de 10 anos de experiência em
        desenvolvimento de software, com foco em soluções de alta performance e
        escalabilidade. Nossa missão é entregar soluções de tecnologia da informação
        que atendam as necessidades de nossos clientes, com foco em qualidade, agilidade
        e custo-benefício."

             :image_src="require('@/assets/img/mgp/mgp-2.png')"
      />
      <Portfolio :works="works"/>
      <Solicitation whatsapp_number="84994310065"/>
      <Reliability/>
      <Clients :clients="clients"/>
      <Information
          address="Rua João Pessoa, 1000, Centro, Mossoró/RN"
          email="contato_mgs@gmail.com"
          phone="84 99943-1006"
          :video_src="require('@/assets/video/mga-info-video.mp4')"
      />
      <Footer
          :logo_src="require('@/assets/img/logos/mgs_logo.png')"
          bussiness_name="MGA Ambientes Planejados"
          bussiness_cnpj="33.333.333/3333-33"
          facebook_link="#"
          instagram_link="https://www.instagram.com/mgs/"
          email_link="emailto:contato_mgs@gmail.com"
      />

    </v-sheet>
  </div>
</template>

<script>

import Navbar from "@/components/secondary/Navbar";
import Cover from "@/components/secondary/Cover";
import Partners from "@/components/secondary/Partners";
import About from "@/components/secondary/About";
import Portfolio from "@/components/secondary/Portfolio";
import Solicitation from "@/components/secondary/Solicitation";
import Reliability from "@/components/secondary/Reliability";
import Clients from "@/components/secondary/Clients";
import Information from "@/components/secondary/Information";
import Footer from "@/components/secondary/Footer";
import { VueBotUI } from 'vue-bot-ui'

export default {
  name: 'MgsPage',
  components: {
    Navbar,
    Cover,
    Partners,
    About,
    Portfolio,
    Solicitation,
    Reliability,
    Clients,
    Information,
    Footer,
    VueBotUI,
  },
  data: () => {
    return {
      nav_itens: [
        {title: 'Início', link: '#home'},
        {title: 'Quem Somos', link: '#quem-somos'},
        {title: 'Contatos', link: '#contatos'},
        {title: 'Grupo MG', link: '/'},
      ],
      works: [
        {src: require('@/assets/img/cover.jpg'), id: 1},
        {src: require('@/assets/img/cover.jpg'), id: 2},
        {src: require('@/assets/img/cover.jpg'), id: 3},
        {src: require('@/assets/img/cover.jpg'), id: 4},
        {src: require('@/assets/img/cover.jpg'), id: 5},
        {src: require('@/assets/img/cover.jpg'), id: 6},
        {src: require('@/assets/img/cover.jpg'), id: 7},
      ],
      clients: [
        {srcImage: require('@/assets/img/logos/mg_logo.png')},
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