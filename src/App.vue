<template>
  <div id="app">
    <app-header></app-header>
    <component :is='formComp' @subscribe-success='onSubscribe'></component>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Verify from './components/Verify'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formComp: 'Subscribe'
    }
  },
  components: {
    AppHeader: Header,
    AppFooter: Footer,
    Subscribe: Subscribe,
    Verify: Verify,
  },
  methods: {
    onSubscribe () {
      this.formComp = 'Verify'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #FDFDFD;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
