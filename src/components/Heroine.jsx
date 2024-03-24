import landimg from '../asset/landimg.jpg';
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";

export default function Heroine(){
    return <section className='flex flex-col md:flex-row px-3 py-12 bg-white  justify-center text-gray-900'>
        <div className='md:w-1/2 flex flex-col '>
        <h1 className='w-1/2  text-5xl font-heroine-font py-5'>Hi <span className='text-indigo-900 py-5 block '>I am Sivadharshini</span>
            <p className='text-2xl '> Software Engineer</p>
        </h1>
        <div className='flex py-10'>
            <a href='#' className='pr-5 hover:text-gray-400'><AiOutlineTwitter size={40}/></a>
            <a href='#' className='pr-5 hover:text-gray-400'><AiOutlineInstagram size={40}/></a>
            <a href='#' className='hover:text-gray-400'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3 mt-1/8 pt-25 ' src  = {landimg} />

    </section>
}