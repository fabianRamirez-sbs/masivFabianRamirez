<template>
  <div class="grid-wrapper">
        <aside>
          <h1>No Color Allowed</h1>
          <h3>monochromatic</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            reprehenderit inventore ipsum est omnis, totam deserunt temporibus rem
            optio quia obcaecati excepturi consectetur, harum facilis alias veniam
            laborum iure! Expedita?
          </p>
          <p href="#" class="button">Learn More</p>
        </aside>
        <div class="background"></div>
  </div>
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
<style scoped>
.grid-wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: min-content auto min-content;
}
aside {
  grid-column: 1/2;
  grid-row: 2/3;
  /*background: #5cbdbb;*/
}
aside {
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}
.background {
  grid-column: 2/3;
  grid-row: 1/4;
  background-image: url("https://images.unsplash.com/photo-1542491873-564432bfb050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}

</style>
