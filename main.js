const { app, BrowserWindow } = require('electron')

let mainWindow;

const myObject = {};

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


  omeWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false, // Hide the window initially
    parent: mainWindow, // Set the main window as the parent
    modal: true, // Make the window modal
    resizable: false, // Disable resizing
  });
  
  homeWindow.loadFile(path.join(__dirname, 'home.html'));
  
  homeWindow.on('closed', () => {
    aboutWindow = null;
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(); 
        }
    });
});





// if (myObject && myObject.loadURL) {
//   myObject.loadURL('https://www.example.com');
// }

// mainWindow.loadURL(
//   url.format({
//     pathname: path.join(__dirname, 'index.html'),
//     protocol: 'file:',
//     slashes: true
//   })
// );

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });