import {Routes , Route} from "react-router-dom"
import User from "./users/pages/user"


function App() {
  

  return (
    <>

    <Routes>
        <Route path="/" element={<User/>}>
        </Route>
      </Routes>
     
    </>
  )
}



export default App
