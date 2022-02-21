module.exports = {
  js: [{
    source: "./app/assets/javascripts/application.js",
    target: "./public/assets/javascripts/application.js",
    format: "esm"
  }],

  sass: [{
    source: "./app/assets/stylesheets/application.scss",
    target: "./public/assets/stylesheets/application.css"
  }],

  static: [{
    source: "@openfonts/titillium-web_latin/files/titillium-web-latin-400.woff2",
    target: "./public/assets/fonts/titillium-web-regular.woff2"
  }, {
    source: "@openfonts/titillium-web_latin/files/titillium-web-latin-700.woff2",
    target: "./public/assets/fonts/titillium-web-bold.woff2"
  }],

  images: [{
    source: "./app/assets/images",
    target: "./public/assets/images"
  }],

  manifest: {
    target: "./public/assets/manifest.json",
    key: "short",
    webRoot: "./public"
  },

  watchDirs: ["./app/assets"],

  plugins: [
    require("faucet-pipeline-images")
  ]
};
