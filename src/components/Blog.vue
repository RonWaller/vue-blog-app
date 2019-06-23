<template>
  <div class="blog">
    <h1>Welcome to my Blog</h1>
    <button class="btn" @click="$router.push({ name: 'addBlog' })">
      Add New Blog
    </button>
    <div v-bind:key="post.id" v-for="post in posts">
      <BlogPost v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost';

export default {
  name: 'Blog',
  components: {
    BlogPost
  },
  props: ['posts']
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 10px;
  padding: 10px;
  width: 200px;
  background-color: #087f6f;
  color: #fff;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
}
.blog {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  max-width: 900px;
  margin: 10px auto;
  text-align: center;
}
.blogpost {
  width: auto;
}
</style>
