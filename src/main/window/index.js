import { app } from "electron";
import { ipcMain } from "electron";

//自定义操作窗口
const windowFunc = mainWindow => {
  // 关闭
  ipcMain.on("closeWindow", () => {
    app.quit();
  });

  // 最大化
  ipcMain.on("maxWindow", () => {
    mainWindow.maximize();
  });

  // 还原正常
  ipcMain.on("normalWindow", () => {
    mainWindow.unmaximize();
  });

  // 隐藏
  ipcMain.on("hideWindow", () => {
    mainWindow.minimize();
  });
};

export default windowFunc;
