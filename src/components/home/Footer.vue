<template>
  <v-footer class="pt-4 pb-4" style="background: #0a948f" padless>
    <v-row justify="center" no-gutters>
      <v-col cols="8" class="text-center text--darken-1">
        <div class="d-flex flex-row" style="height: 100%;">
          <div class="ml-16 pl-12">
            <v-img height="150" width="130" :src="require('@/assets/img/logos/mg_white_logo.png')"></v-img>
          </div>
          <v-container fill-height fluid style="width: 33vw">
            <div class="text-left white--text pt-4">
              <strong>Todos os direitos reservados.</strong>
              <p class="ma-0 pa-0">
                <strong>CNPJ:</strong>
                00.000.000/0000-00
              </p>
              <p>Grupo MG Ltda.</p>
            </div>
          </v-container>
        </div>
      </v-col>
      <v-col cols="4" class="px-4 pt-12 text--darken-1">
        <strong class="white--text">Siga-nos</strong>
        <div class="d-flex flex-row" style="height: 100%;">
          <v-row class="white--text pl-2 pr-16 pt-4">
            <a onclick="document.location = 'https://facebook.com'">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-facebook</v-icon>
            </a>
            <a onclick="document.location = ''">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-instagram</v-icon>
            </a>
            <a onclick="document.location = ''">
              <v-icon class="mr-4" large dark aria-hidden="false" >mdi-gmail</v-icon>
            </a>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="text-center text--darken-1">
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
  name: 'Footer',
}
</script>
