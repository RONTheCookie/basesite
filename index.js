const express = require("express");
const app = express();
const port = process.env.PORT || process.env.port || 3000;

app.set("view engine", "ejs");

app.use(require("./routes/"));

app.use((req, res) => {
    res.send("oops i cant find that");
});

app.listen(port, () => console.log(`Listening on port ${port}.`));