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

# 第二部

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
