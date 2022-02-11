<template>
  <div>
    <v-container>
      <v-row v-if="ratingsList.length == 0">
        <v-col>
          <v-alert border="top" color="red lighten-2" dark>
            Please go to the home and rate the comics.
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="ratingsList"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="SET_dataIdComic(item)">
                fa-solid fa-eye
              </v-icon>
            </template>
            <template v-slot:item.ratings="{ item }">
              <v-rating
                class="mb-2"
                v-model="item.ratings"
                background-color="orange lighten-3"
                color="orange"
                :readonly="true"
              ></v-rating>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row v-if="viewItem">
        <Home />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Home from '@/views/home/Home'

export default {
  name: 'billing',

  data () {
    return {
      viewItem: false,
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: 'Year', value: 'year' },
        { text: 'Id', value: 'num' },
        { text: 'Ratings', value: 'ratings' },
        { text: 'See', value: 'actions', sortable: false }
      ]
    }
  },

  computed: {
    ...mapState('ComicsStore', ['comic', 'ratingsList'])
  },
  components: { Home },
  methods: {
    ...mapMutations('ComicsStore', ['SET_comic']),

    SET_dataIdComic (item) {
      let newData = {}
      newData.data = item
      this.SET_comic(newData)
      this.viewItem = true
    }
  },
  watch: {},
  mounted () {},
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
