<template>
  <v-footer class="pb-4" style="background: #0a948f">
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <div class="pt-4">
          <v-img
              v-if="is_secondary_page"
              :src="logo_src"
              class="mx-auto"
              height="90"
              width="180"/>
          <v-img
              v-else
              :src="logo_src"
              class="mx-auto"
              height="120"
              width="120"/>
        </div>
        <v-container>
          <div class="text-center mx-auto white--text pt-0">
            Todos os direitos reservados.
            <p class="ma-0 pa-0">
              <strong>CNPJ:</strong>
              {{ business_cnpj }}
            </p>
            <strong>
              {{ business_name }}
            </strong>
          </div>
        </v-container>
      </v-col>
      <v-col
          cols="12" sm="6"
          class="px-sm-4 px-0 pt-4 text--darken-1 text-center text-sm-left"
      >
        <h4 class="text-center">
          <strong class="white--text" style="width: min-content;">SIGA-NOS</strong>
        </h4>
        <div class="text" style="height: 100%;">
          <v-row class="white--text pt-6 mx-16 mx-sm-0">
            <a class="mx-auto" @click="openLink(instagram_link)">
              <v-icon class="mr-sm-4" large dark aria-hidden="false">mdi-instagram</v-icon>
            </a>
            <a class="mx-auto" @click="openLink(email_link)">
              <v-icon class="mr-sm-4" large dark aria-hidden="false">mdi-gmail</v-icon>
            </a>
            <a class="mx-auto" @click="openLink(whatsapp_link)">
              <v-icon class="mr-sm-4" large dark aria-hidden="false">mdi-whatsapp</v-icon>
            </a>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="text-center text--darken-1 pt-10">
        <strong class="white--text">
          <span class="mr-1">Designed by ©</span>
          EmpreendApp <span>and</span> Alpha Digital
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterMobile",
  props: {
    is_secondary_page: {
      type: Boolean,
      required: true
    },
    logo_src: {
      type: String,
      required: true
    },
    business_name: {
      type: String,
      required: true
    },
    business_cnpj: {
      type: String,
      required: true
    },
    instagram_link: {
      type: String,
      required: true
    },
    email_link: {
      type: String,
      required: true
    },
    whatsapp_link: {
      type: String,
      required: true
    }
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank').focus()
    }
  }
}
</script>