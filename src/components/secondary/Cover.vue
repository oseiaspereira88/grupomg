<template>
  <v-container id="cover-section" class="section">
    <v-img id="img_cover" :src="image_src"></v-img>
  </v-container>
</template>

<script>
export default {
  name: "Cover",
  props: {
    image_src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
#cover-section {
  background: #FFFFFF;
  height: 90vh;
}
#img_cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>