<template>
  <div class="list-item">
    <router-link :to="data.path">{{data.title}}</router-link>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "",
          path: "/"
        };
      }
    }
  }
};
</script>
<style>
</style>


