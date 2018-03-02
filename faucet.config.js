// let jsConfig = [{
//   entryPoint: "./app/assets/javascripts/application.js",
//   target: "./public/assets/javascripts/application.js"
// }];

let sassConfig = [{
  entryPoint: "./app/assets/stylesheets/application.scss",
  target: "./public/assets/stylesheets/application.css"
}];

let staticConfig = [{
  source: "./app/assets/images",
  target: "./public/assets/images"
}];

module.exports = {
  // js: jsConfig,
  sass: sassConfig,
  static: staticConfig,
  watchDirs: ["app/assets"],
  manifest: {
    file: "./public/assets/manifest.json",
    webRoot: "./public"
  }
};
