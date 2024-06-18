import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Promo />
        <Intro tit="Hi" po="My name is Alex"/>
        <Intro tit="Hola" po="Me llamo Alex"/>
        <Intro tit="Привет" po="Меня зовут Саша" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
