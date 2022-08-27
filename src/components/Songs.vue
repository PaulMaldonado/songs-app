<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 mt-3" v-for="song in songs" :key="song.id">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ song.title }}
                        </h5>

                        <p class="card-text">
                            {{ song.body }}
                        </p>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Songs',

    data() {
        return {
            songs: []
        }
    },

    created() {
        this.showSongs()
    },

    mounted() {
        this.scroll(this.song)
    },

    methods: {
        scroll(song) {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

                if(bottomOfWindow) {
                    axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        console.log(response)
                        song.push(response.data)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    },
        showSongs() {
            for(let i = 0; i < 5; i++) {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        console.log(response)
                        this.songs = response.data
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    },
}
</script>

<style scoped>

</style>