<script setup>
import { ref } from 'vue'

const quote = ref("")
const author = ref("")

// Function to fetch random quote from Express API
async function getRandomQuote() {
  try {
    quote.value = "Fetching from https://vue-js-31ga.onrender.com/";
    const res = await fetch("https://vue-js-31ga.onrender.com/")
    const data = await res.json()

    console.log(data);

    const randomValue = data[Math.floor(Math.random() * data.length)];

    quote.value = randomValue.quote
    author.value = randomValue.author

  } catch (err) {
    console.error("Error fetching quote:", err)
  }
}

// Load a quote when component starts
getRandomQuote()
</script>

<template>
  <main>
    <section>
      <p>{{ quote }}</p>
      <span>{{ author }}</span>
    </section>

    <button @click="getRandomQuote">Another</button>
  </main>
</template>

<style scoped>
    main{
        background:#ccd6d9;
        max-width:90%;
        border-radius: 0 15px 0 15px;
        padding: 35px;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap:10px;
    }

    section{
        display:flex;
        width:100%;
        flex-direction:column;
        gap:10px;
        margin-bottom:25px;
    }

   p{
    font-weight:bold;
    font-style:italic;
    font-size:2rem;
    text-align:left;
   }

   p::before{
    content:'""';
    }

    p::after{
    content:'""';
   }

   span{
    align-self:end;
    color:#406473;
   }

   span::before{
    content: "- ";
   }

   button{
    background: #406473;
    color:white;
    padding:10px;
    border:0;
    font-size:1.2rem;
    border-radius: 0 5px 0 5px;
    font-weight:bold;
    margin-top: 20px;
    cursor:pointer;
    transition: transform 0.2s;
   }

   button:hover{
    transform: scale(1.05);
   }
</style>
