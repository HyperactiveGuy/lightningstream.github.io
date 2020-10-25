<template>
  <div class="wrong_answer">
    <img src="../assets/images/red_cross.svg"/>
    <p class="error">
      {{randomMessage}} <br/> Versucht es nochmal!
    </p>
  </div>
</template>


<script>
export default {
  name: 'WrongAnswer',
  data() {
    return {
      messages: [
        "Oh... das ist wohl leider falsch.",
        "Netter Versuch, doch nicht richitg.",
        "Ist das alles, was ihr drauf habt?",
        "Das war ein lustiger Versuch.",
        "Nein, nein, nein...",
        "Habt ihr das wirklich gedacht?",
        "Nein, das ist es nicht.",
        "Satz mit X, ach ihr wisst schon.",
        "Nope."
      ],
      randomMessage: ""
    }
  },
  created() {
    //Set a new random text from the list above
    let randomIndex = (Math.random() * this.messages.length-1).toFixed()
    this.randomMessage = this.messages[randomIndex];
  }
}

</script>


<style>
.error {
  font-size: 30px;
}
</style>