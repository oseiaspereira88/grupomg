<template>
  <v-footer class="pb-4" style="background: #0a948f">
    <v-row justify="center" no-gutters>
      <v-col
          cols="12" sm="8"
          class="text-center text--darken-1"
      >
        <div class="d-flex flex-row" style="height: 100%;">
          <div class="mx-6 ml-sm-12 pt-6">
            <v-img
                :src="require('@/assets/img/logos/mg_white_logo.png')"
                height="120"
                width="120"/>
          </div>
          <v-container fill-height fluid>
            <div class="text-left white--text">
              Todos os direitos reservados.
              <p class="ma-0 pa-0">
                <strong>CNPJ:</strong>
                00.000.000/0000-00
              </p>
              <strong>Grupo MG Ltda.</strong>
            </div>
          </v-container>
        </div>
      </v-col>
      <v-col
          cols="12" sm="4"
          class="px-sm-4 px-0 pt-0 pt-sm-14 text--darken-1 text-center text-sm-left"
      >
        <strong class="white--text align-center">SIGA-NOS</strong>
        <div class="d-flex flex-row text" style="height: 100%;">
          <v-row class="white--text pl-2 pr-sm-16 pt-6 mx-16 mx-sm-0">
            <a class="mx-auto" onclick="document.location = 'https://facebook.com'">
              <v-icon  class="mr-sm-4" large dark aria-hidden="false">mdi-facebook</v-icon>
            </a>
            <a class="mx-auto" onclick="document.location = ''">
              <v-icon class="mr-sm-4" large dark aria-hidden="false">mdi-instagram</v-icon>
            </a>
            <a class="mx-auto" onclick="document.location = ''">
              <v-icon class="mr-sm-4" large dark aria-hidden="false">mdi-gmail</v-icon>
            </a>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="text-center text--darken-1 pt-12">
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
  name: "BusinessMobile"
}
</script>