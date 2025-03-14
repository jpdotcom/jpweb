import Component from "./components/Component"
import HomePages from "./components/HomePages";
import ListGroup from "./components/ListGroup";
import { Routes , Route, Link, BrowserRouter} from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App(){
  const homePages=["Projects", "Blog","Contact Me"];
  const ProjectsPage=["Home Page", "Blog","Contact Me"]
  const ProjectPageLinks=["", "Blog","Contact Me"]
  const ContactPages=["Home Page", "Blog","Projects"]
  const ContactPageLinks=["", "Blog","Projects"]
  return <>
  <div>
    
  </div>
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<HomePages items={homePages}></HomePages>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Projects" element={<Projects items={ProjectsPage} pageLinks={ProjectPageLinks} />}></Route>
        <Route path="/Contact Me" element={<Contact items={ContactPages} pageLinks={ContactPageLinks} />} ></Route>
    </Routes>
    
    </BrowserRouter> 
    </>
  
    
  
}

export default App;