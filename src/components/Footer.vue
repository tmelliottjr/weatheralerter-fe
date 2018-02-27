<template>
  <footer>
    <p id='copy'>&copy 2018 Simple Weather Alerts</p>
    <a id="contact" href="mailto:contact@tmelliottjr.com?subject=Simple Weather Alerter">contact@tmelliottjr.com</a>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
  footer{
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

  #contact {
    color: #2c3e50;
    text-decoration: none;
  }

  #contact:hover {
    text-decoration: underline #2c3e50;
  }
</style>
