import {Routes , Route} from "react-router-dom"
import User from "./users/pages/user"
import Addplaces from "./users/pages/Addplaces"



function App() {
  

  return (

    <div className="bg-gray-800 h-screen">
    


    <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/AddPlace" element={<Addplaces/>}/>
      </Routes>
     
    </div>
  )
}



export default App
