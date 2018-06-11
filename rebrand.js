const fs = require("mz/fs");
const cli = require("command-line-args")([
    {name: "name", type: String, defaultOption: true},
    {name: "author", type: String}
]);
if (!cli.author || !cli.name) {
    console.error("Usage: ./rebrand NAME --author AUTHOR");
    process.exit();
}
(async (opts) => {
const pkg = require("./package.json");
pkg.name = opts.name;
pkg.author = opts.author;
fs.writeFile("package.json", JSON.stringify(pkg, null, 4));
})(cli);