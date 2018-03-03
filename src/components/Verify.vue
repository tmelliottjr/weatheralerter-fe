<template>
  <main>
    <img v-show='showLoader' src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif" alt="">
    <div class="form-container">
        <form class='verify-form' @submit.prevent="submitForm">
          <h1>Verify</h1>
          <p class='form-error' v-for="error in formErrors" :key="error" >{{error}}</p>
          <div v-if="showPhone" class="form-group">
            <label for='phone-number'>Phone Number</label>
            <input 
              class='form-input' 
              id='phone-number' 
              name='phone-number' 
              v-model='phoneNumber' 
              @input='submitted = false' 
              type="tel"
              maxlength="10">
            <span class='form-error input' :class='{show: (phoneNumber && !validPhone) || (submitted && !phoneNumber)}'>Invalid phone number.</span>
          </div>
          <div class="form-group">
            <label for='verify-code'>Verify Code</label>
            <input 
              class='form-input' 
              id='verify-code' 
              v-model='verifyCode' 
              @input='submitted = false' 
              pattern='[0-9]*'
              maxlength="6" autofocus>
            <span class='form-error input' :class='{show: (verifyCode && !validCode) || (submitted && !verifyCode)}'>Invalid verify code.</span>
          </div>
          <div class="form-group">
            <input class='input-button' id='verify' type='submit' value='VERIFY'>
          </div>          
      </form>
    </div>
  </main>
</template>

<script>

// TODO: Move error feedback logic to methods
// TODO: Streamline form clear/formErrors
// TODO: Move reusable CSS to global scope
import { stateBus } from '../main'
import axios from 'axios'

export default {
  data () {
    return{
      verifyCode: '',
      formErrors: [],
      submitted: false,
      showLoader: false,
      phoneNumber: '',
      showPhone: false,
    }
  },
  methods: {
    submitForm (e){
      if (this.submitted) return;
      
      this.submitted = true;
      this.formErrors = [];

      if (!this.validCode){
        this.formErrors.push('Please correct the errors to subscribe.');
        return;
      }

      //this.showLoader = true

      axios.post('http://localhost:5000/verify', {
        'verification_code': this.verifyCode,
        'phone_number': this.phoneNumber
      }).then(r => {
          // TODO: Success message
          this.$router.push({name: 'subscribe-success'})
      }).catch(err => {
        // TODO: Get actual return error
        this.formErrors.push('Unable to verify account, please try again.')
        this.showLoader = false;
      })
    }
  },
  computed: {
    validCode () {
      return /^\d{6}$/.test(this.verifyCode);
    },
    validPhone () {
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.phoneNumber);
    },
    submitErrors () {
      return this.submitted && (!this.validCode || !this.validPhone)
    }
  },
  created () {
    try {
      this.phoneNumber = stateBus.previousState;
    } catch (e) {
      this.phoneNumber = null;
    }    
    this.showPhone = this.phoneNumber ? false : true
  },
  destroyed () {
    stateBus.previousState = ''
  }
}
</script>

<style>
  img{
    height: 100px;
    width: 100px;
  }

  .form-container {
    display: flex;
    justify-content: center;
    margin: 60px 0 60px 0;
  }
  
  .verify-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
  }

  .show {
    visibility: visible !important;
  }
</style>
