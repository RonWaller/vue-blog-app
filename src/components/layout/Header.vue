<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app clipped class="teal darken-4">
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="75" color="grey lighten-4">
            <img
              src="https://gravatar.com/avatar/58f59c8117c9d7ae2666f24279e03d07?s=400&d=mp&r=pg"
              alt="avatar"
            />
          </v-avatar>
          <p v-show="userName">Username</p>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list class="py-4">
        <v-list-tile
          class="title my-5 px-4"
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon size="45" class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text uppercase">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar clipped-left dark app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/" exact>Home</router-link>|
      <router-link to="/about" exact>About</router-link>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="35" color="grey lighten-4">
          <img
            src="https://gravatar.com/avatar/58f59c8117c9d7ae2666f24279e03d07?s=400&d=mp&r=pg"
            alt="avatar"
          />
        </v-avatar>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
      userName: true,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
        { icon: 'person', text: 'Profile', route: '/profile/general' },
        { icon: 'exit_to_app', text: 'Logout', route: '/login' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.uppercase {
  text-transform: uppercase;
}
.title:hover {
  background: #00695c;
}

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
