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

html {
  min-height: 100%;
  position: relative;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
    background-color: #FDFDFD;
    margin-bottom: 100px;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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

.form-input:focus {
  outline-width: 0;
  border-bottom-width: 2px;
  border-color: #3ad1a4;
  transition: all .25s ease;
}

#subscribe:hover
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
#subscribe:hover:before, #subscribe:hover:after
{
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:50%;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
#subscribe:hover:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

</style>
