import AnchorList from "./AnchorList"
import "./Contact.css"
import emailjs from '@emailjs/browser'
import React,{useRef} from 'react'
import { useState } from "react"

interface Props{
  items: string[]
  pageLinks: string[]
}
function Contact({items,pageLinks}:Props){
    const form= useRef();
    const [alertUp,changeAlert]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID!,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
          form.current, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log(alertUp)
            form.current.reset();
            changeAlert(true);
            setTimeout(()=>{
              changeAlert(false);
            },5000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
   
    return <>
    <AnchorList items={items} links={pageLinks}> 

    </AnchorList>
    <div style={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
        <h1>Let's Connect!</h1>
    </div>
    <div style={{display:'flex', justifyContent:"center",alignItems:"center"}}>
    <div>
      <form ref={form} onSubmit={sendEmail}>
      
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="user_name" required />
      <hr/>
      <label htmlFor="email">Email:</label>
   
      <input type="email" id="email" name="email" required />
      <hr/>

      <label htmlFor="textArea"> Type Your Message Here...</label>
      <input type="textArea" id="textArea" name="message" required/>
    
       


      <button type="submit">Submit</button>
    
    </form>
    
    {alertUp && <div style={{marginTop:'5%',textAlign:'center'}} className="alert alert-success" role="alert">
  Email Sent!
  
</div> }
</div>     
        
    </div>
    
    </>
}

export default Contact

