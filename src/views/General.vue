<template>
  <div>
    <v-container fluid fill-height>
      <v-layout row wrap>
        <v-flex md9>
          <v-layout row wrap v-for="info in userInfo" :key="info.label">
            <v-flex md7>
              <v-text-field
                :label="info.label"
                :placeholder="info.placeholder"
                :readonly="info.readonly"
              ></v-text-field>
            </v-flex>
            <v-flex md2 mx-4 align-self-center>
              <v-btn small class="dark teal darken-4 white--text">
                <v-icon size="15" left>far fa-edit</v-icon>
                <span>Edit</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md3>
          <v-avatar size="75" color="grey lighten-4">
            <img
              src="https://gravatar.com/avatar/58f59c8117c9d7ae2666f24279e03d07?s=400&d=mp&r=pg"
              alt="avatar"
            />
          </v-avatar>
          <v-btn small class="mx-5 dark teal darken-4 white--text">
            <v-icon size="15" left>far fa-edit</v-icon>
            <span>Edit</span>
          </v-btn>
        </v-flex>
        <v-flex md7>
          <v-textarea
            label="Bio"
            placeholder="Insert text about user"
            readonly
          ></v-textarea>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'General',
  data() {
    return {
      userInfo: [
        { label: 'Name', placeholder: 'John Doe', readonly: true },
        { label: 'Username', placeholder: 'Username', readonly: true },
        { label: 'Email', placeholder: 'user@gmail.com', readonly: true },
        { label: 'Location', placeholder: 'Basement', readonly: true }
      ]
    };
  }
};
</script>

<style></style>
