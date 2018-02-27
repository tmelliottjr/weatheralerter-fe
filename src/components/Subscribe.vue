<template>
  <main>
    <h1>Subscribe</h1>
    <img v-show='showLoader' src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif" alt="">
    <div class="form-container">
        <form @submit.prevent="submitForm">
          <p v-show='submitErrors'>Fix the errors</p>
          <input v-model='zipCode' @input='submitted = false' type="text" placeholder="Zip Code">
          <p v-show='zipCode && !validZip'>Not working</p>
          <input v-model='phoneNumber' @input='submitted = false' type="text" placeholder="Phone Number">
          <p v-show='phoneNumber && !validPhone'>Not working</p>
          <input type='submit' value='Subscribe'>
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
  
  .form-container {
    display: flex;
    flex-direction: column;
  }
</style>
