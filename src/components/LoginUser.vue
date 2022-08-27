<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
                  <div class="card shadow-lg">
                      <div class="card-header">Iniciar sesión</div>

                      <div class="card-body">
                          <form @submit.prevent="login">
                            <div class="form-group">
                                  <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                      <div class="form-group">
                                          <label>Correo electrónico: </label>
                                          <input type="email" id="email" class="form-control" placeholder="email@gmail.com" v-model="email">
                                      </div>
                                  </div>
                              </div>

                              <div class="form-group">
                                  <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                                      <div class="form-group">
                                          <label>Contraseña: </label>
                                          <input type="password" id="password" class="form-control" placeholder="Contraseña" v-model="password">
                                      </div>
                                  </div>
                              </div>

                              <router-link to="/forgot-password" class="mt-4">¿Has olvidado tu Contraseña</router-link>

                              <div class="d-grid gap-2">
                                  <input type="submit" value="Iniciar sesión" class="btn btn-primary mt-3">
                              </div>
                          </form>
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
    name: 'LoginUser',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user

                    if(user) {
                        this.$router.push('/Dashboard')
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>

</style>