import Link from "next/link";

export default function Navbar() {
    return(
       <section>
            <div className="flex z-20 justify-between lg:px-16 w-screen h-16 md:h-20 bg-gray-50 dark:bg-neutral-800 dark:bg-opacity-30 dark:backdrop-blur-xl bg-opacity-30 backdrop-blur-xl  fixed top-0">
           
              <Link href='/'>
                <div className="flex">
                <h1 className="ml-5 text-lg italic tracking-widest text-whit mt-6 font-bold">Daniel.jsx</h1> 
                <p className=" font-extralight mt-4 ml-0.5">tm</p>
                </div>
              </Link>  

              <div className='flex flex-col lg:hidden -mt-0.5 mr-5 ' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className='h-12 w-10 md:mt-2 text-gray-5 '       >  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className="h-12 w-10 -mt-10 text-gray-5"        >  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className="h-12 w-10 -mt-10 text-gray-5"        >  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
              </div>

              <div className=" h-14 w-[43%] hidden lg:flex justify-evenly items-center my-auto text-lg">
                <Link href='/about'><p className="font-semibold ">About</p></Link>
                <Link href='/projects'><p className="font-semibold ">Projects</p></Link>
                <Link href='/contact'><p className="font-semibold ">Contact</p></Link>

                <Link href='/myresume.pdf'>
                
                    <button className="w-36 h-12 flex justify-center rounded-md bg-blue-800">
                     <p className="text-white my-auto">Resume</p>
                     <svg className=" inver h-5 w-5 my-auto ml-3"  width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.55908 12.0276V12.9095C1.55908 13.6112 1.83782 14.2841 2.33398 14.7803C2.83014 15.2764 3.50307 15.5552 4.20475 15.5552H13.0236C13.7253 15.5552 14.3982 15.2764 14.8944 14.7803C15.3906 14.2841 15.6693 13.6112 15.6693 12.9095V12.0276M12.1417 8.50006L8.61419 12.0276M8.61419 12.0276L5.08664 8.50006M8.61419 12.0276V1.44495" stroke="white" strokeWidth="2.64567" strokeLinecap="round" strokeLinejoin="round"></path></svg>     
                   </button>
               
                </Link>  
              </div>
           
              
            </div>
       </section>
  )
    
}