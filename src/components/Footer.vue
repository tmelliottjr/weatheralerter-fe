<template>
  <footer>
    <p id='copy'>
      &copy 2018 
      <router-link class='footer-link' :to="{ name: 'home' }">Simple Weather Alerts</router-link>      
    </p>
    <div class="footer-links">
    <router-link class='footer-link' :to="{ name: 'faq' }">FAQ</router-link> |
    <a class='footer-link' id="contact" href="mailto:contact@tmelliottjr.com?subject=Simple Weather Alerter">Contact</a>
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style>
  footer
  {
    width: 100%;
    height:60px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: #a7e6d3;
  }
</style>
