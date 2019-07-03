<template>
  <div style="max-width: 400px; margin: auto;">
    <v-card raised>
      <v-container
        mt-5
        fill-height
        fluid
        text-xs-center
        align-center
        justify-center
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#00695C" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Profile</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-avatar class="mt-3" size="75" color="grey lighten-4">
              <img
                src="https://gravatar.com/avatar/58f59c8117c9d7ae2666f24279e03d07?s=400&d=mp&r=pg"
                alt="avatar"
              />
            </v-avatar>
            <p v-show="userName">Username</p>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              class="mt-3"
              label="Solo"
              placeholder="username@gmail.com"
              solo
              disabled
            ></v-text-field>
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
      userName: true
    };
  }
};
</script>

<style></style>
