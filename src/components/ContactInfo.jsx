import React from "react";
export default function ContactInfo({href,i_class,span_text})
{
    return (
        <>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={i_class}/>
          <span className="sr-only">{span_text}</span>
        </a>
        </>
    )
}