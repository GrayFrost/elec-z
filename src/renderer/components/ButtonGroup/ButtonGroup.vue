<template>
  <div id="buttonGroup">
    <el-button size="small" @click="hideWindow">隐藏</el-button>
    <el-button size="small" @click="maxWindow">大小</el-button>
    <el-button size="small" @click="closeWindow"><i class="el-icon-close"></i></el-button>
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
    },
    hideWindow() {
      this.$electron.ipcRenderer.send("hideWindow");
    }
  }
};
</script>

<style>
#buttonGroup {
  width: 100%;
  -webkit-app-region: drag;
  border-bottom: 1px solid #eee;
}
button {
  -webkit-app-region: no-drag;
}
</style>


