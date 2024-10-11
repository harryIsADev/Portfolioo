import React from "react";
import ContactInfo from "./ContactInfo";
export default function Contact() {
    const contactInfo=[
        {
            href:"https://github.com/Suuraw",
            i_class:"fab fa-github",
            span_text:"GitHub"
        },
        {
            href:"https://www.linkedin.com/in/sujay-kumar-4b85b5252/",
            i_class:"fab fa-linkedin",
            span_text:"LinkedIn"
        },
        {
            href:"mailto:sujayraw13@gmail.com",      
            i_class:"fas fa-envelope",
            span_text:"Email"
            
        }

    ]
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <div class="contact-links">
       {contactInfo.map((obj,index)=>
    (
    <ContactInfo
    key={index}
    href={obj.href}
    i_class={obj.i_class}
    span_text={obj.span_text}
    />
    ))}
      </div>
    </section>
  );
}
