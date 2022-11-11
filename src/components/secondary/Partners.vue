<template>
  <v-container id="partners-section" class="section">
    <v-item-group class="px-16 pt-4" style="margin-left: 8vw">
      <v-row>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mga_logo.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mgp_logo.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/agility_logo.png')"
                   height="100"
                   width="120"
                   contain/>
          </v-item>
        </v-col>
        <v-col cols="3">
          <v-item>
            <v-img :src="require('@/assets/img/logos/mgs_logo.png')"
                   height="100"
                   width="120"
                   contain/>
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