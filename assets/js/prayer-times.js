document.addEventListener('DOMContentLoaded', async function() {
    const get = async () => {
        try {
         
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0'); 
            const year = today.getFullYear();

            const formattedDate = `${day}-${month}-${year}`;

          
            const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Jerusalem&country=Palestine&method=8`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const display = async () => {
        const data = await get();
        if (data) {
            const timings = data.data.timings;
            const result = Object.entries(timings).map(([name, time]) => {
                return `
                    <div class='timing'>
                        <h2>${name}</h2>
                        <p>${time}</p>
                    </div>
                `;
            }).join('');

            const gregorianDate = "Gregorian Date: " + data.data.date.readable;
            const hijriDate = "Hijri Date: " + data.data.date.hijri.date;
            const today = "Today: " + data.data.date.gregorian.weekday.en;

            document.querySelector(".products").innerHTML = result;
            document.querySelector(".gregoriandate").innerHTML = gregorianDate;
            document.querySelector(".hijridate").innerHTML = hijriDate;
            document.querySelector(".today").innerHTML = today;
           document.querySelector(".overlay").classList.add("d-none");

        } else {
            console.error('No data to display');
        }
    };

    display();
});
