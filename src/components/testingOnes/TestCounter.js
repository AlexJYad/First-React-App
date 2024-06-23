import { useTestContext } from "../../provider/TestProvider";

const TestCounter = () => {
   const { con } = useTestContext();

   return (
      <div>
         <p>Number of previous component h2:</p>
         <h2>{con.length}</h2>
      </div>
   );
};

export default TestCounter;
