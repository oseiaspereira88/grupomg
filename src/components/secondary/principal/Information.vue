<template>
  <v-container id="contatos" class="section">
    <v-row class="pt-16 pb-0" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">INFORMAÇÕES</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>

    <v-row class="pb-16" justify="center" align="center" no-gutters>
      <v-col cols="5" class="pt-6 mt-6 pl-16 pr-4">
        <div class="pl-10" style="width: 100%">
          <strong>
            Para qualquer informação, entre em contato.
          </strong><br><br>
          <p>
            <strong>Endereço:</strong><br>
            Rua qualquer, 123, qualquer cidade, Estado, País.
          </p>
          <p>
            <strong>E-mail:</strong><br>
            {{email}}
          </p>
          <strong>Telefone:</strong>
          <p>{{phone}}</p>
        </div>
      </v-col>


      <v-col cols="7" class="pt-6 mt-6 pr-16">
        <video class="rounded-lg" style="box-shadow: #d5d5d5 0px 0px 2px 1px" width="100%" height="100%" controls>
          <source :src="video_src" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>

export default {
  name: "Information",
  props: {
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    video_src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>