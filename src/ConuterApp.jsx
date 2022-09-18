import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const ConuterApp = ({ value }) => {
  const [counter, setCounters] = useState(value);
useEffect(() => {
 handleNumer();
}, [])
useEffect(()=>{
    handleSubstrator();
},[])
useEffect(()=>{
    handledReset();  
},[])
  const handleNumer = () => setCounters(counter + 1);
  
  const handleSubstrator = () => setCounters(counter - 1);
  
  const handledReset = () =>setCounters(value);
  
  return (
    <div className="container">
      <div className="row">
        <div className="cont_card">
          <div className="card">
            <h1>Counter App 🕑 </h1>
            <h2>{counter}</h2>
            <div className="mybutton">
              <button onClick={handleNumer}>+1</button>
              <button onClick={handleSubstrator}>-1</button>
              <button onClick={handledReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConuterApp.PropTypes = {
  value: PropTypes.number.isRequired,
};
