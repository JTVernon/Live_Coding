import './styles.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("")
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [precip, setPrecip] = useState("");

  //request => current => temperature

 const params = new URLSearchParams({
   access_key: "4026473a528afd970328714031324255",
   query: city,
   unit: "c",
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
      
      setTemp(data.temperature + "°C");
      setCelsius(data.temperature);
      setFahrenheit(Math.round(data.temperature * 1.8 + 32));
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
              onChange={(e) => setTemp(e.target.value)}>
               <option></option>
               <option value = {fahrenheit + "°F"}>Fahrenheit</option>
               <option value = {celsius + "°C"}>Celsius</option>
             </select>
           </div>
         </div>



     <div className="city/temp">
           <div className="city">
             <p>Weather in {city}</p>
           </div>

           <div className="temp">
            <h1>{temp}</h1>
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

    </div>   
  )
};


export default App;


