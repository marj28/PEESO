<template>
  <v-container>
    <div class="login-section">
      <div class="heading pa-6" >
          <h1>Welcome to PEESO</h1>
          <p>Sign in to continue</p>
      </div>
      <div class="login-form">
        <v-card-text>
          <p class="pa-2 mt-4 form-input">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              label="Username"
              required
              outlined
            ></v-text-field>
          </p>
          <p class="pa-2 mt-4 form-input">
            <v-text-field
              v-model="password"
              :rules="nameRules"
              label="Password"
              type="password"
              required
              outlined
              style="margin-top: -20px"
            ></v-text-field>
          </p>
        </v-card-text>
        <v-card-actions class="pt-4 pb-5 mt-0 pa-12 action-button" >
          <v-btn
            color="success"
            block
            rounded
            x-large
            @click="validate"
            style="margin-top: -20px"
            class="pa-8 login-button"
          >
            LOGIN
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-container>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
      valid: true,
      username: '',
      nameRules: [
        v => !!v || 'Field is required'
      ],
      password: '',
      snackbar: false,
    }),
    created() {
      this.setLoggedIn(false)
    },
    methods: {
      ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn']),
      validate () {
        if (this.$refs.form.validate()) {
          this.login()
        }
      },
      login(){
         this.setAlertColor('success')
          this.setAlertText('Login')
          this.setAlert(true)
          setTimeout(()=> { 
            this.$router.push('/dashboard')
          }, 800)
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    items: [
      {
        // src: require("../assets/ban2.png")
      }
    ]
  } 
</script>
<style scoped>

v-container{
  background: url('/src/assets/cityhall.jpg') no-repeat center / cover;
  background-size: auto;
}

.login-section{
    height: 74vh;
    width: 100%;
    max-width: 500px;
    background: rgb(255, 255, 255, 0.9);
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    margin: auto;
    border-top-left-radius: 46px;
    border-top-right-radius: 46px;
    color: rgb(26, 80, 26);
}
.heading {
    margin-top: 20px;
}
.heading h1{
        font-size: 1.6rem;
        font-weight: bolder;
}
.heading p{
        margin-top: 20px;
        font-size: 1rem;
        color: #050404;
}
.login-form .form-input{
    position: relative;
    margin-bottom: 10px;
    
}
.login-form .form-input ion-item::part(native){
    padding-left: 0;
    background: rgb(255, 255, 255, 0.2);
}
.login-form .form-input ion-icon{
    position: absolute;
    top: 37px;
    z-index: 2;
    font-size: 1.2rem;
    left: 5px;
}
.login-form .form-input ion-label{
    position: absolute;
    margin-left: 35px;
    font-weight: bolder;
    font-size: 0.8rem;
    top: 3px;
    color: rgb(9, 85, 9);
}
.login-form .form-input ion-input{
    font-size: 0.9rem;
    --padding-start: 36px;
    --pading-top: 36px;
    top: 5px;
    color: #7b7b7b;
}
.action-button{
    text-align: center;
}
.action-button .login-button{
    --background: rgb(9, 85, 9);
    width: 100%;
    font-weight: bold;
}
.action-button .forgot-button{
    --background: rgb(247, 251, 247);
    width: 40%;
    color: rgb(9, 85, 9);
}

.action-button p{
    margin-top: 15px;
    font-size: 1rem;
    color: #000000;
}
.action-button .signup-button{
    --border-color: rgb(9, 85, 9);
    color: rgb(9, 85, 9);
    font-weight: bold;
    width: 100%;
    margin-top: 40px;
}

</style>