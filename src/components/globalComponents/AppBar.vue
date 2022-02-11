<template>
  <header>
    <ul id="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <a @click="GET_comic(GET_ramdomId(1000))">Random Comic</a>
      </li>
      <li><router-link to="/ratings">Ratings</router-link></li>
      <!-- <li><router-link to="/about">Fabian Ramirez</router-link></li> -->
    </ul>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navBar',

  data () {
    return {}
  },

  computed: {},
  components: {},
  methods: {
    ...mapActions('ComicsStore', ['GET_comic']),
    GET_ramdomId (max) {
      return Math.floor(Math.random() * max)
    }
  },
  watch: {},
  mounted () {},
  created () {}
}
</script>
<style>
header {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  z-index: 1;
  grid-column: 1/3;
  grid-row: 1/2;
  background: #000000;
  position: relative;
  margin-bottom: 1.5em;
}
header ::after {
  content:"";
  position: absolute;
  width: 100%;
  height: 1px;
  background: #000000;
  bottom: -5px;
}
#navigation {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  cursor: pointer;
}
#navigation a{
    color: #c3c3c3;
}
.router-link-exact-active {
 padding: 2px 10px;
    background-color: #fff;
    color: #767474 !important;
    text-transform: uppercase;
    border-radius: 2px;
}
#navigation a:hover {
  /* opacity: 0.5; */
  color: #cbffb6;
}
</style>
