<template>
  <div class="footer" v-katex >
    $$
      f(i) = \\sum_i^n{A_i}
    $$

    \\[
    b_i
    \\]
    $ a_i$

    **bold**

    {{ msg}}
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
