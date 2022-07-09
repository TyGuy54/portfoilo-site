import react from 'react';
import '../../../assets/css/util.css';

export const ProjectPage = () => {
    return (
        <div className='h-screen bg-gray-700'>
            <div className='font-invasion text-[90px] 
                        text-white text-center'>
                <h1 className='text-shadow text-left pl-64'>Projects</h1>
                <div className='flex'>
                    <div className='container text-[30px]'>
                        <p className='text-shadow text-left pl-64 pt-10'>
                        Here are some of the projects that I have worked on!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}