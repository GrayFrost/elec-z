<template>
  <div id="HomePage">
    <input type="file" name="upload" id="file" @change="changeFile">
    <el-button size="small" @click="selectFile">调用系统弹出框</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    changeFile({ target: { files } }) {
      console.log(files);
    },
    selectFile(){
      this.$electron.ipcRenderer.send("select-file");
    }
  }
};
</script>

<style>
</style>


