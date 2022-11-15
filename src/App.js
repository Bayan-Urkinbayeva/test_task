import Navbar from "./components/Navbar";
import FirstScreen from "./components/FirstScreen";
import AboutMe from "./components/AboutMe";
import Numbers from "./components/Numbers";
import Skills from "./components/Skills";
import VideoSection from "./components/VideoSection";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full bg-white h-auto flex flex-col items-center justify-center">
      <Navbar/>
      <FirstScreen/>
      <AboutMe/>
      <Numbers/>
      <Skills/>
      <VideoSection/>
      <Projects/>
      <Clients/>
      <Form/>
      <Footer/> 
    </div>
  );
}

export default App;
