import "./App.css";
import { Blog, Features, Footer, GPT3, Header, Possibility } from "./containers";
import { Cta, Brand, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
