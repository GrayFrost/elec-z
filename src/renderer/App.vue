<template>
  <div id="app">
    <div id="sidebarWrapper">
      <v-sidebar />
    </div>
    <div id="listWrapper">
      <v-list :lists="lists" />
    </div>
    <div id="contentWrapper">
      <v-button-group />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/containers/Sidebar/Sidebar';
import List from '@/components/List/List';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
export default {
  name: "elec-z",
  data(){
    return {
      lists: []
    }
  },
  components: {
    'v-sidebar': Sidebar,
    'v-list': List,
    'v-button-group': ButtonGroup
  }
};
</script>

<style lang="scss">
$sidebar-width: 60px;
$center-list-width: 250px;
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  position: relative;
}
#sidebarWrapper {
  width: $sidebar-width;
  height: 100%;
  background: #25282d;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
#listWrapper {
  width: $center-list-width;
  height: 100%;
  background: #e9e7e8;
  position: absolute;
  top: 0;
  left: $sidebar-width;
  bottom: 0;
}
#contentWrapper {
  position: absolute;
  top: 0;
  left: $sidebar-width + $center-list-width;
  right: 0;
  bottom: 0;
}
</style>
