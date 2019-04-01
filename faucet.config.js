module.exports = {
  js: [{
    source: "./app/assets/javascripts/application.js",
    target: "./public/assets/javascripts/application.js",
    compact: "minify"
  }],
  sass: [{
    source: "./app/assets/stylesheets/application.scss",
    target: "./public/assets/stylesheets/application.css"
  }],
  static: [{
    source: "./app/assets/images",
    target: "./public/assets/images",
    compact: "images"
  }],
  manifest: {
    target: "./public/assets/manifest.json",
    key: "short",
    webRoot: "./public"
  },
  watchDirs: ["./app/assets"]
};
