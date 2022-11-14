<template>
  <!--  v-if="!isMobile"-->
  <div class="home" style="overflow-y: hidden !important;">
    <Navbar
        :itens="nav_itens"
        :nav_image_src="require('@/assets/img/logos/mgp_logo.png')"
        :scroll-to-top="scrollToTop"
        nav_bg_color="#117263"
    />
    <VueBotUI/>
    <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="100vh"
        style="overflow-x: hidden;">
      <Cover :image_src="require('@/assets/img/cover/mgp_cover.png')"/>
      <Partners/>
      <Services :services="services"/>
      <About
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
          email="contato_mgp@gmail.com"
          phone="84 99943-1006"
          :video_src="require('@/assets/video/mga-info-video.mp4')"
      />
      <Footer
          :logo_src="require('@/assets/img/logos/mgp_logo.png')"
          bussiness_name="MGP Ambientes Planejados"
          bussiness_cnpj="CNPJ: 22.222.222/2222-22"
          facebook_link="https://www.facebook.com/mgatecnologia"
          instagram_link="https://www.instagram.com/mgatecnologia/"
          email_link="emailto:contato_mgp@gmail.com"
      />
    </v-sheet>
  </div>
</template>

<script>

import Navbar from "@/components/secondary/Navbar";
import Cover from "@/components/secondary/Cover";
import Partners from "@/components/secondary/Partners";
import Services from "@/components/secondary/Services";
import About from "@/components/secondary/About";
import Portfolio from "@/components/secondary/Portfolio";
import Solicitation from "@/components/secondary/Solicitation";
import Reliability from "@/components/secondary/Reliability";
import Clients from "@/components/secondary/Clients";
import Information from "@/components/secondary/Information";
import Footer from "@/components/secondary/Footer";
import {VueBotUI} from 'vue-bot-ui'

export default {
  name: 'MgpPage',
  components: {
    Navbar,
    Cover,
    Partners,
    Services,
    About,
    Portfolio,
    Solicitation,
    Reliability,
    Clients,
    Information,
    Footer,
    VueBotUI
  },
  data: () => {
    return {
      nav_itens: [
        {title: 'Início', link: 'home'},
        {title: 'Serviços', link: 'servicos'},
        {title: 'Quem Somos', link: 'quem-somos'},
        {title: 'Contatos', link: 'contatos'},
        {title: 'Grupo MG', link: '/'},
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
          src: require('@/assets/img/cards/card_agility.png'),
          show: false,
          id: 6
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgp.png'),
          show: false,
          id: 7
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgs.png'),
          show: false,
          id: 8
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mga.png'),
          show: false,
          id: 9
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_agility.png'),
          show: false,
          id: 10
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgp.png'),
          show: false,
          id: 11
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgs.png'),
          show: false,
          id: 12
        },
        {
          title: 'Piso Vinílico',
          subtitle: '49 opções disponíveis',
          description: 'Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.',
          src: require('@/assets/img/cards/card_mgs.png'),
          show: false,
          id: 13
        },
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
    scrollToTop() {
      alert('scrollToTop');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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