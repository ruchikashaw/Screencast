webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./bg.jpg */ "./bg.jpg");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Barlow&family=Cabin+Sketch&family=Russo+One&family=Monoton&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, "/* changed*/\n@media only screen and (min-width: 767px) {\n  .main_color {\n      background-attachment: fixed;\n  }\n  }\nbody {\n  margin: 0px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: top ;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  display:flex;\n  flex-direction: column;\n  /*changed*/\n  /*overflow: hidden;\n  position: relative;*/\n  will-change:scroll-position;\n  /*chaged*/\n  background-color: rgba(10, 10, 50, 0.97);\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  font-family: \"Barlow\", sans-serif;\n  color:\"#eee\";\n}\n\n.fbbutton {\n  margin: 0 auto;\n  position: relative;\n  text-decoration: none;\n  height: 35px;\n  width: 190px;\n  text-transform: uppercase;\n  color: #f0f0f0;\n  background-color: rgb(32, 32, 177);\n  border: none;\n  border-radius: 6px;\n  z-index: 1000;\n}\n\n.head {\n  margin: 0 auto;\n  padding: 10px;\n  padding-top: 40px;\n}\n.rtable {\n  display: absolute;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.question {\n  position: relative;\n  z-index: 20;\n  background-color: rgba(3, 3, 65, 0.8);\n  color: white;\n  box-sizing: border-box;\n  box-shadow: 10px 10px 7px rgba(10, 10, 10, 0.9);\n  max-width: 1000px;\n  min-width: 100px;\n  margin: 40px auto;\n  padding: 20px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  \n}\n@media only screen and (max-width: 700px) {\n  .question {\n    width: 85%;\n  }\n}\n.ans-div {\n  text-align: center;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n#filled-basic {\n  background-color: rgba(246, 248, 255, 0.87);\n  border-radius: 3px;\n}\n#filled-basic:focus {\n  background-color: rgb(10, 0, 66);\n  border-radius: 3px;\n  color: #fff;\n}\n\n.btnSubmit {\n  margin: 5px;\n  padding: 5px;\n}\n\n.login-head {\n  display: relative;\n  color: rgb(253, 253, 253);\n  margin: 0 auto;\n  z-index: 20;\n}\n\n.login-head h1 {\n  font: 150% Consolas, Monaco, monospace;\n  border-right: 0.1em solid;\n  width: 16.5em;\n  width: 15.5ch;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-animation: typing 2.5s steps(16, end),\n    cursor-blink 0.3s step-end infinite alternate;\n          animation: typing 2.5s steps(16, end),\n    cursor-blink 0.3s step-end infinite alternate;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n}\n\n@-webkit-keyframes cursor-blink {\n  50% {\n    border-color: transparent;\n  }\n}\n\n@keyframes cursor-blink {\n  50% {\n    border-color: transparent;\n  }\n}\n\n@font-face {\n  font-family: Clip;\n  src: url(\"https://acupoftee.github.io/fonts/Clip.ttf\");\n}\n.sign {\n  position: relative;\n  display: block;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  background-image: radial-gradient(\n    ellipse 30% 30% at 50% 50%,\n    #6b1839,\n    transparent\n  );\n  transform: translate(-50%);\n  letter-spacing: 2;\n  left: 50%;\n  top: 10%;\n  font-family: \"Clip\";\n  text-transform: uppercase;\n  font-size: 37px;\n  color: #ffe6ff;\n  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n    -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n    0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  -webkit-animation: shine 2s forwards, flicker 3s infinite;\n          animation: shine 2s forwards, flicker 3s infinite;\n}\n\n@-webkit-keyframes blink {\n  0%,\n  22%,\n  36%,\n  75% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n  28%,\n  33% {\n    color: #ff65bd;\n    text-shadow: none;\n  }\n  82%,\n  97% {\n    color: #ff2483;\n    text-shadow: none;\n  }\n}\n\n@keyframes blink {\n  0%,\n  22%,\n  36%,\n  75% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n  28%,\n  33% {\n    color: #ff65bd;\n    text-shadow: none;\n  }\n  82%,\n  97% {\n    color: #ff2483;\n    text-shadow: none;\n  }\n}\n\n.flicker {\n  -webkit-animation: shine 2s forwards, blink 3s 2s infinite;\n          animation: shine 2s forwards, blink 3s 2s infinite;\n}\n\n.fast-flicker {\n  -webkit-animation: shine 2s forwards, blink 10s 1s infinite;\n          animation: shine 2s forwards, blink 10s 1s infinite;\n}\n\n@-webkit-keyframes shine {\n  0% {\n    color: #6b1839;\n    text-shadow: none;\n  }\n  100% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n}\n\n@keyframes shine {\n  0% {\n    color: #6b1839;\n    text-shadow: none;\n  }\n  100% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n}\n\n@-webkit-keyframes flicker {\n  from {\n    opacity: 1;\n  }\n\n  4% {\n    opacity: 0.9;\n  }\n\n  6% {\n    opacity: 0.85;\n  }\n\n  8% {\n    opacity: 0.95;\n  }\n\n  10% {\n    opacity: 0.9;\n  }\n\n  11% {\n    opacity: 0.922;\n  }\n\n  12% {\n    opacity: 0.9;\n  }\n\n  14% {\n    opacity: 0.95;\n  }\n\n  16% {\n    opacity: 0.98;\n  }\n\n  17% {\n    opacity: 0.9;\n  }\n\n  19% {\n    opacity: 0.93;\n  }\n\n  20% {\n    opacity: 0.99;\n  }\n\n  24% {\n    opacity: 1;\n  }\n\n  26% {\n    opacity: 0.94;\n  }\n\n  28% {\n    opacity: 0.98;\n  }\n\n  37% {\n    opacity: 0.93;\n  }\n\n  38% {\n    opacity: 0.5;\n  }\n\n  39% {\n    opacity: 0.96;\n  }\n\n  42% {\n    opacity: 1;\n  }\n\n  44% {\n    opacity: 0.97;\n  }\n\n  46% {\n    opacity: 0.94;\n  }\n\n  56% {\n    opacity: 0.9;\n  }\n\n  58% {\n    opacity: 0.9;\n  }\n\n  60% {\n    opacity: 0.99;\n  }\n\n  68% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 0.9;\n  }\n\n  72% {\n    opacity: 0.95;\n  }\n\n  93% {\n    opacity: 0.93;\n  }\n\n  95% {\n    opacity: 0.95;\n  }\n\n  97% {\n    opacity: 0.93;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes flicker {\n  from {\n    opacity: 1;\n  }\n\n  4% {\n    opacity: 0.9;\n  }\n\n  6% {\n    opacity: 0.85;\n  }\n\n  8% {\n    opacity: 0.95;\n  }\n\n  10% {\n    opacity: 0.9;\n  }\n\n  11% {\n    opacity: 0.922;\n  }\n\n  12% {\n    opacity: 0.9;\n  }\n\n  14% {\n    opacity: 0.95;\n  }\n\n  16% {\n    opacity: 0.98;\n  }\n\n  17% {\n    opacity: 0.9;\n  }\n\n  19% {\n    opacity: 0.93;\n  }\n\n  20% {\n    opacity: 0.99;\n  }\n\n  24% {\n    opacity: 1;\n  }\n\n  26% {\n    opacity: 0.94;\n  }\n\n  28% {\n    opacity: 0.98;\n  }\n\n  37% {\n    opacity: 0.93;\n  }\n\n  38% {\n    opacity: 0.5;\n  }\n\n  39% {\n    opacity: 0.96;\n  }\n\n  42% {\n    opacity: 1;\n  }\n\n  44% {\n    opacity: 0.97;\n  }\n\n  46% {\n    opacity: 0.94;\n  }\n\n  56% {\n    opacity: 0.9;\n  }\n\n  58% {\n    opacity: 0.9;\n  }\n\n  60% {\n    opacity: 0.99;\n  }\n\n  68% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 0.9;\n  }\n\n  72% {\n    opacity: 0.95;\n  }\n\n  93% {\n    opacity: 0.93;\n  }\n\n  95% {\n    opacity: 0.95;\n  }\n\n  97% {\n    opacity: 0.93;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  display: block;\n  padding: 15px;\n  max-width: 350px;\n  border: 4px solid #d21f3c;\n  border-radius: 60px;\n  margin: 0 auto;\n  background-color: rgba(10, 10, 50, 0.5);\n}\n.neon-box {\n  box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c,\n    inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n  -webkit-animation: flashing 4s ease 0s infinite;\n          animation: flashing 4s ease 0s infinite;\n}\n\n.rowC{display:flex; flex-direction:row;}\n\n\n@-webkit-keyframes flashing {\n  0%,\n  60% {\n    box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n  }\n\n  20%,\n  80% {\n    box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5),\n      inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n  }\n}\n\n\n@keyframes flashing {\n  0%,\n  60% {\n    box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n  }\n\n  20%,\n  80% {\n    box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5),\n      inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n  }\n}\n", "",{"version":3,"sources":["/home/anwesha/Desktop/screencast/style.css"],"names":[],"mappings":"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","file":"style.css","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Barlow&family=Cabin+Sketch&family=Russo+One&family=Monoton&display=swap\");\n\n/* changed*/\n@media only screen and (min-width: 767px) {\n  .main_color {\n      background-attachment: fixed;\n  }\n  }\nbody {\n  margin: 0px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: top ;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  display:flex;\n  flex-direction: column;\n  /*changed*/\n  /*overflow: hidden;\n  position: relative;*/\n  will-change:scroll-position;\n  /*chaged*/\n  background-color: rgba(10, 10, 50, 0.97);\n  background-image: url(\"bg.jpg\") ;\n  font-family: \"Barlow\", sans-serif;\n  color:\"#eee\";\n}\n\n.fbbutton {\n  margin: 0 auto;\n  position: relative;\n  text-decoration: none;\n  height: 35px;\n  width: 190px;\n  text-transform: uppercase;\n  color: #f0f0f0;\n  background-color: rgb(32, 32, 177);\n  border: none;\n  border-radius: 6px;\n  z-index: 1000;\n}\n\n.head {\n  margin: 0 auto;\n  padding: 10px;\n  padding-top: 40px;\n}\n.rtable {\n  display: absolute;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.question {\n  position: relative;\n  z-index: 20;\n  background-color: rgba(3, 3, 65, 0.8);\n  color: white;\n  box-sizing: border-box;\n  box-shadow: 10px 10px 7px rgba(10, 10, 10, 0.9);\n  max-width: 1000px;\n  min-width: 100px;\n  margin: 40px auto;\n  padding: 20px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  \n}\n@media only screen and (max-width: 700px) {\n  .question {\n    width: 85%;\n  }\n}\n.ans-div {\n  text-align: center;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n#filled-basic {\n  background-color: rgba(246, 248, 255, 0.87);\n  border-radius: 3px;\n}\n#filled-basic:focus {\n  background-color: rgb(10, 0, 66);\n  border-radius: 3px;\n  color: #fff;\n}\n\n.btnSubmit {\n  margin: 5px;\n  padding: 5px;\n}\n\n.login-head {\n  display: relative;\n  color: rgb(253, 253, 253);\n  margin: 0 auto;\n  z-index: 20;\n}\n\n.login-head h1 {\n  font: 150% Consolas, Monaco, monospace;\n  border-right: 0.1em solid;\n  width: 16.5em;\n  width: 15.5ch;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  animation: typing 2.5s steps(16, end),\n    cursor-blink 0.3s step-end infinite alternate;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n}\n\n@keyframes cursor-blink {\n  50% {\n    border-color: transparent;\n  }\n}\n\n@font-face {\n  font-family: Clip;\n  src: url(\"https://acupoftee.github.io/fonts/Clip.ttf\");\n}\n.sign {\n  position: relative;\n  display: block;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  background-image: radial-gradient(\n    ellipse 30% 30% at 50% 50%,\n    #6b1839,\n    transparent\n  );\n  transform: translate(-50%);\n  letter-spacing: 2;\n  left: 50%;\n  top: 10%;\n  font-family: \"Clip\";\n  text-transform: uppercase;\n  font-size: 37px;\n  color: #ffe6ff;\n  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n    -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n    0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  animation: shine 2s forwards, flicker 3s infinite;\n}\n\n@keyframes blink {\n  0%,\n  22%,\n  36%,\n  75% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n  28%,\n  33% {\n    color: #ff65bd;\n    text-shadow: none;\n  }\n  82%,\n  97% {\n    color: #ff2483;\n    text-shadow: none;\n  }\n}\n\n.flicker {\n  animation: shine 2s forwards, blink 3s 2s infinite;\n}\n\n.fast-flicker {\n  animation: shine 2s forwards, blink 10s 1s infinite;\n}\n\n@keyframes shine {\n  0% {\n    color: #6b1839;\n    text-shadow: none;\n  }\n  100% {\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n  }\n}\n\n@keyframes flicker {\n  from {\n    opacity: 1;\n  }\n\n  4% {\n    opacity: 0.9;\n  }\n\n  6% {\n    opacity: 0.85;\n  }\n\n  8% {\n    opacity: 0.95;\n  }\n\n  10% {\n    opacity: 0.9;\n  }\n\n  11% {\n    opacity: 0.922;\n  }\n\n  12% {\n    opacity: 0.9;\n  }\n\n  14% {\n    opacity: 0.95;\n  }\n\n  16% {\n    opacity: 0.98;\n  }\n\n  17% {\n    opacity: 0.9;\n  }\n\n  19% {\n    opacity: 0.93;\n  }\n\n  20% {\n    opacity: 0.99;\n  }\n\n  24% {\n    opacity: 1;\n  }\n\n  26% {\n    opacity: 0.94;\n  }\n\n  28% {\n    opacity: 0.98;\n  }\n\n  37% {\n    opacity: 0.93;\n  }\n\n  38% {\n    opacity: 0.5;\n  }\n\n  39% {\n    opacity: 0.96;\n  }\n\n  42% {\n    opacity: 1;\n  }\n\n  44% {\n    opacity: 0.97;\n  }\n\n  46% {\n    opacity: 0.94;\n  }\n\n  56% {\n    opacity: 0.9;\n  }\n\n  58% {\n    opacity: 0.9;\n  }\n\n  60% {\n    opacity: 0.99;\n  }\n\n  68% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 0.9;\n  }\n\n  72% {\n    opacity: 0.95;\n  }\n\n  93% {\n    opacity: 0.93;\n  }\n\n  95% {\n    opacity: 0.95;\n  }\n\n  97% {\n    opacity: 0.93;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  display: block;\n  padding: 15px;\n  max-width: 350px;\n  border: 4px solid #d21f3c;\n  border-radius: 60px;\n  margin: 0 auto;\n  background-color: rgba(10, 10, 50, 0.5);\n}\n.neon-box {\n  box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c,\n    inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n  animation: flashing 4s ease 0s infinite;\n}\n\n.rowC{display:flex; flex-direction:row;}\n\n\n@keyframes flashing {\n  0%,\n  60% {\n    box-shadow: 0 0 5px 0 #ff0800, inset 0 0 5px 0 #ff0800, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 #d21f3c, 0 0 20px 2px #d21f3c, inset 0 0 20px 2px #d21f3c;\n  }\n\n  20%,\n  80% {\n    box-shadow: 0 0 5px 0 #d21f3c, inset 0 0 5px 0 #d21f3c, 0 0 20px 0 #d21f3c,\n      inset 0 0 5px 0 rgba(10, 10, 50, 0.5), 0 0 20px 2px rgba(10, 10, 50, 0.5),\n      inset 0 0 20px 2px rgba(10, 10, 50, 0.5);\n  }\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.749b28b014e798ab2d3f.hot-update.js.map