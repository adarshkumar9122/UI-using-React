import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {  // id ki help se kisi tour ko remove kr skte hai. and is removeTour ko call karega card.js and Tours.js wala file ,iske liye isko as props, pass hona hoag dono file ke andr.
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>  
                                         {/* onClick wale pe maine ek setTours naam ka  function call krna padega id ke liye,  arrow f*n ke help se.   */}
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
