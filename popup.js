function hello() {
  chrome.tabs.executeScript({
    file: 'beautify.js'
  }); 
}

document.getElementById('beautify').addEventListener('click', hello);