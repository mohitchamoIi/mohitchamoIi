const fs = require("fs");
const svg = `
<svg width="800" height="120" xmlns="http://www.w3.org/2000/svg">
  <text x="50%" y="50%" text-anchor="middle" fill="green" font-size="24">
    GitHub Activity Game
  </text>
</svg>
`;

fs.writeFileSync("assets/github-activity.svg", svg);
console.log("SVG generated");
