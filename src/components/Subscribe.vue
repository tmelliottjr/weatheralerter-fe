<template>
  <main>
    <h1>Subsribe</h1>
    <img v-show='showLoader' src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif" alt="">
    <div class="form-container">
        <form class='subscribe-form' @submit.prevent="submitForm">
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

      axios.post('http://127.0.0.1:5000/subscribe', {
        'zip_code': this.zipCode,
        'phone_number': this.phoneNumber,
      }).then(r => {
        if (r.status === 200 ){         
          stateBus.previousState = this.phoneNumber; 
          this.$router.push({name:'verify'})
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
  img{
    height: 100px;
    width: 100px;
  }

  .form-container {
    display: flex;
    justify-content: center;
    margin: 60px 0 60px 0;
  }
  
  .subscribe-form {
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

  .form-input {
    text-align: center;
    width: 150px;
    height: 30px;
    background: transparent;
    border: none;
    border-bottom: solid 1px #aaa;
    font-size: 20px;
  }

  .form-error{
    color:rgb(230, 81, 81);
  }

  .form-error.input {
    font-size: 12px;
    text-align: left;
    margin-top: 2px;
    visibility: hidden;
  }
  label {
    font-weight: bold;
    letter-spacing: 2px;
  }

</style>
