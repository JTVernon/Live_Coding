import styles from './styles.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState("");

  //request => current => temperature

 const params = new URLSearchParams({
   access_key: "4026473a528afd970328714031324255",
   query: city,
   units: "f"
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

    setTemp(data.temperature)

  } catch (error) {
    console.log("Error message: ", error);
  } finally {
    setLoading(false);
  }
  console.log(loading);
 }



  return (
       <div className="parent-div">
           <div className="one">
               <input
               type="text"
               id="city"
               placeholder="Search cities"
               value={city}
               onChange={e => setCity(e.target.value)}
               ></input>
           </div>
           <div className="two">
           </div>
           <button className="three"
           onClick={handleSubmit}
           >Submit</button>
           <div>
             The Current Temperature in {city} is {temp} &#8457;
           </div>
       </div>
  )
};


export default App;


