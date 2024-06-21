import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Promo from './components/Promo';
import Footer from './components/Footer';
import RegisterForm from './components/testingOnes/RegisterForm';
import InputComponent from './components/testingOnes/InputComponent'
import TextInputWithFocusButton from './components/testingOnes/TextInputWithFocusButton'
import UpToDate from './components/testingOnes/UpToDate';

const blog = {
}

function App() {
  const main = {
    padding: "20px",
    background: "lightgrey",
    // height: "100vh",
    textAlign: "center",
  };

  const flex = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div style={main}>    
      <Nav isActive={1}/>
      <div style={flex}>
        <Intro tit="Hi" po="My name is Alex"/>
        <Intro tit="Hola" po="Me llamo Alex"/>
        <Intro tit="Привет" po="Меня зовут Саша" />
      </div>
      <Promo />
      <div id='testing-ones'>
        <div style={blog}>
          <InputComponent />
        </div>
        <div style={blog}>
          <TextInputWithFocusButton/>
        </div>
        <div style={blog}>
          <RegisterForm/>
        </div>
        <div style={blog}>
          <UpToDate/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
