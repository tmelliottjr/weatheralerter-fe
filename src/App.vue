<template>
  <div id="app">
    <app-header></app-header>
    <main id='container'>
      <div id="content-left">
        <faq></faq>
      </div>
      <div id="content-right">
        <div id="form-links">
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Subscribe</router-link>
            </li>
            <li>
               <router-link :to="{ name: 'verify' }">Verify</router-link>              
            </li>
          </ul>
        </div>
        <transition name='fade' mode='out-in'>
          <router-view></router-view>
          <!-- <component :is='formComp' :phoneNumber=phoneNumber @subscribe-success='onSubscribe'></component> -->
        </transition>
      </div>
    </main>

    <!-- <transition name='fade' mode='out-in'>
      <router-view :phoneNumber=phoneNumber></router-view>
    </transition> -->
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Verify from './components/Verify'

export default {
  name: 'app',
  data () {
    return {
      formComp: 'Subscribe',
      data: '',
      phoneNumber: ''
    }
  },
  components: {
    AppHeader: Header,
    AppFooter: Footer,
    Subscribe: Subscribe,
    Verify: Verify,
    Faq: Faq
  },
  methods: {
    onSubscribe (data) {
      this.formComp = 'verify'
      this.phoneNumber = data;
    }
  }
}
</script>

<style>

:focus {outline:none;}
::-moz-focus-inner {border:0;}

html {
  min-height: 100%;
  position: relative;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body 
{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #FDFDFD;
    margin-bottom: 100px;
}

#app 
{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}

h1, h2 
{
  font-weight: normal;
}

ul 
{
  list-style-type: none;
  padding: 0;
}

li 
{
  display: inline-block;
  margin: 0 10px;
}

 a
  {
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover 
  {
    border-bottom: 1px solid #3ad1a4;
  }


#container{
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  width: 960px;
}

#content-left
{
  margin: 90px 0 0 0;
  width: 60%;
}

#content-right
{
  width: 40%;
  margin: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-input 
{
  text-align: center;
  width: 150px;
  height: 30px;
  background: transparent;
  border: none;
  border-bottom: solid 1.5px #aaa;
  transition: all .5s;
  font-size: 20px;
}

.form-error{
  color:rgb(230, 81, 81);
}

.form-error.input 
{
  transition: all .5s;
  font-size: 12px;
  text-align: left;
  margin-top: 2px;
  opacity: 0;
}

label 
{
  font-weight: bold;
  letter-spacing: 2px;
}

.form-input:focus 
{
  outline-width: 0;
  border-color: #3ad1a4;
}

.input-button
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    transition: all .5s ease;
        -webkit-appearance: none;
    width: 100px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    background-color: #a7e6d3;
    color:rgb(113, 156, 156);
    font-weight: bold;
    letter-spacing: 1px;
}
.input-button:hover:before, .input_button:hover:after
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
.input-button:hover:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

.router-link-exact-active{
  border-bottom: 1px solid #3ad1a4;
}

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
  }

  .show {
    opacity: 1 !important;
  }

.input-button:hover 
{
  color:rgb(15, 107, 72);
  transform: translateY(3px)
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 1200px){
  #content-right{
    margin: 80px 0 0 -65px;
  }
  #content-left{
    width: 60%;
    margin: 90px 0 0 65px;
  }
}

@media screen and (max-width: 900px){
  #content-right, #content-left{
    width: 100%;
  }

  #content-right{
    margin: 80px 0 0 0;
  }

  #content-left{
    margin: 25px 0 0 0;
  }

  #container {
    width: 90%;
  }
}


</style>
