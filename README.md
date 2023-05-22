## WebApp 課程作業三
### R11725045 李名涵

1. 打開此資料夾後，在終端機輸入:
> $ npm init

2. 必要的話需要安裝 Webpack & Babel & React preset:
> $ npm install --save-dev webpack
> $ npm install --save-dev @babel/core @babel/preset-react @babel/preset-env babel-loader

3. 加入 React:
> $ npm install --save react react-dom

4. 到目前為止會產生以下兩個檔案：
* pacakge.json
* package-lock.json

5. 安裝 plugin:
> $ npm install --save-dev html-webpack-plugin

6. 輸入開發模式的編譯指令：
> $ webpack --mode development

7. 完成第六步後會出現 dist/ 資料夾，裡面有 index.html

8. 安裝 webpack-dev-server
> $ npm install --save-dev webpack-cli webpack-dev-server

9. 啟動 dev server:
> $ NODE_ENV=development node_modules/.bin/webpack-dev-server

10. 用瀏覽器打開網址：http://localhost:9000/ 

11. 完成