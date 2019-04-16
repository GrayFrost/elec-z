# elec-z

A electron project

# 第一步

在 main 文件夹 index.js 里，设置

```js
mainWindow = new BrowserWindow({
  useContentSize: true,
  width: 1020,
  height: 670,
  minWidth: 750,
  minHeight: 500,
  frame: true // 应用自带的框，设置false去掉后，没有导航栏和关闭按钮
});
```

疑问：在#app 里设置 flex 样式一直不生效，目前只能先用 position 来调整布局？

# 第二步

隐藏自带边框，因此我们需要先添加关闭程序按钮。  
以关闭窗口按钮为例，先为按钮绑定方法

```html
<button @click="closeWindow">关闭</button>
```

```js
closeWindow() {
  this.$electron.ipcRenderer.send("closeWindow");
}
```

可以看到，是使用了`ipcRenderer.send('closeWindow')`来向主进程发送了一个方法，然后在`main/index.js`里监听方法。

```js
function createWindow() {
  mainWindow = new BrowserWindow({
    useContentSize: true,
    width: 1020,
    height: 670,
    minWidth: 750,
    minHeight: 500,
    frame: false
  });
  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  //自定义关闭窗口
  ipcMain.on("closeWindow", () => {
    app.quit();
  });
}
```

去掉自带边框后带来的另一个问题是无法拖动，因此我们需要给使用到拖动的 dom 添加样式`-webkit-app-region: drag`，将其设置为拖动区域。  
设置这个样式之后，会发现在该区域的一些功能失常，通常是点击事件失效，此时我们在需要使用点击元素的 dom 元素上设置`-webkit-app-region:no-drag`。

TODO: 将可拖动的元素统一样式处理，避免重复写`-webkit-app-region: drag`

# File

## 点击上传
监听`change`。
```html
<input type="file" name="upload" id="file" @change="changeFile">
```
```js
changeFile({ target: { files } }) {
  console.log(files);
}
```

## 拖拽上传

首要方法 `drop`。

```html
<div class="drop-area" @drop="onDrop">往这拖</div>
```

```js
onDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer.files;
  console.log(files);
}
```

但是只监听 drop 的话，会发现每次拖拽图片都是直接显示图片了。需要再添加两个方法`dragover`和`dragenter`，并把这两个方法的默认行为禁了。

```html
<div
  class="drop-area"
  @drop="onDrop"
  @dragover="onDragOver"
  @dragenter="onDragEnter"
>
  往这拖
</div>
```

```js
onDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
},
onDragEnter(event) {
  event.preventDefault();
  event.stopPropagation();
},
```

## 预览

在点击上传时`onChange`监听文件变化
```html
<input type="file" name="upload" id="file" @change="changeFile">
```
```js
changeFile({ target: { files } }) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(files[0]);
  const that = this;
  fileReader.onload = function() {
    that.uploadImg = this.result;
  };
},
```

在拖拽上传时`drop`
```html
<div class="drop-area" @drop="onDrop" @dragover="onDragOver" @dragenter="onDragEnter">往这拖</div>
```
```js
onDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer.files;
  const img = window.URL.createObjectURL(files[0]);
  this.dropImg = img;
}
```

关键是难道files对象，然后我们可以使用两种方法处理上传数据。
+ FileReader对象的readAsDataURL方法
+ window.URL.createObjURL方法

TODO: 目前未处理拖拽其他文件的错误处理，后续处理。
