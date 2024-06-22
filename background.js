// background.js

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.scripting.executeScript({
      target: { tabId: activeInfo.tabId },
      files: ['content.js']
    });
  });
  
  chrome.windows.onFocusChanged.addListener(windowId => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        if (tabs[0]) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: () => {
              const video = document.querySelector('video');
              if (video && !video.paused) {
                video.pause();
              }
            }
          });
        }
      });
    }
  });
  