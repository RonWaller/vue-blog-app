<template>
  <header class="header">
    <nav id="nav">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/about" exact>About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
