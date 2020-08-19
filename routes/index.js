const { Router } = require("express")
//Router is middleware provided by Express.
const router = Router()
const getWeather = require("../lib/index")


router.get("/", async (req, res) => {
    //console.log(data)
    res.render("index")
});

router.post("/", async (req, res) => {
    let latitude = req.body.latitude
    let longitude = req.body.longitude
    let data = await getWeather(latitude, longitude)
    let stats = data.daily[0, 1, 2, 3, 4, 5, 6].forEach(([key, value]) => {
        res.render("index", {
            latitude,
            longitude,
            stats
        })
        console.log(data)
    })
    //console.log(data)
});


module.exports = router