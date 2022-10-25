<template>
  <v-container id="partners-section" class="section">
    <v-item-group class="px-16 pt-4" style="margin-left: 8vw">
      <v-row>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mga.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mg.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/agility.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mgs.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <h3 class="text-center pt-4 pb-6" style="font-size: 16pt">Líderes em construção e infraestrutura</h3>
  </v-container>
</template>

<script>
export default {
  name: "Partners",
}
</script>

<style scoped>

</style>