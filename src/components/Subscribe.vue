<template>
  <main>
        <div class="form-container">
        <form class='subscribe-form' @submit.prevent="submitForm">
          <h1>Subscribe</h1>
          <p class='form-error' v-for="error in formErrors" :key="error" >{{error}}</p>
          <div class="form-group">
            <label for='zip-code'>Zip Code</label>
            <input 
              class='form-input' 
              id='zip-code' 
              v-model='zipCode' 
              @input='submitted = false' 
              pattern='[0-9]*'
              maxlength="5">
            <span class='form-error input' :class='{show: (zipCode && !validZip) || (submitted && !zipCode)}'>Invalid zip code.</span>
          </div>
          <div class="form-group">
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
            <input class='input-button' id='subscribe' type='submit' value='SUBSCRIBE'>
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
      zipCode: '',
      phoneNumber: '',
      formErrors: [],
      submitted: false,
      showLoader: false,
    }
  },
  methods: {
    submitForm (e){
      if (this.submitted) return;
      
      this.submitted = true;
      this.formErrors = [];

      if (!this.validPhone || !this.validZip){
        this.formErrors.push('Please correct the errors to subscribe.');
        return;
      }

      //this.showLoader = true

      axios.post(API_URL+'/subscribe', {
        'zip_code': this.zipCode,
        'phone_number': this.phoneNumber,
      }).then(r => {
        if (r.status === 200 ){         
          stateBus.previousState = this.phoneNumber; 
          this.$router.push({name: 'verify'})
        } else {
          this.formErrors.push('An unexpected error has ocurred.');
        } 
      }).catch(err => {
        // TODO: Get actual return error
        this.formErrors.push('An error has ocurred please try again.')
        this.showLoader = false;
      })
    }
  },
  computed: {
    validZip () {
      return /^\d{5}(-\d{4})?$/.test(this.zipCode);
    },
    validPhone () {
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.phoneNumber);
    },
    submitErrors () {
      return this.submitted && (!this.validPhone || !this.validZip)
    }
  }
}
</script>

<style>
  .form-container {
    display: flex;
    justify-content: center;
    margin: 30px 0 60px 0;
  }
  
  .subscribe-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
