<template>
  <div class="wrong_answer">

    <img id="cross" src="../assets/images/red_cross.svg"/>
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
        "Netter Versuch, doch nicht richtig.",
        "Ist das alles, was ihr drauf habt?",
        "Das war ein lustiger Versuch.",
        "Nein, nein, nein...",
        "Habt ihr das wirklich gedacht?",
        "Nein, das ist es nicht.",
        "Satz mit X, ach ihr wisst schon.",
        "Noch einmal und ich verrate ein peinliches Geheimnis von einem.",
        "War das ein Vorschlag von unserem Wuschelkopf?",
        "Die Idee kam hoffentlich nicht vom Bigbrain...",
        "Wollte das die kleine Verrückte?",
        "Nur weil dein Kopf rot ist, bist du nicht on fire.",
        "Eine Runde Mittleid für unseren Gosu.",
        "Das Parkhaus hat angerufen, sie wollen ihre schlechten Ideen zurück.",
        "Sogar die Puppen haben einen besseren Einfall als du. Ach übrigens. Sie stehen hinter dir!"
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
  font-size: 35px;
  color: #090606;
  display: block;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 90px;
}
#cross  {
  margin-top: 170px;
}
.wrong_answer {
  background-image: url("../assets/images/icy_background.png");
  background-repeat: no-repeat;
  height: 800px;
  width: 600px;
  margin: auto;
  border-radius: 20px;
}
</style>