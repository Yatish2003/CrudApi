import Child from "./Child";
// import Parent from "./Parent";
// import Greatfather from "./Greatfather";
// import Use from "./useState/Use";
// import PropState from "./useState/PropsState";
// import Example from "./CRendering/Example";
// import Home from "./CRendering/Home";
// import Nav from "./CRendering/Nav";

// import StudentTable from "./Table/StudentTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nav from "./Routes/Nav";
// import Home from "./Routes/Home";
// import About from "./Routes/About";
// import Contact from "./Routes/Contact";
// import SignUp from "./Routes/SignUp";
// import Service from "./Routes/Service";
// import Effect from "./Hook/Effect";
// import Product from "./Carsd/Product";
// import Cards from "./Carsd/Cards";
// import HomeC from "./Carsd/HomeC";

import Nav from "./Fetch/Nav";
import JsonApi from "./Fetch/JsonApi";
import University from "./Fetch/University";
import BreedsImg from "./Fetch/BreedsImg";
function App() {
  // function fun(){
    
  //   console.log("product");
  // }
  // const val=["yatish","yash","sidhu"]
  return (
      <>
        
          
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Nav/>} />
            <Route path="/jsonApi" element={<JsonApi/>} />
            <Route path="/university" element={<University/>} />
          
          </Routes>

        
        </BrowserRouter>
        {/* <BrowserRouter>
          <Routes>

            <Route path='/' element={<HomeC/>}/>
            <Route path='/product' element={<Product/>}/>

            <Route path='/cart' element={<Cards/>}/>
          </Routes>
        </BrowserRouter> */}
        {/* <Child data={fun}/> */}
        {/* <Parent/> */}
        {/* <Greatfather/>  */}
        {/* <Use/> */}
        {/* <PropState data={val}/> */}
        {/* <Example/> */}
        {/* <Nav/> */}
        {/* <StudentTable/> */}

        {/* <BrowserRouter>
          <Nav/>
          <Effect/>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/effect"  element={<Effect/>}/>
            <Route path="/about/:info"  element={<About/>}/>
            
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/service"  element={<Service/>}/>
            <Route path="/contact/Signup"  element={<SignUp/>}/>
          </Routes>
        </BrowserRouter> */}

      </>
  );
}

export default App;
