<template>
  <main>
    <h1>You've successfully subscribed to receive alerts!</h1>
    <h4>What's Next?</h4>
    <p>Every morning at 8:00 EST you'll receive a text message with the day's weather!</p>
    <h4>What if I don't want to receive alerts any longer?</h4>
    <p>Simple! Just reply with the word stop to cancel at anytime, though, why would you want to do that!?</p>
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
