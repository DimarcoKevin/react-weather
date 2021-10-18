const api = {
  appid: "829d271e53fae81c080d42ac41c9890e",
  id: "524901",
  base: "https://www.api.openweathermap.org/data/2.5/forecast?"
}


function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."></input>
        </div>
      </main>
    </div>
  );
}

export default App;
