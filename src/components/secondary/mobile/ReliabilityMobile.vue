<template>
  <v-container
      class="section pt-6"
      style="background: #ffffff; overflow: hidden; height: 640px"
  >

    <v-row class="pt-16 pb-0" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">CONFIABILIDADE</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>
    <br>
    <v-card
        class="mx-auto mt-6 mb-6"
        style="width: 90%; height: 310px"
        color="#0a948f"
        elevation="0"
    >
      <div
          style="width: 90%; height: 100%; position: relative; left: 15%; top: 0; padding-right: 14%;"
          class="py-6"
      >
        <div style="height: 100%;">
          <div class="pt-8" style="height: 85%;">
            <h2 style="color: #ffffff">
              {{ pages[currentPageId].title }}
            </h2>
            <p class="text-justify pr-6" style="color: #ffffff">
              {{ pages[currentPageId].text }}
            </p>
          </div>
        </div>
      </div>
    </v-card>
    <v-pagination
        :length="3"
        @input="onPageChange"
        :value="currentPageId"
        circle
    />
  </v-container>
</template>

<script>
export default {
  name: "Reliability",
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMobile: false,
      currentPageId: 1,
    };
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
    onPageChange(newPage) {
      this.currentPageId = newPage;
    },
  },
  watch: {
    "pagination.page": (newPage) => {
      this.onPageChange(newPage);
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>