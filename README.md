# New Portfolio

## Prerequisites

* Node.js installed. Prefer 16.6.1 and npm 7.


## Install the project's dependencies

In the project's root directory run:
### `npm install`


## Environment

You can specify the environment variables by:
* modifying `.env*` files in the project directory or by
* setting env var in the shell. This overrides the settings made in `.env*` files.

The application may have different environment settings for development and production.

The following env var files are supported:
* `.env` - common environment for both: development and production
* `.env.development`
* `.env.development.local`
* `.env.production`
* `.env.production.local`

The settings in *.local files have precedence over setting in other files.


## Public path

Sometimes it's necessary to publish/deploy the web application not under webserver's root, but in some custom folder.  
To do that open "package.json" file and specify the desired location in "homepage" field.


## Start the development server

Set environment variable if necessary.
In the project directory run:
### `npm start`

That command runs the app in the development mode.
The app will be opened in the browser at: [http://localhost:3000](http://localhost:3000).

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.


## Build production bundle

Set environment variable if necessary.
In the project directory run:
### `npm run build`

That command builds the app for production and place it into the `build` folder.
The produced files are minified, and the filenames include hashes.
The bundle built is optimized for best performance.

The app is ready to be deployed to a web server.



### i18next-scanner

Этот сканер может быть использован для создания ключей переводов с начальными переводами. 
Он также сортирует переводы. 
Этот сканер не всегда работает - не всегда обнаруживает новые ключи переводов в коде. Например, если в коде указано `t('mykey')`, то такой ключ будет обнаружен. Однако, если указано `labelKey: 'mykey'`, то такой ключ не будет обнаружен.
Т.е. в таких случаях требуется ручное добавление ключей.
