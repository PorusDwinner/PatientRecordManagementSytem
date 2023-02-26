import { BrowserRouter , Routes , Route } from "react-router-dom";
import Topbar from "./component/Topbar";
import Home from "./component/Home";
import MemberLogin from "./page/MemberLogin";
import DoctorsDetails from "./page/DoctorsDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exat path="/" element={ <Home /> } />
          <Route exat path="/memberLogin" element={ <MemberLogin /> } />
          <Route exat path="/doctors-details" element={ <DoctorsDetails /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
