<template>
  <v-container class="section" style="background: #30a692">
    <v-row style="width: 100%;" class="py-10" justify="center" align="center" no-gutters>
      <v-col cols="6" class="py-4 text-center text--darken-1">
        <strong style="font-size: 1.5rem; color: #FFFFFF"> Solicite seu orçamento já</strong>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-btn light class="text-center py-sm-4 py-8 px-sm-16 px-4 ml-sm-0 ml-2">
          <strong>Solicite</strong>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Solicitation",
  props: {
    whatsapp_number: {
      type: String,
      required: true
    }
  },
}
</script>