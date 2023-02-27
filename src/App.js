import "./App.css";
import Navbarr from "./Components/Navbar/navbarr";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Projects from "./Components/Projects/projects";
import Spacer from "./Components/Spacer/spacer";
import Header from "./Components/Header/header";

function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <section id="home"></section>
      <Header></Header>

      <Spacer></Spacer>
      <section id="about"></section>
      <br></br>
      <br></br>
      <About></About>
      <Spacer></Spacer>
      <section id="projects"></section>
      <br></br>
      <br></br>
      <Projects></Projects>
      <Spacer></Spacer>

      <br></br>
      <section id="contact"></section>
      <Contact></Contact>
    </div>
  );
}

export default App;
