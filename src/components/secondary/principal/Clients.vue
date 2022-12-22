<template>
  <v-container
      id="business-section"
      class="section pt-6"
      style="background: #F1F1F1"
      fluid>
    <h2 class="text-center">CLIENTES</h2>
    <div class="px-sm-16" style="background: #F1F1F1">
      <v-slide-group show-arrows>
        <v-slide-item v-for="n in 15" :key="n">
          <v-card :color="'#F1F1F1'" class="mx-sm-4 mx-0" height="120" width="120" elevation="0">
            <v-img :src="clients[0].srcImage"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'Clients',
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
}
</script>
