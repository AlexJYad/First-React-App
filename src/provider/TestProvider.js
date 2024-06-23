import React from "react";

const SomeContext = React.createContext();

// const tryContext = ["one", "two", "three"];
// const tryContext = ["1", "2", "3", "4", "5"];
const tryContext = ["Testing", "out", "Provider"];

const TestProvider = ({ children }) => {
   const [con, setContext] = React.useState(tryContext);

   return (
      <SomeContext.Provider value={{ con }}>{children}</SomeContext.Provider>
   );
};

export const useTestContext = () => React.useContext(SomeContext);

export default TestProvider;
