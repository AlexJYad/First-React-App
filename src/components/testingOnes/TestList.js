import { useTestContext } from "../../provider/TestProvider";

const TestList = () => {
   const { con } = useTestContext();

   return (
      <div>
         {con.map((test, index) => (
            <h2 key={index}>{test}</h2>
         ))}
      </div>
   );
};

export default TestList;
