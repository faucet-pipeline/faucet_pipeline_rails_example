let jsConfig = {
  manifest: {
    file: "public/assets/manifests/javascript.json",
    baseURI: (bundlePath, baseName) => `/assets/javascripts/${baseName}`
  },
  bundles: [{
    entryPoint: "./app/assets/javascripts/application.js",
    target: "public/assets/javascripts/application.js",
    externals: {}
  }]
};

let sassConfig = {
  manifest: {
    file: "public/assets/manifests/stylesheet.json",
    baseURI: (bundlePath, baseName) => `/assets/stylesheets/${baseName}`
  },
  assets: [
    "public/assets/manifests/static.json"
  ],
  prefixes: {
    browsers: [ "last 2 versions" ]
  },
  bundles: [{
    entryPoint: "app/assets/stylesheets/application.scss",
    target: "public/assets/stylesheets/application.css"
  }]
};

let staticConfig = {
  manifest: {
    file: "public/assets/manifests/static.json",
    baseURI: (bundlePath, baseName) => `/assets/static/${baseName}`
  },
  bundles: [{
    source: "app/assets/images",
    target: "public/assets/static"
  }]
}

module.exports = {
  js: jsConfig,
  sass: sassConfig,
  static: staticConfig,
  watchDirs: ["app/assets"]
};
