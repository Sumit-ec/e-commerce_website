import "./App.css";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import RoutesPath from "./routes/RoutesPath";
import Signin from "./signin/Signin";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <RoutesPath />
      <Footer />
    </>
  );
}

export default App;
