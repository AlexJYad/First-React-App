import { useRef } from 'react'; 

export default function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <p></p>
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }