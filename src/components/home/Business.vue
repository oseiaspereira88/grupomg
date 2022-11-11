<template>
  <v-container id="business-section" class="section px-16 pt-4" style="background: #F1F1F1" fluid>
    <h1 class="text-center mt-6" style="font-size: 24pt">CONHEÇA NOSSAS EMPRESAS</h1>
    <h2 class="text-center" style="font-size: 12pt">Clique abaixo para conhecer mais sobre cada uma delas</h2>

    <v-container class="pa-16 pt-10">
      <v-item-group>
        <v-row>
          <v-col v-for="(card, i) in cards" :key="i" cols="12" md="6">
            <v-item>
              <v-card :to="card.action" class="bussines_item">
                <v-img :src="card.src" height="250" class="text-right pa-2"></v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-container>
</template>

<style>
#business-section {
  height: auto;
}
</style>

<script>
export default {
  name: 'Business',
  data: () => ({
    cards: [
      {src: require('@/assets/img/cards/card_mga.png'), action: '/mga'},
      {src: require('@/assets/img/cards/card_mgp.png'), action: '/mgp'},
      {src: require('@/assets/img/cards/card_mgs.png'), action: '/mgs'},
      {src: require('@/assets/img/cards/card_agility.png'), action: '/agility'},
    ],
  }),
  created() {
    window.addEventListener("resize", this.correctParallax);
  },
  destroyed() {
    window.removeEventListener("resize", this.correctParallax);
  },
  methods: {
    correctParallax() {
      let parallax_images = document.getElementsByClassName('v-parallax__image');

      function getPaddingByWidth() {
        return (window.innerWidth - 1380) / (-1.68) + 'px';
      }

      let padding = getPaddingByWidth();
      for (let i = 0; i < parallax_images.length; i++) {
        parallax_images[i].style.paddingBottom = padding;
      }

      console.log(padding);
    },
  },
  mounted: function () {
    this.correctParallax()

    for (let item of document.getElementsByClassName('bussines_item')) {
      item.addEventListener('mouseover', function () {
        item.style.transform = 'scale(1.06)';
      });
      item.addEventListener('mouseout', function () {
        item.style.transform = 'scale(1)';
      });
      item.style.transition = 'all 0.45s ease';
    }
  },
}
</script>
