<template>
  <div id="access">
    <div class="card overwrite">
      <Solution :hint="robinHint" value="6047672"></Solution>
      <div class="computer_text">
        <div class="terminal">Terminal V. 1.72</div>
        Ich glaube mein Computer kann nicht mit Dezimalzahlen arbeiten...
        <div class="numbers">
          12 9 77 56 19 14 3 7 8 1 -2 -5 129 28 74 36 21 0 16
          37 84 26 13 66 59 72 85 27 8 86 46 62 92 100 79 5 45 44 40 65 60 53 12
          28 94 56 78 54 67 61 38 98 64 17 80 32 2 9 10 48 55 96 25 24 3 47 69
        </div>
        <div class="terminal">C:\</div>
      </div>
    </div>
  </div>
</template>

<script>
import Solution from "../components/Solution.vue";
export default {
  name: "Access",
  components: { Solution },
  data: function () {
    return {
      robinHint: "Ein realisitscher Wert für {{R-2}}.",
      solution: "",
    };
  },
  methods: {
    checkValue() {},
  },
};
</script>

<style scoped>
.overwrite {
  background-image: url("../assets/images/riddle_2.png");
}

.numbers {
  margin-top: 20px;
  line-height: 25px;
}

.terminal {
  margin-top: 20px;
  margin-bottom: 20px;

}

.computer_text {
  text-align: left;
  margin-top: 500px;
  position: absolute;
  font-family: "Gameplay";
  font-weight: lighter;
  font-size: 15px;
  color: rgba(71, 149, 65, 0.85);
  padding: 20px;
}
</style>

