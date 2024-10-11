import React from "react";
export default function NavComponent({type,text})
{
    return (
        <>
        <li><a href={type} >{text}</a></li>
        </>
    );

}