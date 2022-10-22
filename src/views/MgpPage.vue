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
import NavbarMobile from "@/components/secondary/mobile/NavbarMobile";
import CoverMobile from "@/components/secondary/mobile/CoverMobile";
import PartnersMobile from "@/components/secondary/mobile/PartnersMobile";
import ServicesMobile from "@/components/secondary/mobile/ServicesMobile";
import AboutMobile from "@/components/secondary/mobile/AboutMobile";
import PortfolioMobile from "@/components/secondary/mobile/PortfolioMobile";
import SolicitationMobile from "@/components/secondary/mobile/SolicitationMobile";
import ReliabilityMobile from "@/components/secondary/mobile/ReliabilityMobile";
import ClientsMobile from "@/components/secondary/mobile/ClientsMobile";
import InformationMobile from "@/components/secondary/mobile/InformationMobile";
import FooterMobile from "@/components/secondary/mobile/FooterMobile";

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