<template>
  <div id="access">
    <div class="card overwrite">
      <Solution :hint="lukasHint" value="1831427"></Solution>
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
      lukasHint: "Normalerweise ist in {T-3} deine {M-3} nicht von großer Bedeutung. Drei Buchstaben für das echte {T-3}.",
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
  background-image: url("../assets/images/riddle_6.png");
}
/deep/ .button  {
    color: rgba(11, 23, 89, 0.65);
}
.solution-wrapper {
  background-color: rgba(11, 23, 89, 0.65);
}

</style>