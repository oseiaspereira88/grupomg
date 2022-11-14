<template>
  <v-container id="business-section" class="section px-16 pt-4" style="background: #F1F1F1" fluid>
    <h1 class="text-center mt-6" style="font-size: 24pt">CONHEÇA NOSSAS EMPRESAS</h1>
    <h2 class="text-center" style="font-size: 12pt">Clique abaixo para conhecer mais sobre cada uma delas</h2>

    <v-container id="business-container" class="pa-16 pt-10">
      <v-item-group>
        <v-row>
          <v-col v-for="(card, i) in cards" :key="i" cols="12" md="6">
            <v-item>
              <v-card :to="card.action" class="business_item">
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
      {
        src: require('@/assets/img/cards/card_mga.png'),
        action: '/mga'
      },
      {
        src: require('@/assets/img/cards/card_mgp.png'),
        action: '/mgp'
      },
      {
        src: require('@/assets/img/cards/card_mgs.png'),
        action: '/mgs'
      },
      {
        src: require('@/assets/img/cards/card_agility.png'),
        action: '/agility'
      },
    ],
  }),
  created() {
    window.addEventListener("resize", this.correctLayouts);
  },
  destroyed() {
    window.removeEventListener("resize", this.correctLayouts);
  },
  methods: {
    correctLayouts() {
      let container = document.getElementById("business-container");
      let cards = document.getElementsByClassName("business_item");

      for(let i = 0; i < cards.length; i++) {
        if(window.innerWidth <= 600){
          cards[i].firstChild.style.height = "170px";
          container.classList.remove("pa-16");
        } else if(window.innerWidth <= 780) {
          cards[i].firstChild.style.height = "200px";
          if(!container.classList.contains("pa-16")) {
            container.classList.add("pa-16");
          }
        } else if(window.innerWidth <= 960) {
          cards[i].firstChild.style.height = "250px";
          if(!container.classList.contains("pa-16")) {
            container.classList.add("pa-16");
          }
        } else{
          cards[i].firstChild.style.height = "250px";
          if(!container.classList.contains("pa-16")) {
            container.classList.add("pa-16");
          }
        }
      }
    },
  },
  mounted: function () {
    this.correctLayouts()

    //animate items
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
