// content.js

function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  window.addEventListener('blur', pauseVideo);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseVideo();
    }
  });
  