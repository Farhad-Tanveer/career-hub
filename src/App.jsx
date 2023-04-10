import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import AppliedJobs from "./components/AppliedJobs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="min-h-[calc(100vh-316px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
