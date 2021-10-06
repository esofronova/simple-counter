import { useState } from "react";
import './style.scss';

export default function Counter() {

   let [counter, setCounter] = useState(0);
   let [selectValue, setSelectValue] = useState(1);

   return (
      <div className="counter border p-5 mx-auto mt-5 w-75 centered flex-column">
         <h1 className="text-white mb-0">Counter</h1>
         <h1 
            className={"number my-4 " + (counter < 0 ? "text-danger" : counter > 0 ? "text-success" : "" )}
         >{counter}</h1>
         <div className="d-flex w-75 justify-content-around">
            <select
               value={selectValue}
               onChange={(e) => {
                  setSelectValue(Number(e.target.value));
                  console.log(e.target.value);
               }}
            >
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="5">5</option>
               <option value="10">10</option>
            </select>
            <button
               className="btn"
               onClick={() => {
                  setCounter(counter + selectValue);
               }}
            >Up</button>
            <button
               className="btn"
               onClick={() => {
                  setCounter(counter - selectValue);
               }}
            >Down</button>
            <button
               className="btn"
               onClick={() => {
                  setCounter(0);
               }}
            >Reset</button>
         </div>
      </div>
   );
};