import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavbarComponent from "./Component/Container/Navbar";
//import Menu from "./Component/Pages/MenuList/Menu";

function App() {
  return (
        //<Menu/>
        <NavbarComponent/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/navbar" element={<NavbarComponent/>}/>
    //     {/* <Route path="/Menu" element={<Menu />} /> */}
    //     <Route path="/" element={<LogIn />} />
    //   </Routes>
    // </BrowserRouter>

    // <div className="App">
    //   <Menu/>
    // </div>
  );
}

export default App;
