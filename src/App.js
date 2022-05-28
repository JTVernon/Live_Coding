import styles from './styles.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("")
  const [status, setStatus] = useState("");

 const params = new URLSearchParams({
   access_key: "4026473a528afd970328714031324255",
   query: city,
   units: "f"
 });

const handleSubmit = async e => {
  e.preventDefault();

  setStatus(true);
  console.log(status);

    fetch(`http://api.weatherstack.com/current?${params}`)
    .then(checkStatus).then(res => res.json()).then(console.log);
 }

 function checkStatus(res) {
   if (!res.ok) {
    throw new Error(res.statusText)
   }
   return res;
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
             {city}
           </div>
           <button className="three"
           onClick={handleSubmit}
           >Submit</button>
       </div>
  )
};


export default App;

//
