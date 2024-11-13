import React from "react"
import {BrowserRouter, Routes,Route, Link} from "react-router-dom"
import UserProfiles from "./components/UserProfiles"
import ProductInfo from "./components/ProductInfo"


function App() {
  
<BrowserRouter></BrowserRouter>
  return (
    
    <BrowserRouter>
      
      <div className=" flex justify-center p-4">
        <div className="  border-solid border-2 border-black rounded-md p-4  m-2 bg-black text-gray-200 font-medium  ">
          <Link to="/profile" >User Profiles </Link>
        </div>
        <div className="  border-solid border-2 border-black rounded-md p-4  m-2 bg-black text-gray-200 font-medium">
          <Link to="/product">Products </Link>
        </div>
      </div>
      <Routes>
        <Route path="/profile" element={<UserProfiles/>}></Route>
        <Route path="/product" element={<ProductInfo/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
      
    
    
  )
}

export default App
