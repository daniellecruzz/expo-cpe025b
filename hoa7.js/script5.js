async function getWeather(cityNames, info = "all") {
    if (!Array.isArray(cityNames)) {
        cityNames = [cityNames];
    }

    for (let city of cityNames) {
        try {
            let url = `http://localhost:3000/weather?city=${city}`;
            if (info && info !== "all") {
                url += `&info=${info}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();

            if (!data.city) {
                console.log(`CITY: ${city}`);
                continue;
            }

            console.log(`CITY: ${data.city}`);

            const weather = data.weather;

            if (weather.wind) {
                console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
                if (weather.wind.speed > 15) {
                    console.log("WARNING! Wind speed over 15 m/s");
                }
            }

            if (weather.clouds !== undefined)
                console.log(`CLOUDS: ${weather.clouds} %`);

            if (weather.temp !== undefined) {
                console.log(`TEMP: ${weather.temp} C`);
                if (weather.temp < -20) {
                    console.log("WARNING! Temperature below -20 degrees");
                }
            }

            if (weather.precipitation !== undefined)
                console.log(`PRECIPITATION: ${weather.precipitation} %`);

            console.log("");

        } catch (err) {
            console.log("Error:", err.message);
        }
    }
}

// ✅ Test
getWeather("Berlin", "wind");
getWeather(["Oslo", "Yakutsk"], "all");