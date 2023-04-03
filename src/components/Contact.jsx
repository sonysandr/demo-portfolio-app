import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col p-4 justify-center items-center '>
        {/* <form method='POST' action="https://getform.io/f/fa89e186-99b4-4db1-8300-62f2c95111bb" className='flex flex-col max-w-[600px]'> */}
        <form  action="" className='flex flex-col max-w-[600px]'>
            <div className='pb=8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#BC9C22] text-gray-300  '>Contact</p>
                <p className='text-gray-300 p-4 '>Submit the form below or email me at email@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] ' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 ' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#BC9c22] px-4 py-3 my-8 mx-auto flex items-center'>Let's do this</button>
        </form>
    </div>
  )
}

export default Contact