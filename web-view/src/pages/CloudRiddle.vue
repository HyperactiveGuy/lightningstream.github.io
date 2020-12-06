<template>
  <div id="access">
    <div class="card overwrite">
      <Solution :hint="hint" value="1327750"></Solution>
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
      hint: "{C-2} => {WHAT?} = {WHAT}{T-2}",
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
  background-image: url("../assets/images/riddle_4.png");
}
/deep/ .button  {
    color: rgba(3, 4, 3, 0.65);
}
.solution-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
}

</style>