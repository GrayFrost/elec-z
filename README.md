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
  frame: true // 应用自带的框，设置false去掉后，没有导航栏和关闭按钮
});
```
疑问：在#app里设置flex样式一直不生效，目前只能先用position来调整布局？

# 第二部
隐藏自带边框，因此我们需要先添加关闭程序按钮。
