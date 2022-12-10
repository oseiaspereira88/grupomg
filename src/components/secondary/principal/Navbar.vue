<template>
  <div>
    <v-app-bar
        v-if="!isMobile"
        style="z-index: 2; background: #EBEBEB; min-height: 0"
        hide-on-scroll
        scroll-target="#scrolling-techniques-4"
        absolute>

      <div id="home">
        <a onclick="window.location = '/'">
          <v-img :src="nav_image_src"
                 style="width: 120px;left: 0;"
                 class="pa-0"
                 contain/>
        </a>
      </div>

      <v-row v-if="!isMobile" justify="center" no-gutters>
        <div v-for="(item, i) in items" :key="i" :style="{fontSize: 10 + 'pt'}">
          <v-btn @click="navigateTo(item.link)" v-if="item.link === '#home'" text class="mx-1 my-2 v-btn--active"
                 color="#117263">
            {{ item.title }}
          </v-btn>
          <v-btn @click="navigateTo(item.link)" v-else text class="mx-1 my-2" color="#117263">
            {{ item.title }}
          </v-btn>
        </div>
      </v-row>

      <div v-else style="width: 100%;">
        <v-app-bar-nav-icon @click="drawer = true" class="float-end mr-1"/>
      </div>

    </v-app-bar>

    <v-app-bar
        v-if="isMobile"
        style="z-index: 2; background: #EBEBEB; min-height: 0"
        inverted-scroll
        scroll-target="#scrolling-techniques-4"
        absolute>

      <div id="home">
        <a onclick="window.location = '/'">
          <v-img :src="nav_image_src"
                 style="width: 120px;left: 0;"
                 class="pa-0"
                 contain/>
        </a>
      </div>

      <v-row v-if="!isMobile" justify="center" no-gutters>
        <div v-for="(item, i) in items" :key="i" :style="{fontSize: 10 + 'pt'}">
          <v-btn @click="navigateTo(item.link)" v-if="item.link === '#home'" text class="mx-1 my-2 v-btn--active"
                 color="#117263">
            {{ item.title }}
          </v-btn>
          <v-btn @click="navigateTo(item.link)" v-else text class="mx-1 my-2" color="#117263">
            {{ item.title }}
          </v-btn>
        </div>
      </v-row>

      <div v-else style="width: 100%;">
        <v-app-bar-nav-icon @click="drawer = true" class="float-end mr-1"/>
      </div>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer" absolute temporary
        class="mt-14"
        style="background: #108152"
    >
      <v-list nav dense>
        <v-list-item-group class="white-text">
          <div v-for="item in items" :key="item" :style="{ fontSize: 10 + 'pt' }">
            <v-list-item @click="navigateTo(item.link)">
              <v-list-item-icon
                  v-if="items[0] === item"
                  style="color: #3e3ed0"
              >
                <v-icon style="color: whitesmoke">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-icon v-else style="color: #3e3e3e">
                <v-icon style="color: whitesmoke">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-title style="color: whitesmoke" @click="navigateTo(item.link)">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
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
    items: {
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
    scrollToTop: Function
  },
  data: () => {
    return {
      isMobile: false,
      drawer: false
    }
  },
  methods: {
    navigateTo(link) {
      if (link === "#home") {
        this.$parent.scrollToTop()
      } else {
        document.getElementById(link).scrollIntoView({behavior: "smooth"});
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