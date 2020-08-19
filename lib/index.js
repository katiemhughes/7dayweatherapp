const fetch = require("node-fetch")
require("dotenv").config()

const getWeather = async (latitude, longitude) => {
    let data = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&APPID=${process.env.APPID}`
    )
    return await data.json()
}

module.exports = getWeather