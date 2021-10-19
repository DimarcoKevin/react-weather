const api = {
  appid: "829d271e53fae81c080d42ac41c9890e",
  id: "524901",
  base: "https://www.api.openweathermap.org/data/2.5/forecast?"
}


function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let year = d.getFullYear();
    let month = months[d.getMonth()]
    let day = days[d.getDay()];
    let date = d.getDate();
    
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."></input>
        </div>
        <div className="location-box">
          <div className="location">Toronto, Ontario, Canada</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
