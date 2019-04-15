<template>
  <div id="app">
    <div id="sidebarWrapper">
      <v-sidebar />
    </div>
    <div id="listWrapper">123</div>
    <div id="contentWrapper">
      <v-button-group />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/containers/Sidebar/Sidebar';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
export default {
  name: "elec-z",
  components: {
    'v-sidebar': Sidebar,
    'v-button-group': ButtonGroup
  }
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
#sidebarWrapper {
  width: 60px;
  height: 100%;
  background: #25282d;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
#listWrapper {
  width: 250px;
  height: 100%;
  background: #e9e7e8;
  position: absolute;
  top: 0;
  left: 60px;
  bottom: 0;
}
#contentWrapper {
  flex: 1;
  position: absolute;
  top: 0;
  left: 310px;
  right: 0;
  bottom: 0;
}
</style>
