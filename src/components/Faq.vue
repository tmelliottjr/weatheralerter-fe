<template>
  <section id='faq-container'>
      <ul>
        <li class='faq-item'>
          <h2 class='faq-q'>What is this?</h2>
          <p class='faq-a'>Great question! This is a simple pet project I put together to help better my understanding of Vue.js and Flask. I wanted to focus on creating an SPA and a dedicated API backend.</p>
        </li>
        <li class='faq-item'>
          <h2 class="faq-q">How does it work?</h2>
          <p class="faq-a">Simple! Just enter your zip code and phone number. After verifying the phone number belongs to you, every morning at 7:00 EST you'll receive a text message with the day's forecast!</p>
        </li>
        <li>
          <h2 class="faq-q">
            What if I don't want to receive alerts anymore?
          </h2>
          <p class='faq-a'>
            Not a problem! Simply reply 'stop' at anytime, though I hope you'll reconsider.
          </p>
        </li>
      </ul>    
  </section>
</template>

<script>
export default {

}
</script>

<style>
.faq-q
{
  color: #f2a359;
}

.faq-a 
{
  font-size: 18px;
}

#faq-container
{
  display: flex;
  justify-content: center;
  text-align: left;
}

.faq-item
{
  display: block;
  margin-bottom: 25px;
}
</style>
