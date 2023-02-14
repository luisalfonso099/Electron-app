const {app, BrowserWindow,ipcMain,Menu } = require('electron');
const nunjucks = require('nunjucks');
const {createWriteStream} = require('fs')

// const menu = Menu.buildFromTemplate([])
// Menu.setApplicationMenu(menu)
const path = require('path');
let algo ='dfs';
const createWindow = ()=> {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    });
    // ipcMain.handle('ping',()=>'pong')
    const res = nunjucks.render('vews/index.njk',{name:'Luis'})
    let writer = createWriteStream('vews/index.html'); 
    writer.write(res);
    win.loadFile('vews/index.html');
};

app.whenReady().then(() => {
    createWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

