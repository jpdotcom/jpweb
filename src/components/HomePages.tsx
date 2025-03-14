
import AnchorList from "./AnchorList";
import Intro from "./Intro";
import "./HomePage.css"
import { Routes , Route, Link, BrowserRouter} from "react-router-dom";

interface Props{
    items:string[]
}


function HomePages({items}: Props){
    
    
    const header="Hey, I'm Jay 🫨"
    const intro="Hi, I'm Jay Patel! I'm an aspiring computer scientist and researcher, currently studying CS + Math at Case Western Reserve University with a strong passion for computational problem-solving, machine learning, and software development. I currently conduct research at INVent lab, an image pathology lab at CWRU, and have experience in competitive programming, and full stack web development. My work spans across several domains, including teaching, research, and real-world projects. Explore what I’m currently working on and feel free to connect through LinkedIn or the contact form!"
    const socialUrls=["https://github.com/jpdotcom","https://www.linkedin.com/in/jay-patel-14abba292/"]
    const socials=["github","linkedin"]
    return <>


        {/* <div style={{ width: "100%", display: "table"}}>
    <div style={{display: "table-row"}}>
        <div id="leftDiv" style={{width: "600px", display: "flex", flexDirection:"column"}}>
      
        <AnchorList items={items} links={items}> 
            
            </AnchorList>
        <div className="spacer"></div>
 <Intro header={header} paragraph={intro}>
<div className="spacer"></div>
        </div>
        <div style={{width: "600px", display: "table-cell"}}>
            <img id="bst" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png"></img>
        </div>
       
    </div>
</div> */}

    <div style={{display:'flex',width:"100%"}}>
        <div style={{display:'flex',width:"50%",flexDirection:"column"}}> 

        <AnchorList items={items} links={items}> 

        </AnchorList>
        <div className="spacer"></div>
        <Intro header={header} paragraph={intro} socials={socials} urls={socialUrls}> 

        </Intro>

        </div>
       
        <div style={{display:'flex',width:"50%"}}> 
            <img id="bst" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png"></img>
        </div>
    </div>
        


     </>
   
}


export default HomePages;
