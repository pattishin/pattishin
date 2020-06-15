<div align="center">
  <img alt="Logo" src="https://github.com/pattishin/pattishin/blob/master/src/assets/logo.png" width="100" />
</div>
<h1 align="center">
   pattishin.com
</h1>
<p align="center">
  <ul>
    <li>
      prod: <a href="https://pattishin.io" target="_blank">pattishin.io</a>
    </li>
    <li>
      staging: <a href="https://pattishin-b5b2a.uc.r.appspot.com" target="_blank">https://pattishin-b5b2a.uc.r.appspot.com</a>
    </li>
  </ul>
</p>
<p>
<a href="https://pattishin.io" target="_blank">pattishin.io</a> is built with <a href="https://reactjs.org/" target="_blank">React</a> and hosted with <a href="https://cloud.google.com/appengine" target="_blank">Google Cloud App Engine</a>
</p>

## ⚙️ Getting started for client-side

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the development server

   ```sh
   npm start
   ```
  Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br />
  You will also see any lint errors in the console.

3. Run tests

   ```sh
   npm start
   ```

  Launches the test runner in the interactive watch mode.<br />
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## ⚙️ Getting started for Golang web server
  
  ```sh
   go get ./...
   go run main.go
   curl localhost:8080/api/...
   ```

## 🚀 Deploying

Create production build manually

   ```sh
   npm run build
   ```

Or just do it in all one go. (Builds and deploys via Google Cloud App Engine)

   ```sh
   npm run deploy
   ```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
