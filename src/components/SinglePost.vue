<template>
  <div id="singlePost">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SinglePost',
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(res => (this.blog = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
#singlePost {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 960px;
  margin: 50px auto;
  text-align: center;
  color: #333;
}
</style>
