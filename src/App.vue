<template>
  <v-app>
    <AppBar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/globalComponents/AppBar'
import Footer from '@/components/globalComponents/Footer'

export default {
  name: 'App',

  components: {
    AppBar,
    Footer
  },

  data: () => ({
    //
  }),
  created () {},
  mounted () {}
}
</script>

<style>
</style>
