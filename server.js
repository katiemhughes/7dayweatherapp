const express = require("express")
const hbs = require("express-handlebars")
const path = require("path")
const PORT = process.env.PORT || 5000

const routes = require("./routes/index")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine(
    ".hbs",
    hbs({
        defaultLayout: "layout",
        extname: ".hbs"
    })
)

app.set("view engine", ".hbs")

app.use("/", routes)


app.listen(PORT, () =>  {
    console.log(`Listening on port ${PORT}`)
})