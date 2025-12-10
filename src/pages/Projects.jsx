import React from 'react'



const Projects = () => {
    
    return (
        <div id='projects' className="w-full overflow-x-auto bg-white dark:bg-black">
            <h1 className='text-oranges text-5xl font-bold mb-6 mt-10 text-center'>Projects</h1>
            <div className="flex gap-6 p-4">
              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/song-music.png" alt="Projeto SongMusic" className='w-full h-62 object-cover rounded' />
                <h3 className='text-white text-xl font-bold mt-4'>SONG MUSIC</h3>
                <p className='text-gray-300'>A site for music app</p>
                <p className='text-gray-400 text-sm mt-2'>• HTML • TAILWIND • JAVASCRIPT</p>
                <div className='mt-3'>
                    <a href="https://github.com/barbarasobral/songmusic" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div>

              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/shopping-cart.png" alt="Projeto Shopping Cart" className="w-full h-62 object-cover rounded" />
                <h3 className='text-white text-xl font-bold mt-4'>SHOPPING CART</h3>
                <p className='text-gray-300'>A shopping cart website</p>
                <p className='text-gray-400 text-sm mt-2'>• REACT • CSS • JAVASCRIPT</p>
                <div className='mt-3'>
                    <a href="https://github.com/barbarasobral/shopping-cart" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div>

              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/guess-word.png" alt="Projeto Guess Word" className="w-full h-62 object-cover rounded" />
                <h3 className='text-white text-xl font-bold mt-4'>GUESS WORD</h3>
                <p className='text-gray-300'>Guess word game</p>
                <p className='text-gray-400 text-sm mt-2'>• REACT • CSS • JAVASCRIPT</p>
                <div className='mt-3'>
                    <a href="https://github.com/barbarasobral/guess-word" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div>

              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/mini-blog.png" alt="Projeto Mini Blog" className="w-full h-62 object-cover rounded" />
                <h3 className='text-white text-xl font-bold mt-4'>MINI BLOG</h3>
                <p className='text-gray-300'>A mini blog website</p>
                <p className='text-gray-400 text-sm mt-2'>• REACT • CSS • JAVASCRIPT • FIREBASE</p>
                <div className='mt-3'>
                    <a href="https://github.com/barbarasobral/mini-blog" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div>

              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/password-generator.png" alt="Projeto Gerador de Senha" className="w-full h-62 object-cover rounded" />
                <h3 className='text-white text-xl font-bold mt-4'>PASSWORD GENERATOR</h3>
                <p className='text-gray-300'>A site for generating random passwords</p>
                <p className='text-gray-400 text-sm mt-2'>• HTML • CSS • JAVASCRIPT</p>
                <div className="mt-3 flex gap-4">
                    <a href="https://barbarasobral.github.io/password-generator/" className='text-lemon hover:underline'>Visit Site</a>
                    <a href="https://github.com/barbarasobral/password-generator" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div> 

              <div className="min-w-[600px] bg-slate-900 rounded-lg shadow-lg p-4">
                <img src="./src/assets/weather-app.png" alt="Projeto Weather App" className="w-full h-62 object-cover rounded" />
                <h3 className='text-white text-xl font-bold mt-4'>WEATHER APP</h3>
                <p className='text-gray-300'>A simple weather app</p>
                <p className='text-gray-400 text-sm mt-2'>• HTML • CSS • JAVASCRIPT</p>
                <div className="mt-3 flex gap-4">
                    <a href="https://barbarasobral.github.io/weatherApp/" className='text-lemon hover:underline'>Visit Site</a>
                    <a href="https://github.com/barbarasobral/weatherApp" className='text-lemon hover:underline'>Source Code</a>
                </div>
              </div>
            </div>
            <div className=' flex justify-center mt-5 mb-3 '>
                <a href="https://github.com/barbarasobral?tab=repositories" className='bg-lemon text-slate-900 font-bold hover:underline rounded-full w-fit px-4 py-2 mb-2' target='_blank' rel='noopener noreferrer'>More Projects</a>
            </div>
        </div>
    )
}

export default Projects;