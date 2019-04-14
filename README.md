# elec-z
A electron project

# 第一步
在main文件夹index.js里，设置
```js
mainWindow = new BrowserWindow({
  useContentSize: true,
  width: 1020,
  height: 670,
  minWidth: 750,
  minHeight: 500,
  frame: false // 应用自带的框，去掉后，没有导航栏和关闭按钮
});
```
