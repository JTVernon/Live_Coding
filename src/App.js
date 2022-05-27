import styles from './styles.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("")
  const [status, setStatus] = useState(false);

  //function displayStatus({status}) {
   // if(status === "pending") {
   // return ("pending")
  //} else if (status === "success"){
   // return ("Success!")
  //} else if (status === "error") {
   // return ("Something went wrong :(")
  //}
//};
const params = new URLSearchParams({
   access_key: "4026473a528afd970328714031324255",
   query: "Greensboro",
   units: "f"
 });

const handleSubmit = async e => {
  e.preventDefault();

  setStatus(true);
  console.log(status);

    fetch(`http://api.weatherstack.com/current?${params}`)
      .then(res => res.json()).then(console.log);
}



  return (
       <div className="parent-div">
           <div className="one">
               <input
               type="text"
               id="city"
               placeholder="Search cities"
               value={city}
               ></input>
           </div>
           <div className="two">
           </div>
           <button className="three"
           onClick={handleSubmit}
           >Submit</button>
       </div>
  )
};


export default App;
