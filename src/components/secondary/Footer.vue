<template>
  <v-footer class="pt-4 pb-4" style="background: #30a692" padless>
    <v-row justify="center" no-gutters>
      <v-col class="text-center text--darken-1" cols="6">
        <div class="d-flex flex-row" style="height: 100%;">
          <div class="ml-16">
            <v-img height="180" width="180" :src="logo_src"></v-img>
          </div>
          <v-container fill-height fluid style="width: 33vw; height: 100%;">
            <v-row class="text-left white--text pt-4">
              <strong>Todos os direitos reservados.</strong>
              <p class="ma-0 pa-0">
                {{ bussiness_name }}
              </p>
              <p>
                CNPJ: {{ bussiness_cnpj }}
              </p>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-col class="pt-12 text--darken-1" style="padding-left: 20vw" cols="6">
        <strong class="white--text">Siga-nos</strong>
        <div class="d-flex flex-row" style="height: 100%;">
          <v-row class="white--text pl-2 pr-16 pt-4">
            <a onclick="document.location = facebook_link">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-facebook</v-icon>
            </a>
            <a onclick="document.location = instagram_link">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-instagram</v-icon>
            </a>
            <a onclick="document.location = email_link">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-gmail</v-icon>
            </a>
          </v-row>
        </div>
      </v-col>
      <v-col class="text-center text--darken-1" cols="12">
        <strong class="white--text"><span class="mr-1">Designed by ©</span>EmpreendApp and Alpha Digital</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    logo_src: {
      type: String,
      required: true
    },
    bussiness_name: {
      type: String,
      required: true
    },
    bussiness_cnpj: {
      type: String,
      required: true
    },
    facebook_link: {
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
  }
}
</script>
