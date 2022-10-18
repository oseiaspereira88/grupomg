<template>
    <v-app-bar
        absolute
        style="z-index: 2; background: rgb(8,11,49);"
        scroll-target="#scrolling-techniques-7">
      <div>
        <a onclick="window.location = '/'">
          <v-img :src="require('../../assets/slogan.png')"
                 class="pa-0"
                 style="width: 180px; left: 0;"
                 contain/></a>
      </div>
      <v-row justify="center" no-gutters>
        <div v-for="link in nav_itens" :key="link" :style="{ fontSize: 10 + 'pt' }">

          <v-btn v-if="link == 'Início'" color="#a3a3FF" text class="mx-1 my-2 v-btn--active">
            {{ link }}
          </v-btn>
          <v-btn v-else color="#a3a3FF" text class="mx-1 my-2">
            {{ link }}
          </v-btn>

        </div>
      </v-row>

      <v-app-bar-nav-icon class="mr-1" color="#a3a3FF"></v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    nav_itens: [
      'Início',
      'Sobre Nós',
      'Serviços',
      'Orçamento',
      'Time',
      'Contatos',
    ],
  }),
}
</script>
