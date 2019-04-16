<template>
  <div id="sidebar">
    <div class="top">
      <v-avatar/>
      <v-nav/>
    </div>
    <div class="bottom">bot</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar";
import Nav from "@/components/Nav/Nav";
export default {
  components: {
    "v-avatar": Avatar,
    "v-nav": Nav
  }
};
</script>

<style>
#sidebar {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
}
.top,
.bottom {
  width: 100%;
  text-align: center;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


