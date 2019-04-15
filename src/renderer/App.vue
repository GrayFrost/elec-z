<template>
  <div id="app">
    <div id="sidebar">123</div>
    <div id="list">123</div>
    <div id="contentWrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "elec-z"
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  position: relative;
}
#sidebar {
  width: 50px;
  height: 100%;
  background: orange;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
#list {
  width: 200px;
  height: 100%;
  background: pink;
  position: absolute;
  top: 0;
  left: 50px;
  bottom: 0;
}
#contentWrapper {
  flex: 1;
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  bottom: 0;
}
</style>
