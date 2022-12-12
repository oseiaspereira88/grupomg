<template>
  <v-container id="contatos" class="section">
    <v-row v-if="!isMobile" class="pt-16 pb-0" justify="center" align="center" no-gutters>
      <v-col cols="7" sm="5" md="3" class="text-center">
        <h2 class="text-center">INFORMAÇÕES</h2>
        <div class="pt-1 mx-16" style="background: #0a948f"></div>
      </v-col>
    </v-row>

    <v-row class="pb-16" justify="center" align="center" no-gutters>
      <v-col v-if="!isMobile" cols="5" class="pt-6 mt-6 pl-16 pr-4">
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

      <v-col v-else cols="12" class="pt-6 mt-6">
        <div class="mx-auto" style="width: 76%;">
          <h2 class="text-left">INFORMAÇÕES</h2>
          <div class="pt-1 mb-4" style="background: #0a948f; margin-right: 38%;"></div>
          <strong>
            Para qualquer informação, entre em contato.
          </strong><br><br>
          <p v-if="address != null">
            <strong>Endereço:</strong><br>
            {{ address }}
          </p>
          <p>
            <strong>E-mail:</strong><br>
            {{email}}
          </p>
          <strong>Telefone:</strong>
          <p>{{phone}}</p>
        </div>
      </v-col>

      <v-col v-if="!isMobile" cols="7" class="pt-6 mt-6 pr-16">
        <video
            width="100%"
            height="100%"
            class="rounded-lg"
            style="box-shadow: #d5d5d5 0px 0px 2px 1px"
            controls
        >
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
      required: false
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
  },
  data() {
    return {
      isMobile: false
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>