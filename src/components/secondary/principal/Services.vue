<template>
  <v-container
      id="servicesContainer"
      class="section pt-1 pb-sm-8"
      fluid>
    <v-row class="pt-10 pb-sm-10 pb-0" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">SERVIÇOS</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>

    <div class="px-0" v-if="!isMobile">
      <v-slide-group show-arrows>
        <v-slide-item v-for="(service, i) in services" :key="i">
          <v-card :id="'service'+service.id" :color="'#F1F1F1'"
                  class="mx-4"
                  style="height: min-content"
                  width="240"
                  elevation="0"
          >
            <v-img height="100" :src="service.src"></v-img>
            <v-card-title>
              {{ service.title }}
            </v-card-title>
            <v-card-subtitle class="py-0">
              {{ service.subtitle }}
            </v-card-subtitle>

            <v-card-actions class="pt-0">
              <v-btn disabled color="orange lighten-2" style="color: orange !important;" text>
                Saiba mais
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                  icon
                  @mouseenter="serviceMouseEnter(service)"
                  @mouseleave="serviceMouseLeave(service)"
                  @click="serviceToggle(service)"
              >
                <v-icon>{{ service.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div :id="'description'+service.id" v-show="service.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ service.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <v-list v-if="isMobile">
        <div
            v-for="(service, i) in services" :key="i"
            class="d-flex d-sm-inline-flex"
            style="align-items: center; justify-content: center"
        >
          <div style="width: 420px;" class="pt-0 px-16 my-6">
            <v-card
                :id="'mobileService'+service.id" :color="'#F1F1F1'"
                height="min-content"
                elevation="2"
            >
              <v-img height="160" :src="service.src"></v-img>
              <v-card-title style="cursor: pointer" @click="serviceToggle(service)">
                <h4 class="mx-auto">{{ service.title }}</h4>
              </v-card-title>
              <v-card-subtitle
                  style="cursor: pointer"
                  class="text-center pb-0 pt-0"
                  @click="serviceToggle(service)"
              >
                ver mais
              </v-card-subtitle>

              <v-card-actions
                  style="cursor: pointer"
                  @click="serviceToggle(service)"
                  class="pa-0 px-2">
                <v-btn icon class="mx-auto">
                  <v-icon>{{ service.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div :id="'description'+service.id" v-show="service.show">
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ service.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </div>
      </v-list>
    </div>
    <div class="py-ms-12 py-4"></div>
  </v-container>
</template>

<script>

export default {
  name: "Services",
  props: {
    services: {
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
    serviceMouseEnter(service) {
      service.show = true
    },

    serviceMouseLeave(service) {
      service.show = false
    },

    serviceToggle(s) {
      if (s.show) {
        s.show = false
      } else {
        this.services.forEach(service => {
          service.show = false
        })
        s.show = true
      }
    },
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