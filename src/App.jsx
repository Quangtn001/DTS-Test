import { useState } from "react";
import "./App.css";
import generateRandomArray from "./utils/generateRandomArray";
import sortingAlgorithms from "./utils/sortingAlgorithms";

function App() {
  const [array, setArray] = useState([]);
  const [sortedArrays, setSortedArrays] = useState({});

  const generateRandomArrayHandler = () => {
    const newArray = generateRandomArray(1000);
    setArray(newArray);
  };

  const sortArrayHandler = () => {
    const algorithms = [
      "bubbleSort",
      "selectionSort",
      "insertionSort",
      "mergeSort",
      "quickSort",
    ];
    const sortedArraysData = {};

    algorithms.forEach((algorithm) => {
      const { sortedArray, executionTime } = sortingAlgorithms[algorithm](
        array.slice()
      );
      sortedArraysData[algorithm] = { sortedArray, executionTime };
    });

    setSortedArrays(sortedArraysData);
  };
  return (
    <div style={{ padding: "10px" }} className="App">
      <div style={{ textAlign: "center" }}>
        <h1>NGUYEN BA QUANG - DTS TEST</h1>
        <button
          style={{ marginRight: "10px" }}
          onClick={generateRandomArrayHandler}
        >
          Generate Random Array
        </button>
        <button onClick={sortArrayHandler}>Sort Array</button>
      </div>
      <div className="random-array">
        <p>
          <span style={{ fontWeight: "bold", fontSize: "26px" }}>
            Random Array
          </span>
          : {array ? `[${array.join(", ")}]` : "[]"}
        </p>
      </div>
      <div className="sorted-arrays">
        {Object.keys(sortedArrays).map((algorithm, index) => (
          <div key={index}>
            <h2 style={{ textTransform: "capitalize" }}>{algorithm}</h2>
            <p>
              <span style={{ fontWeight: "bold" }}> Sorted Array</span>:{" "}
              {sortedArrays[algorithm].sortedArray.join(", ")}
            </p>
            <p>
              Execution Time: {sortedArrays[algorithm].executionTime.toFixed(2)}{" "}
              milliseconds
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
