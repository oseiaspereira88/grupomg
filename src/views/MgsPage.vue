<template>
  <div class="home">
    <Navbar
        :items="nav_itens"
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

      <ResponsiveReliability :pages="reliability_pages"/>

      <Clients :clients="clients"/>

      <Information
          address="Rua João Pessoa, 1000, Centro, Mossoró/RN"
          email="contato_mgs@gmail.com"
          phone="84 99943-1006"
          :video_src="require('@/assets/video/mga-info-video.mp4')"
      />
      
      <ResponsiveFooter
          :is_secondary_page="true"
          :logo_src="require('@/assets/img/logos/mgs_logo.png')"
          business_name="MGS Segurança Ltda."
          business_cnpj="33.333.333/3333-33"
          email_link="mailto:mgs.oficial@gmail.com?subject=Contato%20de%20Cliente%20via%20Website"
          instagram_link="https://instagram.com/_u/mgs_seguranca/"
          whatsapp_link="https://api.whatsapp.com/send?phone=84996212299"/>

    </v-sheet>
  </div>
</template>

<script>

import Navbar from "@/components/secondary/principal/Navbar.vue";
import Cover from "@/components/secondary/principal/Cover.vue";
import Partners from "@/components/secondary/principal/Partners.vue";
import About from "@/components/secondary/principal/About.vue";
import Portfolio from "@/components/secondary/principal/Portfolio.vue";
import Solicitation from "@/components/secondary/principal/Solicitation.vue";
import Clients from "@/components/secondary/principal/Clients.vue";
import ResponsiveReliability from "@/components/secondary/reponsive/ResponsiveReliability.vue";
import Information from "@/components/secondary/principal/Information.vue";
import ResponsiveFooter from "@/components/general/ResponsiveFooter.vue";
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
    Clients,
    ResponsiveReliability,
    Information,
    ResponsiveFooter,
    VueBotUI,
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
        {srcImage: require('@/assets/img/logos/mg_min_logo.png')},
        {srcImage: require('@/assets/img/cards/card_mga.png')},
        {srcImage: require('@/assets/img/cards/card_mgp.png')},
        {srcImage: require('@/assets/img/cards/card_mgs.png')},
      ],
      reliability_pages: [
        {
          id: 0,
          title: "Nosso compromisso",
          srcImage: require('@/assets/img/portifolio/mga/portifolio-07.jpg'),
          text: "Nos comprometemos a entregar o melhor serviço para nossos clientes, com a melhor qualidade e preço do mercado."
        },
        {
          id: 1,
          title: "Nossa missão",
          srcImage: require('@/assets/img/portifolio/mga/portifolio-08.jpg'),
          text:
              "Nossa missão é oferecer soluções de " +
              "tecnologia da informação que atendam às " +
              "necessidades de nossos clientes, " +
              "com qualidade, agilidade e segurança, " +
              "alcançando a satisfação de nossos clientes " +
              "e colaboradores."
        },
        {
          id: 2,
          title: "Nossa visão",
          srcImage: require('@/assets/img/portifolio/mga/portifolio-09.jpg'),
          text:
              "Ser uma empresa de tecnologia da informação " +
              "referência no mercado, reconhecida pela " +
              "qualidade de seus serviços, pela " +
              "satisfação de seus clientes e pela " +
              "qualidade de vida de seus colaboradores."
        },
        {
          id: 3,
          title: "Nossos valores",
          srcImage: require('@/assets/img/portifolio/mga/portifolio-10.jpg'),
          text:
              "Ética, Comprometimento, Qualidade, " +
              "Inovação, Agilidade, Transparência, " +
              "Responsabilidade Social e Sustentabilidade."
        }
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