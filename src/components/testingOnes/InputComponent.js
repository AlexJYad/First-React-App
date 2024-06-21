import { useState } from 'react'; 

export default function InputComponent() { 
    const [inputText, setText] = useState('hello'); 
  
    function handleChange(e) { 
      setText(e.target.value); 
    } 
  
    return ( 
      <> 
        <p>You typed: {inputText}</p>
        <input value={inputText} onChange={handleChange} /> 
        <p></p>
        <button onClick={() => setText('hello')}> 
          Reset 
        </button> 
      </> 
    ); 
  } 