<template>
  <nav>
    <v-toolbar dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/" exact>Home</router-link>|
      <router-link to="/about" exact>About</router-link>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="30px" color="grey lighten-4">
          <img
            src="https://gravatar.com/avatar/58f59c8117c9d7ae2666f24279e03d07?s=400&d=mp&r=pg"
            alt="avatar"
          />
        </v-avatar>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>-->

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
nav a {
  margin: 5px;
  font-size: 1.5rem;
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
  font-weight: bold;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
