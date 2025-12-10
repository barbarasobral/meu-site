import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion'
import profilePicSource from '../assets/profile-pic.png'
import { FaReact, FaJs, FaCss3, FaBootstrap, FaHtml5, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const iconVariants = {
  hidden: { opacity: 0, scale: 0, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    }
  }
};

const containerVariants = {
    hidden: { 
        opacity: 0,
        transition: {
            when: "afterChildren",
        }
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1, 
        }
    }
};

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const icons = [
        { id: 1, Icon: FaReact, color: 'text-cyan-400'},
        { id: 2, Icon: FaJs, color: 'text-yellow-400'},
        { id: 3, Icon: FaHtml5, color: 'text-orange-500'},
        { id: 4, Icon: FaCss3, color: 'text-blue-500'},
        { id: 5, Icon: RiTailwindCssFill, color: 'text-cyan-500'},
        { id: 6, Icon: FaGithub, color: 'text-gray-400'},
    ]

    return (
        <div className="flex justify-center items-center h-full">
           
                <div className="flex items-center">
                    <motion.div 
                    className="flex flex-col space-y-3 mr-4 md:mr-6" 
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"} 
                    variants={containerVariants}
                >
                
                    {icons.map(({ id, Icon, color }) => (
                        <motion.div
                            key={id}
                            variants={iconVariants}
                            >
                            <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color}`} />
                        </motion.div>
                        ))}
                </motion.div>    
                        
                <div className="relative cursor-pointer " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <img src={profilePicSource} alt="Bárbara CartoonPic" className={`w-48 h-64 md:w-64 md:h-80 object-cover rounded-lg shadow-lg transition-opacity duration-300  `} />
                </div>   
            </div>
        </div>
    )
}

export default Hero;