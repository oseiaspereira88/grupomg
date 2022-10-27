<template>
  <v-container id="home">
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
        <div v-for="(nav_item, i) in nav_itens" :key="i" :style="{fontSize: 10 + 'pt'}">
          <v-btn @click="navegateTo(nav_item.link)" v-if="link === 'Home'" text class="mx-1 my-2 v-btn--active" color="#117263">
            {{ nav_item.title }}
          </v-btn>
          <v-btn @click="navegateTo(nav_item.link)" v-else text class="mx-1 my-2" color="#117263">
            {{ nav_item.title }}
          </v-btn>
        </div>
      </v-row>
      <v-app-bar-nav-icon class="mr-1" v-if="isMobile"></v-app-bar-nav-icon>
    </v-app-bar>
  </v-container>
</template>

<style>
.v-btn--active span {
  font-weight: bold;
}

span {
  font-weight: normal;
}
</style>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    nav_itens: [
      {title: 'Home', link: '#home'},
      {title: 'Serviços', link: '#servicos'},
      {title: 'Quem Somos', link: '#quem-somos'},
      {title: 'Contatos', link: '#contatos'},
      {title: 'Grupo MG', link: '/'},
    ],
  }),
  methods: {
    navegateTo(link) {
      if(link === '/') {
        window.location = '/'
      }
      location.href = link
    }
  },
}
</script>