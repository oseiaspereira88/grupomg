<template>
  <div>
    <v-app-bar
        absolute
        style="z-index: 2; background: rgb(8,11,49);"
        scroll-target="#scrolling-techniques-7">
      <div>
        <a onclick="window.location = '/'">
          <v-img :src="require('../../../assets/img/logos/mg_min_logo.png')"
                 class="pa-0 py-6"
                 style="width: 180px; left: 0;"
                 contain/>
        </a>
      </div>
      <v-row justify="center" no-gutters></v-row>
      <v-app-bar-nav-icon @click="drawer = true" class="mr-1" color="#a3a3FF"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="mt-14" style="background: rgb(21,28,51)">
      <v-list nav dense>
        <v-list-item-group v-model="group" class="white-text">
          <div v-for="link in nav_itens" :key="link" :style="{ fontSize: 10 + 'pt' }">
            <v-list-item>
              <v-list-item-icon style="color: #3e3ed0">
                <v-icon style="color: whitesmoke">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="color: whitesmoke">{{ link }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'MobileNavbar',

  data: () => ({
    nav_itens: [
      'Início',
      'Sobre Nós',
      'Serviços',
      'Orçamento',
      'Time',
      'Contatos',
    ],
    drawer: false,
    group: null,
  }),
}
</script>
