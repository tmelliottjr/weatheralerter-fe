<template>
  <section>
    <div class="faq-container">
      <ul>
        <li class='faq-item'>
          <h2 class='faq-q'>What is this?</h2>
          <p class='faq-a'>Great question! This is just a simple pet project of mine, to help practice some core fundementals. I wanted to focus on decoupling the frontend (Vue.js) from the backend (Flask).</p>
        </li>
        <li class='faq-item'>
          <h2 class="faq-q">How does it work?</h2>
          <p class="faq-a">Simple! You enter your zip code and phone number and after verifying the phone number belongs to you, every morning at 8:00 EST you'll receive a text message with the day's weather!</p>
        </li>
        <li>
          <h2 class="faq-q">
            What if I don't want to receive alerts anymore?
          </h2>
          <p class='faq-a'>
            I'm not sure how anyone could feel that way, but if you do, just reply 'stop'.
          </p>
        </li>
      </ul>
    </div>
    
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

.faq-container
{
  max-width: 60%;
  text-align: left;
}

section 
{
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.faq-item
{
  display: block;
  margin-bottom: 25px;
}
</style>
