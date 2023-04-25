// const path = require('path');
const { app, BrowserWindow } = require('electron');
//   mainWindow.loadurl(.html'));
// }

// app.whenReady().then(() => {
//   createMainWindow();
// });

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Whats Marketer',
    width: 860,
    height: 650,
  });

  // Load a link as the default application page
  mainWindow.loadURL('https://www.instagram.com/');

  // Open DevTools automatically if not in production
  // if (!app.isPackaged) {
  //   mainWindow.webContents.openDevTools();
  // }
}

app.whenReady().then(() => {
  createMainWindow();
});