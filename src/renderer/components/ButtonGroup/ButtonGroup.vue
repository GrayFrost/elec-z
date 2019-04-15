<template>
  <div id="buttonGroup">
    <button @click="closeWindow">关闭</button>
    <button @click="maxWindow">大小</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNormalSize: true // 是否是正常大小窗口
    };
  },
  methods: {
    closeWindow() {
      this.$electron.ipcRenderer.send("closeWindow");
    },
    maxWindow() {
      if (this.isNormal) {
        this.$electron.ipcRenderer.send("maxWindow");
        this.isNormal = false;
      } else {
        this.$electron.ipcRenderer.send("normalWindow");
        this.isNormal = true;
      }
    }
  }
};
</script>

<style>
#buttonGroup {
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  -webkit-app-region: drag;
}
button {
  -webkit-app-region: no-drag;
}
</style>


