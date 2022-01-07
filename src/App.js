import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
