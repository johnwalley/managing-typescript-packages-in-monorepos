import fs from "node:fs";
const base = JSON.parse(fs.readFileSync("package.json", "utf8"));
const pub = {
    name: base.name,
    version: base.version,
    type: "module",
    exports: { ".": { import: "./lib-c.js", require: "./lib-c.cjs", types: "./lib-c.d.ts" } },
    sideEffects: false,
};
fs.writeFileSync("dist/package.json", JSON.stringify(pub, null, 2));