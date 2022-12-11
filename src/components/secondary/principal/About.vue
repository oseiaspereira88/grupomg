<template>
  <v-container id="quem-somos" class="section" style="background: #F1F1F1">
    <v-row>
      <v-col cols="12" md="7">
        <div class="text-center pt-6">
          <strong style="font-size: 1.5rem; color: #0a948f">Quem Somos</strong>
        </div>
        <p class="text-left px-8 px-sm-16 pt-4 text-justify">
          {{text}}
        </p>
      </v-col>
      <v-col
          v-if="!isMobile"
          cols="12" md="5"
          style="padding: 0"
      >
        <v-img height="300" :src="image_src"/>
      </v-col>
      <v-col
          v-else
          class="px-12 pb-12"
          cols="12"
          md="5"
          style="padding: 0"
      >
        <video
            width="100%" height="100%"
            class="rounded-lg"
            style="box-shadow: #d5d5d5 0px 0px 2px 1px"
            controls
        >
          <source :src="video_src" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  props: {
    text: {
      type: String,
      required: true
    },
    image_src: {
      type: String,
      required: true
    },
    video_src: {
      type: String,
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

<style scoped>

</style>