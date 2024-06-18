import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Promo from './components/Promo';
import Footer from './components/Footer';

// function Bag(props) {
//   const bag = {
//       padding: "20px",
//       border: "1px solid gray",
//       background: "#fff",
//       margin: "20px 0"
//   }
//   return (
//       <div style={bag}>
//           {props.children}
//       </div>
//   )
// }

// function Apples(props) {
//   return (
//     <div className="promo-section">
//         <div>
//             <h2>These apples are: {props.color}</h2>
//             </div>
//             <div>
//             <h3>There are {props.number} apples.</h3>
//         </div>
//     </div>
//   )
// }

// function Pears(props) {
//   return (
//     <h2>I don't like pears, but my friend, {props.friend}, does</h2>
//   )
// }

function App() {
  const main = {
    padding: "20px",
    background: "lightgrey",
    height: "100vh"
  };
  return (
    <div style={main}>    
      <Nav />
      <Promo />
      <Intro tit="Hi" po="My name is Alex"/>
      <Intro tit="Hola" po="Me llamo Alex"/>
      <Intro tit="Привет" po="Меня зовут Саша" />
      <Footer />

      {/* <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag> */}
    </div>
  );
}

export default App;
