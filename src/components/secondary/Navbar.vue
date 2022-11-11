<template>
  <v-app-bar
      style="z-index: 2; background: #EBEBEB; min-height: 0px"
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      absolute>
    <div>
      <a onclick="window.location = '/'">
        <v-img :src="nav_image_src"
               style="width: 120px;left: 0;"
               class="pa-0"
               contain/>
      </a>
    </div>
    <v-row justify="center" no-gutters>
      <div v-for="(item, i) in itens" :key="i" :style="{fontSize: 10 + 'pt'}">
        <v-btn @click="navegateTo(item.link)" v-if="link === 'Home'" text class="mx-1 my-2 v-btn--active"
               color="#117263">
          {{ item.title }}
        </v-btn>
        <v-btn @click="navegateTo(item.link)" v-else text class="mx-1 my-2" color="#117263">
          {{ item.title }}
        </v-btn>
      </div>
    </v-row>
    <v-app-bar-nav-icon class="mr-1" v-if="isMobile"></v-app-bar-nav-icon>
  </v-app-bar>
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
  props: {
    itens: {
      type: Array,
      required: true
    },
    nav_image_src: {
      type: String,
      required: true
    },
    nav_bg_color: {
      type: String,
      required: true
    },
  },
  methods: {
    navegateTo(link) {
      if (link === '/') {
        window.location = '/'
      }
      location.href = link
    }
  },
}
</script>