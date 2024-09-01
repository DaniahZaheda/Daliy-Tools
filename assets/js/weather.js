const apiKey = '4d7a7f989a38d22cbb16dd03289f1ddf'; 

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;


    
    axios.get(url)
        .then(response => {
            const data = response.data;
            if (data.cod === 200) {
                const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Country: ${data.sys.country}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>


                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
         
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
            }
        })
        .catch(error => {
            console.error('Error occurred:', error);
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching data.</p>`;
        });
}
