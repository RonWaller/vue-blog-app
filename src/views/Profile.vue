<template>
  <div style="max-width: 1000px; height: 75vh; margin: auto;">
    <v-card height="100%" elevation-20>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Profile Settings</h3>
        </div>
      </v-card-title>
      <v-divider dark></v-divider>
      <v-container pa-0 fill-height fluid>
        <v-layout row justify-space-between>
          <v-flex md2>
            <v-list class="py-0 my-4">
              <v-list-tile
                class="title"
                v-for="link in links"
                :key="link.text"
                router
                :to="link.route"
              >
                <v-list-tile-content>
                  <v-list-tile-title class="black--text uppercase">{{
                    link.text
                  }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>

          <v-flex md10 my-3 text-xs-center>
            <div>
              <h4>
                <router-view />
              </h4>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userName: true,
      links: [
        { text: 'General', route: '/profile/general' },
        { text: 'Account', route: '/profile/account' },
        { text: 'Security', route: '/profile/security' },
        { text: 'Email', route: '/profile/email' }
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  margin-top: 20px;
}
.v-card__title {
  background: #00695c;
  color: #fff;
}
.theme--dark.v-divider {
  border-color: #000;
}
>>> .application a {
  cursor: default;
}
>>> .v-list {
  border: 1px solid #d1d5da;
}
>>> .v-list > div.title {
  border-bottom: 1px solid #d1d5da;
}
>>> .v-list__tile--active {
  border-left: 3px solid #00695c;
}
.layout.column.list {
  max-width: 150px;
}
</style>
