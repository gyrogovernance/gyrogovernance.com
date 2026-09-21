import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";

const buf = await pngToIco([
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/favicon-96x96.png",
]);

writeFileSync("public/favicon.ico", buf);
console.log("ico bytes", buf.length);
