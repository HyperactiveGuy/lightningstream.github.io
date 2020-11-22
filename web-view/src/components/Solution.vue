<template>
  <div class="solution-wrapper">
    <div class="hint">{{ hint }}</div>
    <input
      placeholder="Lösung eingeben"
      class="input"
      v-model="solution"
      type="text"
    />
    <div class="button-wrapper">
      <button type="button" @click="checkValue()" class="button">Weiter</button>
    </div>
  </div>
</template>


<script>
export default {
    name: "Solution",
    props: ["hint", "value"],

    data: function() {
        return {
            solution: "",
            solutions: require('./solutions.json')
        }
    },
    methods: {
        checkValue() {
            if(this.solution.toLowerCase() === this.solutions[this.value]) {
                         console.log(this.solution.toLowerCase()) 
                this.$router.push("/Access/" + this.value);
            } else {
                this.$router.push("wrong");
            }
        }
    }
}
</script>