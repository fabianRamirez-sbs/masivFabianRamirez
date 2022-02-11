<template>
  <div class="grid-wrapper">
    <aside>
      <h1>{{ comic.title }}</h1>
      <h3>{{ comic.safe_title }}.</h3>
      <h3>{{ comic.year }}</h3>
      <p>{{ comic.transcript }}</p>
      <hr />
      <p class="mt-2 mb-0">Rate the comic:</p>
      <v-rating
      class="mb-2"
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      :readonly="readonlyStatus"
    ></v-rating>
      <p class="readonly mt-2 mb-0" v-if="readonlyStatus">Thanks for the rate: {{ rating }}</p>
      <hr />
      <div class="text-center">
        <v-btn
          class="ma-2"
          outlined
          color="black"
          @click="GET_comic(comic.num - 1); SET_comic()"
        >
          <v-icon left dark>
            fa-solid fa-angle-left
          </v-icon>
          Previous
        </v-btn>
        <v-btn
          class="ma-2"
          outlined
          color="black"
          @click="GET_comic(comic.num + 1); SET_comic()"
        >
          Next
          <v-icon right dark>
            fa-solid fa-angle-right
          </v-icon>
        </v-btn>
      </div>
    </aside>
    <div
      class="background"
      :style="{ backgroundImage: 'url(' + comic.img + ')' }"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'billing',

  data () {
    return {
      rating: 0,
      readonlyStatus: false
    }
  },

  computed: {
    ...mapState('ComicsStore', ['comic', 'ratingsList'])
  },
  components: {},
  methods: {
    ...mapActions('ComicsStore', ['GET_comic', 'POST_ratings']),
    GET_ramdomId (max) {
      return Math.floor(Math.random() * max)
    },
    POST_newRatings () {
      if (this.ratingsList.length > 0) {
        this.ratingsList.filter(itemId => {
          if (itemId.num !== this.comic.num) {
            console.log(itemId.num)
            let newData = Object.assign({}, this.comic)
            newData.ratings = this.rating
            this.POST_ratings(newData)
            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Muy Bien',
              text: 'El Comic se calificado',
              showConfirmButton: false,
              timer: 2000
            })
          } else {
            this.$swal({
              position: 'center',
              icon: 'error',
              title: 'Muy mal Error',
              text: 'El Comic ya esta calificado',
              showConfirmButton: false,
              timer: 2000
            })
          }
        })
      } else {
        let newData = Object.assign({}, this.comic)
        newData.ratings = this.rating
        this.POST_ratings(newData)
        this.$swal({
          position: 'center',
          icon: 'success',
          title: 'Muy Bien',
          text: 'El Comic se calificado',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    SET_comic () {
      this.readonlyStatus = false
      this.rating = 0
    }
  },
  watch: {
    rating (newData) {
      if (newData !== 0) {
        this.readonlyStatus = true
        this.POST_newRatings()
      }
    },
    comic () {
      this.rating = 0
      this.readonlyStatus = false
    }
  },
  mounted () {
    this.readonlyStatus = false
    this.GET_comic(this.GET_ramdomId(1000))
  },
  created () {}
}
</script>
<style scoped>
.readonly{
    font-size: 0.8em;
    text-align: center;
}
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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
