import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
