const puppeteer = require("puppeteer");

let browser;
let page;

puppeteer
  .launch()
  .then(reply => {
    browser = reply;
    return browser.newPage();
  })
  .then(reply => {
    page = reply;
    return page.goto("https://www.baidu.com/");
  })
  .then(reply => {
    return page.screenshot({ path: "example.png" });
  })
  .then(reply => {
    return browser.close();
  })
  .catch(err => {
    console.log(err);
  });
