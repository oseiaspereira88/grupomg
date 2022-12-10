<template>
  <div>
    <Footer
        v-if="!isMobile"
        :logo_src="logo_src"
        :business_name="business_name"
        :business_cnpj="business_cnpj"
        :email_link="email_link"
        :instagram_link="instagram_link"
        :whatsapp_link="whatsapp_link"
    />
    <FooterMobile
        v-if="isMobile"
        :logo_src="logo_src"
        :business_name="business_name"
        :business_cnpj="business_cnpj"
        :email_link="email_link"
        :instagram_link="instagram_link"
        :whatsapp_link="whatsapp_link"
    />
  </div>
</template>

<script>

import Footer from "@/components/general/Footer";
import FooterMobile from "@/components/general/FooterMobile";

export default {
  name: "ResponsiveFooter",
  components: {
    Footer,
    FooterMobile
  },
  data() {
    return {
      isMobile: false
    };
  },
  props: {
    logo_src: {
      type: String,
      required: true
    },
    business_name: {
      type: String,
      required: true
    },
    business_cnpj: {
      type: String,
      required: true
    },
    instagram_link: {
      type: String,
      required: true
    },
    email_link: {
      type: String,
      required: true
    },
    whatsapp_link: {
      type: String,
      required: true
    }
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 998;
      return this.isMobile;
    },
  },
  created() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
}
</script>