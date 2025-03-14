import "./ProjectBlog.css"
import logo from "/Users/jaypatel/Desktop/wikiFind/wiki-Find/src/assets/UTTT.png"
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  includeLine?: boolean; // Optional prop
  link?: string
  imageLink?: string
}

function ProjectBlog({ title, description, includeLine = false , link="",imageLink=""}: Props){
  const onClick=(url:string)=>{
    
        window.open(url,"_blank");

  }
  const [isHover,changeHover]=useState(0);
  
  

  return (
    <div onClick={()=>onClick(link)} className={isHover ? "project-blog-hover" : "project-blog"} onMouseEnter={()=>{changeHover(1)}} onMouseLeave={()=>changeHover(0)}>
    <img className="project-image" src={imageLink} alt="No Images Yet..." width={200} height={200}/>
      <h2 className="project-title">{title}</h2>
      <div className="project-description">
        {description}
      </div>
      {includeLine && <hr className="divider"/>}
    </div>
  );
};

export default ProjectBlog;
