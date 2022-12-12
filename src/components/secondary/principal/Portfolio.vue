<template>
  <v-container class="section pt-sm-12 pt-4">
    <v-row class="py-10" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">PORTIFÓLIOS</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>
    <div class="px-0">
      <v-slide-group
          show-arrows
      >
        <v-slide-item v-for="(work, i) in works" :key="i">

          <v-card :id="'work'+work.id" :color="'#F1F1F1'"
                  class="mx-4"
                  style="height: min-content"
                  width="240"
                  elevation="0">

            <v-img
                :src="work.src"
                class="white--text align-end"
                gradient="180deg, rgba(0,0,0,.1), rgba(0,0,0,.9)"
                height="240"
                style="filter: brightness(1.8)"
            >
            </v-img>

          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  <div class="py-12"></div>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    works: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

</style>