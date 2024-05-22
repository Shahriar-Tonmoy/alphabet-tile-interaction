import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tile from "./Components/Tile/Tile";

function App() {
  const alphabets = [
    { id: 1, character: 'A' },
    { id: 2, character: 'B' },
    { id: 3, character: 'C' },
    { id: 4, character: 'D' },
    { id: 5, character: 'E' },
    { id: 6, character: 'F' },
    { id: 7, character: 'G' },
    { id: 8, character: 'H' },
    { id: 9, character: 'I' },
    { id: 10, character: 'J' },
    { id: 11, character: 'K' },
    { id: 12, character: 'L' },
    { id: 13, character: 'M' },
    { id: 14, character: 'N' },
    { id: 15, character: 'O' },
    { id: 16, character: 'P' },
    { id: 17, character: 'Q' },
    { id: 18, character: 'R' },
    { id: 19, character: 'S' },
    { id: 20, character: 'T' },
    { id: 21, character: 'U' },
    { id: 22, character: 'V' },
    { id: 23, character: 'W' },
    { id: 24, character: 'X' },
    { id: 25, character: 'Y' },
    { id: 26, character: 'Z' }
  ];

  const appendingString = (char, id) => {
    const displayString = document.getElementById("outputString");
    const prevString  = displayString.innerHTML;
    // console.log(prevString);
    // let str='';
    // str = str + char;
    let strArray = prevString.split('');
    // console.log(strArray[prevString.length-2] + strArray[prevString.length-1]);
    if(strArray[prevString.length-1] === char && strArray[prevString.length-2] === char){
      strArray[prevString.length-1] = '';
      strArray[prevString.length-2] = '';
      char='_';
    }
    let finalStr  = strArray.join('') + char;

    displayString.innerHTML = '';
    displayString.innerHTML += finalStr;
  }

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-6">
            {
              alphabets.map((alphabet) => (
                <Tile key={alphabet.id} alphabet={alphabet} appendingString={appendingString}></Tile>
              ))
            }
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold text-left mt-10" >STRING: <span id="outputString"></span></h1>
        </div>
      </div>
    </>
  );
}

export default App;
