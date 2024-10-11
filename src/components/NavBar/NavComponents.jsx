import React from "react";
import NavComponent from "./NavComponent";
import navComponents from "../navComponentsDetail";
export default function NavComponents()
{
    return (
        <>
        <ul>
           {navComponents.map((obj,index)=>(
            <NavComponent
            key={index}
            text={obj.text}
            type={obj.type}
            />
           ))}
        </ul>
        </>
    )
}