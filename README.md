## How to use it

### Install dependencies

```sh
npm install
```

This will install all the npm packages defined in `package.json`.

### Build

The files in `src` are the source files. In order to deploy it, you want to have
minimized set of assets (files). Since this is a web app, you want your users to
get your app as quick as possible, therefore we're using webpack. It allows us to take the contents
of `src` and turn it into minimized assets in `dist` (distributable).
Webpack has a configuration file `webpack.config.js` that tells it how to do that.
It introduces webpack which files it should look at to generate `dist`.

To build the app, run `npm run build`.

### Development

While working on the app, you can continuously build it as you introduce changes.
Just run `npm run start` and a small web server will be started serving the files from `dist`.
Webpack will regenerate `dist` anytime you modify your code in `src`.