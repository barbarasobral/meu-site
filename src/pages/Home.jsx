import React from "react";
import Hero from "../components/Hero"



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
            <a href="#skills" className="sticky bottom-24 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none bg-blues hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out z-50 w-fit">Skills</a>
        </div>
        
    )
}

export default Home;