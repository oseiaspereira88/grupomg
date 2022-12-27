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
        class="mx-auto mt-6 mb-6 py-6"
        style="width: 60%; height: 380px"
        color="#0a948f"
        elevation="0"
    >
      <div
          style="width: 70%; height: 100%; position: relative; left: 15%; top: 0; padding-right: 14%;"
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
          <div class="py-4" style="height: 15%;">
            <v-pagination
                :length="3"
                @input="onPageChange"
                :value="currentPageId"
                circle
            />
          </div>
        </div>
      </div>
      <v-card
          class="green float-end"
          style="width: 40%; height: 100%; right: -15%; top: -100%"
          elevation="0"
      >
        <img
            :src="pages[currentPageId].srcImage"
            style="object-fit: cover;"
            height="100%"
            width="100%"
        />
      </v-card>

    </v-card>

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
      currentPageId: 1,
    };
  },
  methods: {
    onPageChange(newPage) {
      this.currentPageId = newPage;
    },
  },
  watch: {
    "pagination.page": (newPage) => {
      this.onPageChange(newPage);
    },
  },
}
</script>