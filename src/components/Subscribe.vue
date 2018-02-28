<template>
  <main>
    <h1>Subscribe</h1>
    <img v-show='showLoader' src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif" alt="">
    <div class="form-container">
        <form class='subscribe-form' @submit.prevent="submitForm">
          <p class='form-error' v-show='submitErrors'>Fix the errors</p>
          <div class="form-group">
            <label for='zip-code'>Zip Code</label>
            <input id='zip-code' v-model='zipCode' @input='submitted = false' type="text">
            <p class='form-error input' v-show='zipCode && !validZip'>Invalid zip code.</p>
          </div>
          <div class="form-group">
            <label for='phone-number'>Phone Number</label>
            <input id='phone-number' name='phone-number' v-model='phoneNumber' @input='submitted = false' type="text">
            <p class='form-error input' v-show='phoneNumber && !validPhone'>Invalid phone number.</p>
          </div>
          <div class="form-group">
            <input id='subscribe' type='submit' value='Subscribe'>
          </div>
          
      </form>
    </div>
  </main>
</template>

<script>

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

      if (!this.validPhone || !this.validZip) return;

      this.showLoader = true

      axios.post('http://10be85ac.ngrok.io/subscribe', {
        'zip_code': this.validZip,
        'phone_number': this.phoneNumber,
      }).then(r => {
        r.status === 200 
          ? this.$emit('subscribe-success', 'Success')  
          : this.formErrors.push('An unexpected error ocurred.')
      }).catch(err => {
        // TODO: Get actual return error
        this.formErrors.push('An error ocurred try again.')
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

  main {
    margin-bottom: 60px;
  }

  .form-container {
    display: flex;
    justify-content: center;
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

  #subscribe {
    width: 100px;
    height: 30px;
    cursor: pointer;
  }

  input[type='text'] {
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
  }
</style>
