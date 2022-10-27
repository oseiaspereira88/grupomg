<template>
  <v-container class="section pb-12" style="background: #ffffff">
    <v-row class="pt-10 pb-0" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">CONFIABILIDADE</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>

    <v-row style="height: 400px">

      <!-- coluna dos texto de informação -->
      <v-col style="background: #ffffff">
        <v-row align="center" no-gutters>
          <v-col cols="12" md="8" class="text-right">
            <div class="pb-6">
              <h2 class="mt-6" style="font-size: 20pt">
                <span class="text-center pl-1 " style="font-size: 24pt">30</span>
                Anos no mercado.
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="8" class="text-right">
            <div class="py-6">
              <h2 class="mt-6" style="font-size: 20pt">
                <span class="text-center pl-1 " style="font-size: 24pt">30</span>
                Anos no mercado.
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="text-right">
            <div class="py-6">
              <h2 class="mt-6" style="font-size: 20pt">
                <span class="text-center pl-1 " style="font-size: 24pt">30</span>
                Anos no mercado.
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="4"></v-col>
        </v-row>
      </v-col>

      <!-- coluna das imagens -->
      <v-col class="pt-4 mt-2" style="background: #ffffff;">
        <v-row class="px-12 pl-16">
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img class="rounded-circle ml-6" height="120" width="120"
                   :src="require('@/assets/img/mga/mgaPersona1.png')"></v-img>
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="12" class="d-flex pt-2">
            <div>
              <v-img class="rounded-circle ml-6" height="140" width="140"
                     :src="require('@/assets/img/mga/mgaPersona1.png')"></v-img>
            </div>
            <div>
              <v-img class="rounded-circle mt-10 ml-16" height="180" width="180"
                     :src="require('@/assets/img/mga/mgaPersona.png')"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Reliability"
}
</script>

<style scoped>

</style>