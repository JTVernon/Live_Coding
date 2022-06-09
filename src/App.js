import './styles.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [precip, setPrecip] = useState("");
  const [units, setUnits]= useState("f")

  //request => current => temperature

 const params = new URLSearchParams({
   access_key: "4026473a528afd970328714031324255",
   query: city,
   units: units,
 });

 
 const handleSubmit = async e => {
   e.preventDefault();
   
   setLoading(true);
   console.log(loading);
   
   const url = `http://api.weatherstack.com/current?${params}`
   
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error(response.status);
      }
      const json_data = await response.json();
      let data = json_data.current;
      
      console.log(data);
      
      setTemp(data.temperature);
      setHumidity(data.humidity);
      setWindSpeed(data.wind_speed);
      setPrecip(data.precip);
      
    } catch (error) {
      console.log("Error message: ", error);
    } finally {
      setLoading(false);
    }
    console.log(loading);
  }
  


  return (
    <div className="card">
         <div className="search">
           <div>
               <input
               type="text"
               id="city"
               placeholder="Search cities"
               value={city}
               onChange={e => setCity(e.target.value)}
               />
           <button className="button" onClick={handleSubmit}>Submit</button>
           </div>
           <div className="select">
             <label value = "Temp Unit:">Temp Unit: </label>
             <select id="unit" defaultValue = "Select unit"
              onChange={(e) => setUnits(e.target.value)}>
               <option value = {"f"}>Fahrenheit</option>     
               <option value = {"m"}>Celsius</option>      { /* Celsius is "m" (metric) in the API request */ }
             </select>
           </div>
         </div>


    {
      temp === '' 
       ? (
          <div style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '20px'}}>Enter a city to get the current weather</div>
        ) 
        : (
          <>
          <div className="city/temp">
            <div className="city">
              <p>Weather in {city}</p>
            </div>

            <div className="temp">
              <h1>{`${temp}°${units}`}</h1>
            </div>
          </div>

          <div className="description">
            <div className="rain">
              Precipitation: {precip}%
            </div>
            <div className="humidity">
              Humidity: {humidity}%
            </div>
            <div className = "wind_speed">
              Wind Speed: {windSpeed}MPH
            </div>
          </div>
        </>
        )
    }
     

    </div>   
  )
};


export default App;


