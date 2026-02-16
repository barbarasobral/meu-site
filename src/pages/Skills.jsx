import React from "react";
import bgSkills from '../assets/bg-bg.png';
import bgMobile from '../assets/bg-mobile.png';

const Skills = () => {

    return (
        <div id="skills" className="relative min-h-screen p-4 overflow-hidden">
            <img src={bgMobile} alt="Background Mobile" className="absolute inset-0 w-full h-full object-contain z-0 md:hidden" />
            <img src={bgSkills} alt="Background Skills" className="absolute inset-0 w-full h-full object-contain z-0 hidden md:block" />
            <h1 className="relative text-oranges text-4xl font-bold mb-6 text-center z-10 py-8 md:py-3">Skills</h1>
        </div>
    )
}

export default Skills;