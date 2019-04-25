<template>
  <div id="app">
    <v-button-group />
    <div>
      <h2>内容</h2>
      <p>决定做一个markdown转换的小项目</p>
    </div>
    <div id="contentWrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
export default {
  name: "elec-z",
  data(){
    return {
      lists: []
    }
  },
  components: {
    'v-button-group': ButtonGroup
  }
};
</script>

<style lang="scss">
$sidebar-width: 60px;
* {
  // box-sizing: border-box;
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
</style>
