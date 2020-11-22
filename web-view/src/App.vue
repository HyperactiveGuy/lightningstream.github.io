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
}

</script>
<style >
@import url("global.css");
#app {
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 70px;
  background-color: black;
  width: 100vw;
  height: calc(100vh - 80px);
  font-weight: bold;
  font-size: 20px;
  color: rgba(0,0,0,0.85);
}
body {
  margin:0;
  padding: 0;
  background-color: black;
}
</style>
