<template>
  <div class="home" v-if="!isMobile">
    <Navbar/>
    <Cover/>
    <Partners/>
    <Services/>
    <About/>
    <Portfolio/>
    <Solicitation/>
    <Reliability/>
    <Clients/>
    <Information/>
    <Footer/>
  </div>
  <div v-else>
    <NavbarMobile/>
    <CoverMobile/>
    <PartnersMobile/>
    <ServicesMobile/>
    <AboutMobile/>
    <PortfolioMobile/>
    <SolicitationMobile/>
    <ReliabilityMobile/>
    <ClientsMobile/>
    <InformationMobile/>
    <FooterMobile/>
  </div>
</template>

<script>

import Navbar from "@/components/secundary/Navbar";
import Cover from "@/components/secundary/Cover";
import Partners from "@/components/secundary/Partners";
import Services from "@/components/secundary/Services";
import About from "@/components/secundary/About";
import Portfolio from "@/components/secundary/Portfolio";
import Solicitation from "@/components/secundary/Solicitation";
import Reliability from "@/components/secundary/Reliability";
import Clients from "@/components/secundary/Clients";
import Information from "@/components/secundary/Information";
import Footer from "@/components/secundary/Footer";
import NavbarMobile from "@/components/secundary/mobile/NavbarMobile";
import CoverMobile from "@/components/secundary/mobile/CoverMobile";
import PartnersMobile from "@/components/secundary/mobile/PartnersMobile";
import ServicesMobile from "@/components/secundary/mobile/ServicesMobile";
import AboutMobile from "@/components/secundary/mobile/AboutMobile";
import PortfolioMobile from "@/components/secundary/mobile/PortfolioMobile";
import SolicitationMobile from "@/components/secundary/mobile/SolicitationMobile";
import ReliabilityMobile from "@/components/secundary/mobile/ReliabilityMobile";
import ClientsMobile from "@/components/secundary/mobile/ClientsMobile";
import InformationMobile from "@/components/secundary/mobile/InformationMobile";
import FooterMobile from "@/components/secundary/mobile/FooterMobile";

export default {
  name: 'AmbientesPage',
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
    NavbarMobile,
    CoverMobile,
    PartnersMobile,
    ServicesMobile,
    AboutMobile,
    PortfolioMobile,
    SolicitationMobile,
    ReliabilityMobile,
    ClientsMobile,
    InformationMobile,
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

