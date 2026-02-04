// generator/generate.js
const fs = require("fs");

const svg = `
<svg width="900" height="200" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0d1117"/>

  <!-- spaceship -->
  <polygon points="50,100 20,90 20,110" fill="#58a6ff"/>

  <!-- bullets -->
  <line x1="50" y1="100" x2="200" y2="100" stroke="#f85149" stroke-width="2"/>

  <!-- enemy -->
  <rect x="220" y="85" width="20" height="20" fill="#7ee787"/>
</svg>
`;

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/space-shooter.svg", svg);
