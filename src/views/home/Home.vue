<template>
<h1>Hola Mundo</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'billing',

  data () {
    return {

    }
  },

  computed: {
    ...mapState('AuthenticationStore', ['userLogin'])
  },
  components: {

  },
  methods: {},
  watch: {},
  mounted () {
  },
  created () {}
}
</script>
<style>
</style>
