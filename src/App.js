import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  const main = {
    padding: "20px",
    background: "lightgrey",
    height: "100vh",
    textAlign: "center",
  };

  const flex = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div style={main}>    
      <Nav />
      <div style={flex}>
        <Intro tit="Hi" po="My name is Alex"/>
        <Intro tit="Hola" po="Me llamo Alex"/>
        <Intro tit="Привет" po="Меня зовут Саша" />
      </div>
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
