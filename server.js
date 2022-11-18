const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "I",
            message: "nteresting Things"
        },
        {
            title: "C",
            message: "oding Everything"
        },
        {
            title: "E",
            message: "study"
        },
        {
            title: "C",
            message: "laim for a Secret Codes"
        },
        {
            title: "O",
            message: "ther Thinks"
        },
        {
            title: "D",
            message: "emons Inside"
        },
        {
            title: "E",
            message: "It's me Bb"
        },
        {
            title: "R",
            message: "eboot ..."
        },
    ];
    const subtitle = "Cyber Security"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
});

app.get("/aboutme", function (req, res) {
    res.render("pages/about");
});

app.get("/contactme", function (req, res) {
    res.render("pages/contacts");
});

app.listen(8080);
console.log("For better experience try connect in: localhost:8080 | Coding = 1.2.3... > Have a Nice Hacking!!!");
