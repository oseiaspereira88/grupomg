<template>
  <div>
    <MobileReliability :pages="pages" v-if="isMobile"/>
    <Reliability :pages="pages" v-else/>
  </div>
</template>

<script>

import Reliability from "@/components/secondary/principal/Reliability.vue";
import MobileReliability from "@/components/secondary/mobile/ReliabilityMobile.vue";

export default {
  name: "ResponsiveReliability",
  components: {
    Reliability,
    MobileReliability
  },
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMobile: false
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