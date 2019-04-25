<template>
  <div id="HomePage">
    <input type="file" name="upload" id="file" @change="changeFile">
  </div>
</template>

<script>
export default {
  methods: {
    changeFile({ target: { files } }) {
      console.log(files);
    }
  }
};
</script>

<style>
</style>


