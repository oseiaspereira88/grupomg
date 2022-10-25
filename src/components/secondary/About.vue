<template>
  <v-container class="section" style="background: #F1F1F1">
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <span style="font-size: 1.5rem; font-weight: 500; color: #0a948f">Quem Somos</span>
        </div>
        <p>
          é um tipo de piso que pode ser instalado em qualquer ambiente, seja ele residencial ou comercial.
          É um piso que possui uma grande variedade de cores e texturas, além de ser muito fácil de limpar e
          manter. Além disso, é um piso que pode ser instalado em qualquer ambiente, seja ele residencial ou
          comercial. É um piso que possui uma grande variedade de cores e texturas, além de ser muito fácil de
          limpar e manter.Somos uma empresa de consultoria e assessoria em gestão de pessoas, com foco em
          desenvolvimento de pessoas e gestão de carreiras.
        </p>
      </v-col>
      <v-col cols="12" md="6" style="padding: 0">
        <v-img contain :src="require('@/assets/img/slides/ambientes.png')"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>