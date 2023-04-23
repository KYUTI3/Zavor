const { app, BrowserWindow } = require('electron')

let mainWindow;
let homeWindow;

// const myObject = {};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    nodeIntegration: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  homeWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false, 
    parent: mainWindow, 
    modal: true, 
    resizable: false, 
  });
  
  homeWindow.loadFile(path.join(__dirname, 'home.html'));
  
  homeWindow.on('closed', () => {
    window = null;
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(); 
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });