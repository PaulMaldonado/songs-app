<template>
  <div>
   <div class="container mt-4">
     <div class="row">
       <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
         <div class="card shadow-lg">
           <div class="card-header">Recuperar Contraseña</div>

           <div class="card-body">
             <form @submit.prevent="forgotPassword">
                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div class="form-group">
                    <label>Correo electrónico: </label>
                    <input type="email" name="email" id="email" placeholder="email@mail.com" class="form-control" v-model="email">
                  </div>
                </div>

                <div class="d-grid gap-2">
                  <input type="submit" value="Recuperar contraseña" class="btn btn-primary mt-3">
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
    name: 'PasswordReset',

    data() {
      return {
        email: ''
      } 
    },

    methods: {
      forgotPassword() {
        firebase.auth().sendPasswordResetEmail(this.email)
          .then(() => {
            alert('Verifica tu correo elctrónico para recuperar tu contraseña')

            this.email = ''
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
}
</script>

<style scoped>

</style>