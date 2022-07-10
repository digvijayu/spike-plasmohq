import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

window.addEventListener("load", () => {
  console.log("content script loaded")

  document.body.style.background = "pink"
})

// import type { PlasmoContentScript } from "plasmo"

// (function () {
//   console.log('here');
//   document.querySelector('body').style.background = 'red';
// })();

// export const config: PlasmoContentScript = {
//   matches: ["<all_urls>"],
//   all_frames: true
// }