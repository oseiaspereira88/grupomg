<template>
<!--  v-if="!isMobile"-->
  <div class="home">
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
<!--  <div v-else>-->
<!--    <NavbarMobile/>-->
<!--    <CoverMobile/>-->
<!--    <PartnersMobile/>-->
<!--    <ServicesMobile/>-->
<!--    <AboutMobile/>-->
<!--    <PortfolioMobile/>-->
<!--    <SolicitationMobile/>-->
<!--    <ReliabilityMobile/>-->
<!--    <ClientsMobile/>-->
<!--    <InformationMobile/>-->
<!--    <FooterMobile/>-->
<!--  </div>-->
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

export default {
  name: 'MgaPage',
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

