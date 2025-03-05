import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;