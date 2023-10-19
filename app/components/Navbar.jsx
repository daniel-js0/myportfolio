import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
       <section>
            <div className="flex z-20 justify-between lg:px-16 w-screen h-16 md:h-20 bg-gray-950 bg-opacity-80 backdrop-blur-lg shadow-md shadow-slate-950 fixed top-0">
           
             <Link href='/'><Image className="md:h-[5.9rem] md:w-[6.5rem] h-20 w-24  md:ml-5 md:pt-3 pt-1" src='/logon.png' width={120} height={90} quality={100}/></Link> 


              <div className='flex flex-col lg:hidden -mt-0.5 mr-5 ' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className='h-12 w-10 md:mt-2 text-gray-50 '       >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className="h-12 w-10 -mt-10 text-gray-50"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                  className="h-12 w-10 -mt-10 text-gray-50"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
              </div>

              <div className=" h-14 w-[48%] hidden lg:flex justify-evenly items-center my-auto text-lg">
                <Link href='/'><p className="text-white ">Home</p></Link>
                <Link href='/about'><p className="text-white ">About</p></Link>
                <Link href='/'><p className="text-white ">Projects</p></Link>
                <Link href='/'><p className="text-white ">Contact</p></Link>

                <Link href='/'>
                 <div className="">
                    <button className="w-36 h-12 flex justify-center rounded-md bg-slate-800">
                     <p className="text-white my-auto">Resume</p>
                     <svg className=" text-white h-5 w-5 my-auto ml-3"  width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.55908 12.0276V12.9095C1.55908 13.6112 1.83782 14.2841 2.33398 14.7803C2.83014 15.2764 3.50307 15.5552 4.20475 15.5552H13.0236C13.7253 15.5552 14.3982 15.2764 14.8944 14.7803C15.3906 14.2841 15.6693 13.6112 15.6693 12.9095V12.0276M12.1417 8.50006L8.61419 12.0276M8.61419 12.0276L5.08664 8.50006M8.61419 12.0276V1.44495" stroke="white" stroke-width="2.64567" stroke-linecap="round" stroke-linejoin="round"></path></svg>     
                   </button>
                 </div>
                </Link>  
              </div>
           
              
            </div>
       </section>
  )
    
}