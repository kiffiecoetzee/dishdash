const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://kiffiecoetzee.github.io/index.css";
document.head.appendChild(link);

// Load external JavaScript file from CDN
const script = document.createElement("script");
script.src = "https://kiffiecoetzee.github.io/index.js";
script.onload = function () {
    // Code to execute after external script is loaded, if needed
};
document.body.appendChild(script);

// git push -u origin main
