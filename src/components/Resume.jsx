import ResumeImg from '../asset/resumePhoto.jpg';
export default function Resume(){
    return <section id='resume' className='flex flex-col md:flex-row  px-5'>
        <div className='py-5 md:w-1/2 flex  justify-center md:justify-end'>
            <img className='w-1/2'src = {ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col m-9 text-white justify-center'>
                <h1 className='text-3xl text-indigo-800 mb-6  font-heroine-font '>You can view my resume</h1>
          
           
            <button className='rounded-lg'> <a className='btn' href='#'> View</a> </button>
            
            </div>
        </div>
    </section>
}