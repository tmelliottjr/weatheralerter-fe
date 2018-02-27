<template>
  <main>
    <h1>Verify</h1>
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
    }
  },
  methods: {
    submitForm (e){
      this.submitted = true;
      if (!this.validPhone || !this.validZip) return;

      axios.post('http://10be85ac.ngrok.io/subscribe', {
        'zip_code': this.validZip,
        'phone_number': this.phoneNumber,
      }).then(r => {
        console.log(r)
        this.$emit('subscribe-success', 'yay!')
      }).catch(err => {
        console.log(err)
      })
      
      console.log('Subscribing...');

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

</style>
