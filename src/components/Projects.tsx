import ProjectBlog from "./ProjectBlog";
import { useState } from "react";
import "./Projects.css"
import AnchorList from "./AnchorList";

interface Props{
    items: string[]
    pageLinks: string[]
}
function Projects({items,pageLinks}:Props){

    let titles=["AlphaZero","Fourier Drawer", "Task Manager Website"];
    let desc=[
        "Program to play Ultimate TictacToe",
        "Web app to draw user inputs using Fourier Transfrom",
        "Task Managing Application With Prioritization"

    ]
    let links=[
       
        "https://github.com/jpdotcom/AlphaZeroUTTT",
        "https://github.com/jpdotcom/FourierTransformDrawer ",
        "https://github.com/jpdotcom/TaskManager"
    ]
    let ProjectImageLinks=[
    
        
        "/src/assets/UTTT.png",
        "/src/assets/FFT.png",
        "/src/assets/Task.png"
    ]

    return <>
    <div>
    <AnchorList items={items} links={pageLinks}> 

</AnchorList>
            <h1 style={{textAlign:"center", color:"black"}}> Recent Projects!</h1>
            <div key="outer" style={{display:"flex", justifyContent:"center" , marginTop:"10%"}}>
            
            {titles.map((title,i)=> <ProjectBlog  key={title} title={title} description={desc[i]} link={links[i]} imageLink={ProjectImageLinks[i]}></ProjectBlog>)}
            
            
    
            </div>
    
            <div style={{display:"flex", justifyContent:"center"}}> <p> See more on my GitHub! </p> </div>
    </div>


    </>
}

export default Projects