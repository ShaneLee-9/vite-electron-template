# Vite + Electron

参考 [Vite + Vue 3 + electron + TypeScript](https://dev.to/brojenuel/vite-vue-3-electron-5h4o) 文章搭建的初始化模板，集成了 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) ，并已测试前后端打包可用

## 命令解释 

| 命令                 | 说明                                               |
| -------------------- | ------------------------------------------------- |
| `dev`                | 启动 `vite` 开发服务器                              |
| `build`              | 启动 `vite` 打包程序                                |
| `serve`              | 启动一个本地服务器并运行打包后的文件                   |
| `electron`           | 执行 `electron` 默认命令                            |
| `electron:pack`      | 执行 `electron-builder` 打包                       |
| `electron:dev`       | 先执行 `vite` 开发命令，再执行 `electron` 命令启动窗口 |
| `electron:builder`   | 执行 `electron-builder` 默认打包                    |
| `build:for:electron` | 执行 `electron` 环境下的 `vite` 打包                 |
| `app:build`          | 打包 `vite` 和 `electron`                          |
