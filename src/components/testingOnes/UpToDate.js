import { useState } from "react";

export default function UpToDate() {
   const [count, setCount] = useState(0);

   const clickHeandel = () => {
      setCount(count + 1);
   };
   return (
      <div>
         <div>
            <h3>A state value: {count}</h3>
         </div>
         <div>
            <button onClick={clickHeandel}>Click</button>
         </div>
      </div>
   );
}
