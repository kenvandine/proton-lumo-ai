const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;
let wasOffline = false;
let reloadTimeout = null;

const appURL = 'https://lumo.proton.me';

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'assets/img/icon.png'),
  });

  win.loadURL(appURL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle network status changes with debounce to prevent reload loops
ipcMain.on('network-status', (event, isOnline) => {
  // Clear any pending reload
  if (reloadTimeout) {
    clearTimeout(reloadTimeout);
    reloadTimeout = null;
  }

  if (isOnline && wasOffline) {
    wasOffline = false;
    // Debounce the reload to prevent flapping
    reloadTimeout = setTimeout(() => {
      // Only reload if we're not already on the correct page
      if (win && !win.webContents.getURL().includes('lumo.proton.me')) {
        win.loadURL(appURL);
      }
    }, 1000); // 1 second debounce
  } else if (!isOnline && !wasOffline) {
    wasOffline = true;
    win.loadFile('./assets/html/offline.html');
  }
});
