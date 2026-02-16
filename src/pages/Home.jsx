import React from "react";
import Hero from "../components/Hero"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp  } from "react-icons/fa";



const Home = () => {
    
    return (
        <div className="relative ">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
                        <h1 className="text-2xl leading-tight text-black dark:text-white mb-2">Hello, my name is</h1>
                        <span className="inline-block bg-oranges text-black font-extrabold text-4xl md:text-5xl rounded-full w-fit px-4 py-2 mb-2">Bárbara Sobral</span>
                        <span className="inline-block bg-lemon text-black font-extrabold text-4xl md:text-5xl rounded-full w-fit px-4 py-2">FRONT END DEVELOPER</span>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                        <Hero />
                    </div>
                </div>
            </main>
            <div className="flex justify-between px-11 py-2">
                <ul className="flex justify-center gap-4">
                    <li className="flex items-center justify-center text-2xl bg-blues w-12 h-12 rounded-full hover:text-lemon transition duration-200">
                        <a href="https://github.com/barbarasobral"><FaGithub /></a>
                    </li>
                    <li className="flex items-center justify-center text-2xl bg-blues w-12 h-12 rounded-full hover:text-lemon transition duration-200">
                        <a href="https://www.linkedin.com/in/barbaratsobral"><FaLinkedin /></a>
                    </li>
                    <li className="flex items-center justify-center text-2xl bg-blues w-12 h-12 rounded-full hover:text-lemon transition duration-200">
                        <a href="https://www.instagram.com/barbarathaiss"><FaInstagram /></a>
                    </li>
                    <li className="flex items-center justify-center text-2xl bg-blues w-12 h-12 rounded-full hover:text-lemon transition duration-200">
                        <a href="https://wa.me/5575992533951"><FaWhatsapp /></a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default Home;