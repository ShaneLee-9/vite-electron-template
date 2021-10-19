const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const NCP = require('NeteaseCloudMusicApi')
const http = require('http')

const isDev = process.env.IS_DEV === 'true'

// const server = http.createServer()
// server.on('request', async (req, res) => {
//   const defaultList = await search_default({})
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Content-Type', 'application/json;utf-8')
//   res.write(JSON.stringify({
//     data: defaultList
//   }))
//   res.end()
// })
// server.listen(9000)


ipcMain.handle('async-message', async (event, args) => {
  return await NCP[args.func](args.params || {})
})


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: false
    }
  })

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../dist/index.html')}`)

  isDev && mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
