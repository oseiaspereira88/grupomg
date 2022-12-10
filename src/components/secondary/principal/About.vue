<template>
  <v-container id="quem-somos" class="section" style="background: #F1F1F1">
    <v-row>
      <v-col cols="12" md="7">
        <div class="text-center pt-6">
          <strong style="font-size: 1.5rem; color: #0a948f">Quem Somos</strong>
        </div>
        <p class="text-left pl-16 pr-16 pt-4 text-justify">
          {{text}}
        </p>
      </v-col>
      <v-col cols="12" md="5" style="padding: 0">
        <v-img height="300" :src="image_src"/>
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
    }
  },
}
</script>

<style scoped>

</style>