<template>
<div>
</div>
</template>


<script>

export default {
  name: 'CheckLogin',
  data: function() {
    return {
      queryParameters: require('../../../queryParameters.json'),
    }
  },
  mounted() {
      console.log("moi")
    if(this.$route.path === "/Wrong")
      return;
    else if(this.$route.path.includes("/Access")) {
      //check if session key is right
      console.log("Access")
    } else if(this.checkLoginQueryParameters()) {
      this.$router.push({path: `Access/123456`});
    } else {
      this.$router.push({path: "Wrong"});
    }
  },
  methods: {
    checkLoginQueryParameters() {
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
  padding-top: 70px;
  background-color: black;
  width: 100vw;
  height: calc(100vh - 80px);
  font-weight: bold;
}
body {
  margin:0;
  padding: 0;
  background-color: black;
}
</style>
