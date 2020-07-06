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
        description: `Science Articles by Youth (SAY) is a youth founded organization focused on bringing knowledge and passion within teens about all branches of science. 
        Many teens that are extremely knowledgeable in certain aspects of science unfortunately do not have an established platform to spread their knowledge for other teens to benefit from. 
        SAY aspires to change that. Founded in the summer of 2020, our goal is to provide a platform for teens to channel their passion for science by writing or reading articles about any science topics they are interested in. 
        SAY is centered in Illinois but has begun spreading its influence to youth from all around America. If you are interested in joining the SAY team, email sciencearticlesbyyouth@gmail.com. Happy reading!`
    })
})

app.get("/chemistry", (req, res) => {
    res.render("chemistry", {

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