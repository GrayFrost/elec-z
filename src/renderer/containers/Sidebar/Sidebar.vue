<template>
  <div id="sidebar">
    <div class="top">
      <v-avatar />
      <v-nav />
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
</style>


