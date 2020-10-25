<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      queryParameters: require('../../queryParameters.json')
    }
  },
  mounted() {
    console.log(this.queryParameters)

    if(this.checkQueryParameters()) {
      let sessionToken = "12345";
      this.$router.push({path: `Access/${sessionToken}`});
    }
  },
  methods: {
    checkQueryParameters() {

      for(let i = 0; i < this.queryParameters.parameters.length; i++) {
        let queryParameter = this.queryParameters.parameters[i];
        let queryValueForKey = this.$route.query[queryParameter.key]

        console.log(queryValueForKey)
        //Check if either the required list value is not in the query url or if the query value is wrong (when value != value of the list parameter)
        if(!queryValueForKey || queryValueForKey !== queryParameter.value)
          return false;    
      }
      return true;
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
