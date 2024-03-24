import AboutImg from '../asset/about.png';
export default function About(){
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
            <img className='w-1/2'src = {AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center font-heroine-font'>
            <div className='flex flex-col m-9 text-white justify-center'>
                <h1 className='text-3xl text-white mb-6 w-[150px] font-bold '>About me</h1>
            <p className='pb-5'>Proficient Python developer adept at creating efficient and scalable solutions. Experienced 
            in web development, data analysis, and automation. </p>
            <p className='pb-5'> Skilled in utilizing Python libraries such as Django and Flask for backend development.</p>
            <p className=''> Passionate about continuously learning and implementing best practices in Python programming.</p>
            </div>
        </div>
    </section>
}