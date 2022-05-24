import styles from "./styles.css"
import {useState} from "react"

function App() {
  const [city, setCity] = useState("Greensboro")

  return (
       <div className="parent-div">
           <div className="one">
               <input
               name="city"
               type="text"
               id="city"
               value={city}
               update={setCity}
               ></input>
           </div>
           <div className="two">hello</div>
           <div className="three">hello</div>
       </div>
  )
};

export default App;
