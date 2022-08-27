<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
          <div class="card shadow-lg">
            <div class="card-header">Datos del usuario</div>

            <div class="card-body">
              <p>
                {{ user.email }} - {{ user.displayName }}
              </p>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-danger" @click="logout">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'HomeUser',

    data() {
      return {
        user: null
      }
    },

    created() {
      this.showDataUser()
    },

    methods: {
      showDataUser() {
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            this.user = user
          } else {
            this.user = null
          }
        })
      },

      logout() {
        firebase.auth().signOut()
          .then(() => {
            firebase.auth().onAuthStateChanged(() => {
              this.$router.push('/')
            })
          })
      }
    }
}
</script>

<style>

</style>