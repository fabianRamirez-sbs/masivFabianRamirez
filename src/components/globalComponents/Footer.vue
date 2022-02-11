<template>
  <footer>
    <a target="blank" href="https://www.linkedin.com/in/fabianra/">
      <i>Fabian Ramirez</i>
      <v-icon>fa-solid fa-briefcase</v-icon>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'footer',

  data () {
    return {}
  },

  computed: {},
  components: {},
  methods: {},
  watch: {},
  mounted () {},
  created () {}
}
</script>
<style>
footer {
  margin-top: 1em;
  text-align: center;
  border-top: 1px solid #abaaaa;
}
footer a {
  color: #5f6060 !important;
}
footer a i {
  margin-right: 0.5em;
}
</style>
