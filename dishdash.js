const tenant = "dishdash123";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://kiffiecoetzee.github.io/index.css";
document.head.appendChild(link);

var divElement = document.createElement("div");
divElement.id = "dishdash";
divElement.setAttribute("tenant", tenant);
document.body.appendChild(divElement);

// Load external JavaScript file from CDN
const script = document.createElement("script");
script.src = "https://kiffiecoetzee.github.io/index.js";
script.onload = function () {
    // Code to execute after external script is loaded, if needed
};
document.body.appendChild(script);

// git push -u origin main
