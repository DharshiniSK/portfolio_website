import ARAppImg from '../asset/ARproject.jpg'
import MLSysImg from '../asset/MLproject.jpg'
import DataAppImg from '../asset/dataProject.jpg'
export default function Projects(){
    return <section  id='project'className="flex  flex-col py-20 p-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex  flex-col px-7 pt-2"> 
                 <h1 className='text-3xl text-white mb-6 w-[120px] font-bold '>Projects</h1>
     
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-7 gap-8'>
                <div className='relative'>
                    <img className='h-[230px] w-[250px] rounded-full' src = {ARAppImg}/>
                    <div className='project-desc' >
                        <p className='text-center px-5 py-5 hover:rounded-full'>The Application with TamilNadu dress culture.Built with Blender and Unity</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[235px] w-[250px] rounded-full'  src = {MLSysImg}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'> The Jarvis project with Nlp. Built with python</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[235px] w-[250px] rounded-full'  src = {DataAppImg}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'> The Dashboard Application built with Tablue and PowerBI</p>
                    </div>
                </div>
             </div>
        </div>
    </section>
}