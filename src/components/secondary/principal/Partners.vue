<template>
  <v-container id="partners-section" class="section">
    <v-item-group class="px-sm-16 px-4 pt-sm-4 pt-0">
      <v-row>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mga_logo.png')"
                   height="100px" contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mgp_logo.png')"
                   height="100px" contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/agility_logo.png')"
                   height="100px" contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mgs_logo.png')"
                   height="100px" contain/>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
export default {
  name: "Partners",
}
</script>