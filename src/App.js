import React, { useState } from 'react';

const api = {
  appid: "829d271e53fae81c080d42ac41c9890e",
  id: "524901",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // rebuild after using async/await
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}${query}&units=metric&appid=${api.appid}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let year = d.getFullYear();
    let month = months[d.getMonth()]
    let day = days[d.getDay()];
    let date = d.getDate();
    
    return `${day}, ${date} ${month} ${year}`;
  }

  return (
    <div className = {
      (typeof weather.main != "undefined") ? 
      ((weather.main.temp > 16) ? 
      'App warm' : 'App') 
      : 'App'}>

      <main>
        <div className="search-box">
          <input 
              type="text" 
              className="search-bar" 
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search} 
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>     
              <div className="weather">{weather.weather[0].main}</div>   
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
