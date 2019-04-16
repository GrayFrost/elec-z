<template>
  <div id="file">
    <section>
      <h5>文件管理</h5>
      <p>学会使用node操作file</p>
    </section>
    <section>
      <h5>点击上传文件</h5>
      <input type="file" name="upload" id="file" @change="changeFile">
      <div class="img-show">
        <img v-if="uploadImg" :src="uploadImg" class="img">
        <span v-else>暂未上传图片</span>
      </div>
    </section>
    <section>
      <h5>拖拽</h5>
      <div class="drop-area" @drop="onDrop" @dragover="onDragOver" @dragenter="onDragEnter">往这拖</div>
      <div class="img-show">
        <img v-if="dropImg" :src="dropImg" class="img">
        <span v-else>暂未上传图片</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadImg: "",
      dropImg: ""
    };
  },
  methods: {
    changeFile({ target: { files } }) {
      console.log(files);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      const that = this;
      fileReader.onload = function() {
        that.uploadImg = this.result;
      };
    },
    onDragOver(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    onDragEnter(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      console.log(files);
      const img = window.URL.createObjectURL(files[0]);
      this.dropImg = img;
    }
  }
};
</script>

<style>
section {
  margin-bottom: 20px;
}
.img {
  width: 100px;
  height: 60px;
}
.drop-area {
  width: 200px;
  height: 100px;
  background-color: #ccc;
}
</style>


