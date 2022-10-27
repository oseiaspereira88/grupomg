<template>
  <v-app-bar
      style="z-index: 2; background: #EBEBEB;"
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      absolute>
    <div>
      <a onclick="window.location = '/'">
        <v-img :src="require('../../assets/img/logos/mga.png')"
            style="width: 120px;left: 0;"
            class="pa-0"
            contain/>
      </a>
    </div>
    <v-row justify="center" no-gutters>
      <div v-for="link in nav_itens" :key="link" :style="{fontSize: 10 + 'pt'}">
        <v-btn v-if="link === 'Home'" text class="mx-1 my-2 v-btn--active" color="#117263">
          {{ link }}
        </v-btn>
        <v-btn v-else text class="mx-1 my-2" color="#117263">
          {{ link }}
        </v-btn>
      </div>
    </v-row>
    <v-app-bar-nav-icon class="mr-1" v-if="isMobile"></v-app-bar-nav-icon>

  </v-app-bar>
</template>

<style>
.v-btn--active span{
  font-weight: bold;
}
span{
  font-weight: normal;
}
</style>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    nav_itens: [
      'Home',
      'Serviços',
      'Quem Somos',
      'Contato',
      'Grupo MG',
    ],
  }),
}
</script>