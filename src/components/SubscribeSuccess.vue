<template>
  <main>
    <h1>You've successfully subscribed to receive alerts!</h1>
    <faq></faq>
  </main>
</template>

<script>

// TODO: Move error feedback logic to methods
// TODO: Streamline form clear/formErrors
// TODO: Move reusable CSS to global scope
import { stateBus } from '../main'
import Faq from '../components/Faq.vue'
import axios from 'axios'

export default {
  data () {
    return{

    }
  },
  components: {
    Faq: Faq
  }

}
</script>

<style>
.faq-question {
  height: 100;
}
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
