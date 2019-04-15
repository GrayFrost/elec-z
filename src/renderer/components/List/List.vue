<template>
  <div id="list">
    <v-list-item v-for="(list, index) in lists" :key="index" :data="list"/>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem/ListItem";
export default {
  props: {
    lists: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  components: {
    "v-list-item": ListItem
  }
};
</script>
<style>
#list {
  width: 100%;
  height: 100%;
}
</style>