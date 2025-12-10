import React from "react";
import myPhoto from '../assets/polaroide.png';

const About = () => {
    
    return (
        <section id="about" className=" min-h-screen flex items-center justify-center px-8">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-1 py-10 md:py-0">
                    <h1 className="text-oranges text-4xl font-bold mb-6">About Me</h1>
                    <p className=" text-black dark:text-white text-lg">
                        Hi! I'm Bárbara Sobral. I'm a self-taught Front End Developer based in Bahia, Brazil.
                        I'm passionate about solving problems, collaborating with great people, and continuously learning.
                        Over the course of my career as a front-end developer, I've built several websites and applications with a focus on responsiveness and pleasing aesthetics.
                    </p>
                </div>
                <div className="md:col-span-1 flex justify-center">
                    <img src={myPhoto} alt="Minha Foto" className="w-[350px] h-[350px] object-contain rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    )
}

export default About;