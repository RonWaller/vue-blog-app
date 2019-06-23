<template>
  <div class="home">
    <Blog v-bind:posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '../components/Blog';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Blog
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {},
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => (this.posts = res.data))
      .catch(err => console.log(err));
  }
};
</script>
