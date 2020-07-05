const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()
const p = process.env.PORT || 3000

const publicDir = path.join(__dirname, "../public")
const viewsDir = path.join(__dirname, "../templates/views")
const partialsDir = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsDir)
app.use(express.static(publicDir))
hbs.registerPartials(partialsDir)

app.get("/", (req, res) => {
    res.render("index", {

    })
})

app.get("/chemistry", (req, res) => {
    res.render("index", {

    })
})

app.get("/life-sciences", (req, res) => {
    res.render("life-sciences", {

    })
})

app.get("/earth-sciences", (req, res) => {
    res.render("earth-sciences", {

    })
})

app.get("/physics", (req, res) => {
    res.render("physics", {

    })
})

app.get("/technology", (req, res) => {
    res.render("technology", {

    })
})

app.get("*", (req, res) => {
    res.render("error", {
        
    })
})

app.listen(p, () => {
    console.log(`Server is up on port ${p}.`)
})