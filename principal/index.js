

const {app, BrowserWindow } = require('electron');
app.on('ready', () => {
    let mainWindow = new BrowserWindow();

    //mainWindow.loadURL('https://github.com');
    mainWindow.loadURL(`file://${__dirname}/index.html`);
})