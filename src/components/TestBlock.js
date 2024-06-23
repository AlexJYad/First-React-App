import RegisterForm from "./testingOnes/RegisterForm";
import InputComponent from "./testingOnes/InputComponent";
import TextInputWithFocusButton from "./testingOnes/TextInputWithFocusButton";
import UpToDate from "./testingOnes/UpToDate";
import TestList from "./testingOnes/TestList";
import TestProvider from "../provider/TestProvider";
import TestCounter from "./testingOnes/TestCounter";
import Clock from "./testingOnes/Clock";
import LogicalAndExample from "./testingOnes/LogicalAndExample";
import ImgOne from "./testingOnes/imgOne";
import ImgTwo from "./testingOnes/imgTwo";
import ImgThree from "./testingOnes/ImgThree";
import YouTube from "./testingOnes/YouTube";

export default function TestBlock() {
   return (
      <div id="testing-ones">
         <InputComponent />
         <TextInputWithFocusButton />
         <RegisterForm />
         <UpToDate />
         <TestProvider>
            <TestList />
            <TestCounter />
         </TestProvider>
         <div>
            <Clock />
         </div>
         {/* <LogicalAndExample /> */}
         <ImgOne />
         <ImgTwo />
         <ImgThree />
         <YouTube />
      </div>
   );
}
