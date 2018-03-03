# Project Structure

---

Make a new project directory and add a `package.json` file with `npm init`.

```bash
# make project directory
$ mkdir react-guide

# navigate to project directory
$ cd react-guide 

# create package.json file.
$ npm init -y
```

![Create initial project](./images/mkdir.gif)

Open in VSCode and create the following project structure

```bash
$ code .
```

```
react-guide/
|-- src/
    |-- app.jsx
|-- index.html
|-- package.json
|-- webpack.config.js
```

![Initial Project Structure](./images/initial-project.png)

## Index.html

---

![Index page](./images/index.gif)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Guide</title>
</head>
<body>
    <div id="react-app"></div>
</body>
</html>
```

## Package.json

---

Add the following devDependencies and build script to `package.json`.

```json
{
  "name": "react-guide",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router-dom": "^4.2.2",
    "webpack": "^4.0.1",
    "webpack-cli": "^2.0.10"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Don't forget to run `$ npm install` to download all the dependencies.

## Webpack.config.js

---

Covered in the [next section](/build.md).

