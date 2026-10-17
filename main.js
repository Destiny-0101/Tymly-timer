const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 120,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    hasShadow: false,
  });

  win.loadFile('index.html');
  win.setAlwaysOnTop(true, 'screen-saver');
}

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('F5', () => {
    if (win) win.reload();
  });

  globalShortcut.register('Escape', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

const { screen } = require('electron');
const displays = screen.getAllDisplays();
const externalDisplay = displays[1] ? displays[1] : displays[0];

win = new BrowserWindow({
  x: externalDisplay.bounds.x + externalDisplay.bounds.width - 320,
  y: externalDisplay.bounds.y + 20,
  width: 300,
  height: 120,
  transparent: true,
  frame: false,
  alwaysOnTop: true,
  resizable: false,
  hasShadow: false
});