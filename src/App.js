import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import TestBlock from "./components/TestBlock";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { Routes, Route, useLocation } from "react-router-dom";

function CurrentPath() {
   const location = useLocation();
   switch (location.pathname) {
      case "/":
         return 1;
      case "/testing":
         return 2;
      case "/about":
         return 3;
      case "/contacts":
         return 4;
      default:
         return 0;
   }
}

function App() {
   const main = {
      padding: "20px",
      background: "lightgrey",
      minHeight: "calc(100vh - 40px)",
      textAlign: "center",
   };

   const bird1 = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
   );

   const bird2 = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
   );

   function toggle1() {
      if (bird1.paused) {
         bird1.play();
      } else {
         bird1.pause();
      }
   }

   function toggle2() {
      if (bird2.paused) {
         bird2.play();
      } else {
         bird2.pause();
      }
   }

   const flex = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
   };

   return (
      <div style={main}>
         <Nav isActive={CurrentPath()} />
         <div style={flex}>
            <Intro tit="Hi" po="My name is Alex" />
            <Intro tit="Hola" po="Me llamo Alex" />
            <Intro tit="Привет" po="Меня зовут Саша" />
         </div>
         <Routes>
            <Route path="/" element={<Promo />} />
            <Route path="/testing" element={<TestBlock />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
         </Routes>
         <Footer />
         <button onClick={() => console.log("clicked")}>Click me</button>
         <div>
            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
         </div>
      </div>
   );
}

export default App;
