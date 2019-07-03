<template>
  <v-footer clipped-left fixed app height="auto">
    <v-card width="100%" app dark class="black white--text text-xs-center">
      <v-card-text class="pa-0">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="pa-0 white--text"
        >Copyright &copy; 2019 The Best Blog Ever Inc.</v-card-text
      >
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#footer {
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background: #56a059;
  color: #333;
  text-align: center;
  & p {
    margin-top: 0.75rem;
  }
}
</style>
