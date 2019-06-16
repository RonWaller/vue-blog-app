<template>
  <footer id="footer">
    <p>Copyright &copy; 2019 The Best Blog Ever Inc.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
#footer {
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background: #56a059;
  color: #333;
  text-align: center;
  & p {
    margin-top: 0.75rem;
  }
}
</style>

