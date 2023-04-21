import logo from '../../../assets/images/81783445.png'
import '../../../assets/css/util.css';

export const AboutPage = () => {
    return (
        <>
          <div className='h-[170vh] bg-gray-700'>
            <div className='font-invasion text-[90px] text-white text-center'>
              <h1 className='text-shadow text-left pl-64'>About</h1>
              <div className='flex'>
                  <div className='container text-[30px]'>
                    <p className='text-shadow text-left pl-64 pt-10'>
                      Ive been interesting in programming since I was
                      16, my main inspiration for programming was of course video games!  
                      Especially games from the 80s and 90s, there was always somthing so magical
                      about video games and I wanted to understand them at a deeper level. 
                    </p>
                    <p className='text-shadow text-left pl-64 pt-10'>
                      I've made games useing GameMaker Studio, whitch is a game engine
                      that uses its own language dirivitave of C/C++ and javascript.
                      It wouldnt until I was 18 where I started takeing programming more
                      seriously, I started learning Python and javascript and moved away from makeing games to focus on Web Development and creating other type of software.
                    </p>
                    <p className='text-shadow text-left pl-64 pt-10'>
                      I love Programming more than anything and im very happy that it has become something more of a hobby, and it's something I can do professionally.
                    </p>
                  </div>
                  <div className='container pl-72'>
                    <img className='w-3/4' src={logo} alt={'The coolest dude here'}/>
                  </div>
                </div>
              </div>
          </div>
      </>
    )
}
