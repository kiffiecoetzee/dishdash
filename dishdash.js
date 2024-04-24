const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "path/to/your/index.css";
document.head.appendChild(link);

// Load external JavaScript file from CDN
const script = document.createElement("script");
script.src = "https://cdn.example.com/path/to/external.js";
script.onload = function () {
    // Code to execute after external script is loaded, if needed
};
document.body.appendChild(script);
