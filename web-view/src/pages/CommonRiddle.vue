<template>
  <div id="access">
    <div class="card overwrite">
      <Solution :hint="lukasHint" value="1589115"></Solution>
    </div>
  </div>
</template>

<script>
import Solution from '../components/Solution.vue';
export default {
  name: "Access",
  components: {Solution},
  data: function () {
    return {
      lukasHint: "Ein Wort = Eine Zahl. Findet die Gemeinsamkeit.",
      solution: ""
    };
  },
  methods: {
    checkValue() {
    }
  }
};
</script>

<style scoped>

.overwrite {
  background-image: url("../assets/images/riddle_5.png");
}
/deep/ .button  {
    color: rgba(159, 123, 85, 0.65);
}
.solution-wrapper {
  background-color: rgba(159, 123, 85, 0.65);
}

</style>