export const base="https://api.openweathermap.org/data/2.5/"
export const key="7fa9c7f8bc04cdbcac5433207a81f3e8"
export const dateHandler = (d) => {
    let months = ["January","February","March","April","May","June",
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
<<<<<<< HEAD
  //39703eb80be8c87fd9b129d8
  // https://v6.exchangerate-api.com/v6/39703eb80be8c87fd9b129d8/latest/USD
=======
>>>>>>> 76ec68bccb05325fa1929cda38cd8831a8e9044f
