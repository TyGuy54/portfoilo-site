import '../../../assets/css/util.css';

export const ProjectPage = () => {
    return (
        <div className='h-screen bg-gray-800' id='projects'>
            <div className='font-invasion text-[90px] 
                        text-white text-center'>
                <h1 className='text-shadow text-left pl-64'>Projects</h1>
                <div className='flex'>
                    <div className='container text-[30px]'>
                        <p className='text-shadow text-left pl-64 pt-10'>
                            Interested in seeing my work?
                        </p>
                        <p className='text-shadow text-left pl-64'>
                            Visit my github with the link below, there is a lot of cool stuff in there!
                        </p>
                        <p className='text-shadow text-left pl-64 pt-10 text-blue-600'>
                            <a href='https://github.com/TyGuy54'>Click here if you would like to view any of my other projects on Github.</a>
                        </p>
                        <p className='text-shadow text-left pl-64 pt-10'>
                            Like what you see? 
                        </p>
                        <p className='text-shadow text-left pl-64'>
                            you can contact here at TylerRoss107@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}