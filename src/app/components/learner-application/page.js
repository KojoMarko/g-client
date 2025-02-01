import Footer from "../Footer";
import Navbar from "../Navbar";
import Register from "../Register";
import ApplicationProfile from "./ApplicationProfile";
import Dashboard from "./Dashboard";
import JohnDoeAP from "./JohnDoeAP";
import OopsAP from "./OopsAP";



export default function Home() {
    return (
      <div>
        <Navbar />
        <Dashboard />
        <Register />
        <Footer />
      </div>
    );
  }