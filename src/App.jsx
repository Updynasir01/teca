import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FAQs from "./Component/FQ"
import ContactForm from "./Component/SingUp"
import ServProducts from "./Component/ServiceProduct"
import WhyChooseUs from "./Component/WhayChoosing"
function App(){
  return<Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/FAQ" element ={<FAQs/>}/>
    <Route path="/Sing In" element={<ContactForm/>}/>
    <Route path="/ServiceProduct" element={<ServProducts/>}/>
    <Route path="/WhyChooseUs" element={<WhyChooseUs/>}/>
  </Routes>

}
export default App