import { useEffect, useState, useMemo } from 'react';
import "./Intro.css"
interface Props{
    header: string
    paragraph: string
    socials:string[]
    urls: string[]
}
function Intro({header,paragraph,socials,urls}: Props){


    const [i,setIndex]=useState(0);
    const speed=500;
    useEffect(()=>{
        
        if (i==header.length+1){
           
            setTimeout(() => {
                setIndex(i => 0);
                }, speed);
        }
        
    
    const timeoutId = setTimeout(() => {
        setIndex(i => i + 1);
        }, speed);
    
        ;
    },[i,header,speed]);
    const typeWriter=(text:string)=>{
        
        
        const displayText=text.slice(0,i);

        return displayText;
    }
    const [hover,setHover] = useState(0);
    const introHeader=typeWriter(header);
    const socialImages=socials.map((social,i)=> <i className={"fa fa-"+social + " " + (hover ? "socialHover" : "social")} onClick={()=>window.open(urls[i])} onMouseEnter={()=>{setHover(1)}} onMouseLeave={()=>{setHover(0)}} style={{fontSize:'36px'}}></i>);
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h1 style={{fontWeight:"bold", textAlign:"center"}}> {introHeader}</h1>
        <p style={{color: "#333333", textAlign:"center"}}> {paragraph} </p>
        <div style={{display:'flex',justifyContent:'space-evenly'}}> {socialImages} </div>
        </>
}

export default Intro