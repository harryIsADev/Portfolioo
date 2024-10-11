import React from "react";
import Heading from "./Heading";
import Para from "./Para";
export default function HeroSection()
{
    return (
        <section className="hero">
        <div>
            <Heading
            text={"Welcome to My Space"}
            />
            <Para
            text={"Full Stack Developer & UI/UX Enthusiast"}
            />
            <a href="#projects" class="btn">Explore My Work</a>
        </div>
    </section>
    )
}