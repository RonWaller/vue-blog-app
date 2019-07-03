<template>
  <v-container class="my-5">
    <h1 class="title my-4 grey--text">Dashboard</h1>
    <v-card v-for="blog in blogs" :key="blog.id">
      <v-layout row wrap class="pa-3">
        <v-flex xs12 md6>
          <div class="caption mb-2 grey--text">Blog Title</div>
          <div class="title pt-3 black--text">{{ blog.title }}</div>
        </v-flex>
        <v-flex xs12 md6>
          <div class="caption mb-2 grey--text">Options</div>
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="dark teal darken-4 pa-2 mx-3 white--text"
            >
              <v-icon size="20px" left>{{ icon.icon }}</v-icon>
              <span>{{ icon.text }}</span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogs: [],
      icons: [
        { icon: 'far fa-edit', text: 'Edit' },
        { icon: 'far fa-save', text: 'Save' },
        { icon: 'far fa-share-square', text: 'Publish' },
        { icon: 'far fa-eye', text: 'Preview' },
        { icon: 'far fa-trash-alt', text: 'Delete' }
      ]
    };
  },
  methods: {},
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => {
        this.blogs = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
.v-btn:before {
  color: #00897b;
  opacity: 1;
}
</style>
