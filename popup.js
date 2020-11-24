// var app = chrome.runtime.getBackgroundPage();

const executeScript = () => {
  chrome.tabs.executeScript({
    file: "getList.js",
  });
  window.close();
};

document.querySelector("#clickme").addEventListener("click", executeScript);
