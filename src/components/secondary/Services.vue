<template>
  <v-container
      id="servicos"
      class="section pt-1"
      fluid>
    <v-row class="py-10" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">SERVIÇOS</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>

    <div class="px-0">
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item v-for="(service, i) in services" :key="i">

          <v-card :id="'sevice'+service.id" :color="'#F1F1F1'"
              class="mx-4"
              style="height: min-content"
              width="240"
              elevation="0"
          >
            <v-img height="100" :src="service.src"></v-img>
            <v-card-title>Piso vinílico</v-card-title>
            <v-card-subtitle>49 opções disponíveis</v-card-subtitle>

            <v-card-actions>
              <v-btn disabled color="orange lighten-2" style="color: orange !important;" text>
                Saiba mais
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="serviceToggle(service)">
                <v-icon>{{ service.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div :id="'description'+service.id" v-show="service.show">
                <v-divider></v-divider>

                <v-card-text>
                  Temos uma variedade de pisos vinílicos, prontos para serem instalados. Nossos parceiros de longo prazo têm todas as ferramentas necessárias para realizar a instalação em seu local.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
    <div class="py-12"></div>
  </v-container>
</template>

<script>

export default {
  name: "Services",
  data: () => ({
    services: [
      {src: require('@/assets/img/cards/card_mga.png'), show: false, id: 1},
      {src: require('@/assets/img/cards/card_agility.png'), show: false, id: 2},
      {src: require('@/assets/img/cards/card_mgp.png'), show: false, id: 3},
      {src: require('@/assets/img/cards/card_mgs.png'), show: false, id: 4},
      {src: require('@/assets/img/cards/card_mga.png'), show: false, id: 5},
      {src: require('@/assets/img/cards/card_agility.png'), show: false, id: 6},
      {src: require('@/assets/img/cards/card_mgp.png'), show: false, id: 7},
      {src: require('@/assets/img/cards/card_mgs.png'), show: false, id: 8},
      {src: require('@/assets/img/cards/card_mga.png'), show: false, id: 9},
      {src: require('@/assets/img/cards/card_agility.png'), show: false, id: 10},
      {src: require('@/assets/img/cards/card_mgp.png'), show: false, id: 11},
      {src: require('@/assets/img/cards/card_mgs.png'), show: false, id: 12},
      {src: require('@/assets/img/cards/card_mgs.png'), show: false, id: 13},
    ],
  }),
  methods: {
    serviceToggle(s) {
      if (s.show) {
        s.show = false
      } else {
        this.services.forEach(service => {
          service.show = false
        })
        s.show = true
        location.href = "#description" + s.id
      }
    },
  }
}
</script>

<style scoped>

</style>