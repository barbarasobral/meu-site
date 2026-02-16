import React from 'react'
import Swal from 'sweetalert2'



const Contact = () => {
    

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "24940881-769a-4496-a1ac-39b6865f6f57");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
            
            Swal.fire({
              title: "Sent!",
              text: "Your message was sent successfully!",
              icon: "success"
            });

            event.target.reset();

             } else {
            
            console.error("Falha no envio:", data.message);
        }
  };


  return (
    <section id='contact' className='bg-white dark:bg-black min-h-screen flex items-center justify-center p-4'>
        <div className="w-full max-w-6xl mx-auto">
          <h1 className='text-5xl text-oranges font-bold text-center items-center'>Contact Me</h1>
            <div className="grid md:grid-cols-1 justify-items-center w-full">
               <div className=' text-black dark:text-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-2xl'>
                                              
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label className='block text-sm font-medium mb-1'>Full Name</label>
                        <input type="text" placeholder='Enter your name' name='name' required autoComplete='name' className='w-full border border-blues p-3 rounded-lg' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>E-mail Address</label>
                        <input type="email" placeholder='Enter your e-mail' name='email' required autoComplete='email' className='w-full border border-blues p-3 rounded-lg' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Your Message</label>
                        <textarea name="message" id="" placeholder='Enter your message' required rows={4} className='w-full border border-blues p-3 rounded-lg'></textarea>
                    </div>
                    <button type='submit' className='w-full bg-blues hover:bg-blue-600 rounded-lg transition duration-200'>Send Message</button>
                </form>
            </div>            
                
            </div>   
        </div>
    </section>
  )

}
export default Contact