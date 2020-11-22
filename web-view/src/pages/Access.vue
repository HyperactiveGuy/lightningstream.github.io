<template>
  <div id="access">
    <div class="card overwrite">
      <Solution :hint="marvinHint" value="1234567"></Solution>
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
      marvinHint: "{{M-2}}",
      solution: ""
    };
  },
  methods: {
    checkValue() {
    }
  }
};
</script>

<style>

.overwrite {
  background-image: url("../assets/images/riddle_1.png");
}
</style>