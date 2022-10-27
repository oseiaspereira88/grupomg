<template>
  <v-container class="section" style="background: #F1F1F1">
    <v-row>
      <v-col cols="12" md="7">
        <div class="text-center pt-6">
          <strong style="font-size: 1.5rem; color: #0a948f">Quem Somos</strong>
        </div>
        <p class="text-left pl-16 pr-16 pt-4 text-justify">
          Nossa empresa foi fundada em 1989, com o objetivo de oferecer soluções de
          segurança para empresas e residências. Com o passar dos anos, a empresa
          cresceu e se tornou referência no mercado de segurança eletrônica em
          todo o estado de Rio Grande do Norte. Atualmente, a empresa conta com
          mais de 30 anos de experiência e mais de 100 mil clientes atendidos. A
          MGA Segurança Eletrônica é uma empresa que oferece soluções completas
          para segurança eletrônica, com equipamentos de alta qualidade e
          tecnologia de ponta.
        </p>
      </v-col>
      <v-col cols="12" md="5" style="padding: 0">
        <v-img :src="require('@/assets/img/mgp/mgp-2.png')"/>
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