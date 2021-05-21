export const base="https://api.openweathermap.org/data/2.5/"
export const key="7fa9c7f8bc04cdbcac5433207a81f3e8"
export const dateHandler = (d) => {
    let months = ["January","February","March","April","June",
    "July","August","September","October","November","December", ];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };