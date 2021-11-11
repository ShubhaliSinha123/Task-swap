import { useState } from "react";

const Form = () => {
  const [inputAValue, setInputAValue] = useState("");
  const [inputBValue, setInputBValue] = useState('');
  const [updatedArray, setUpdatedArray] = useState([]);
  
  const items = (array, value) => {
       setUpdatedArray([...array, value]);
      return updatedArray;
  };

  const inputAChangeHandler = (event) => {
    setInputAValue(event.target.value);
  };

  const inputBChangeHandler = (event) => {
    setInputBValue(event.target.value);
    items(updatedArray, inputBValue);
    console.log(updatedArray);
  };

  const swapHandler = (event) => {
    event.preventDefault();

    if (inputAValue.length > 0) {
      setInputBValue(inputAValue);
      setInputAValue("");
    }
    
    if (inputBValue.length > 0) {
      if(updatedArray.length > 0){
        setInputAValue(updatedArray[0]);
      } else {
        setInputAValue(inputBValue);
      }
      setInputBValue("");
      setUpdatedArray([]);
    }
  };

  return (
      <form>
        <input
          type="text"
          name="inputA"
          onChange={inputAChangeHandler}
          value={inputAValue}
        />
        <button onClick={swapHandler}>Swap</button>
        <br />
        <br />

        <input
          type="text"
          name="inputB"
          onChange={inputBChangeHandler}
          value={inputBValue}
        />

        <button onClick={swapHandler}>Swap</button>
      </form>
  );
};

export default Form;
