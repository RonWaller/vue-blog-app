<template>
  <div class="post_item">
    <router-link v-bind:to="'/blogs/' + post.id" exact>
      <h2>{{ post.title }}</h2>
    </router-link>
    <article>{{ post.body | truncate }}</article>
  </div>
</template>

<script>
export default {
  name: 'Blogpost',
  props: ['post'],
  // data() {
  //   return {
  //     post: []
  //   };
  // },
  filters: {
    truncate: function(value) {
      return value.slice(0, 100) + '...';
    }
  }
};
</script>

<style lang='scss' scoped>
.post_item {
  background-color: #d3d3d3;
  margin: 25px auto;
  & h2 {
    color: #333;
    font-size: 1.5rem;
  }

  & a {
    text-decoration: none;
  }
}
</style>
