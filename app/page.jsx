import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
   
     <div className=" w-[89%] lg:w-[80%] mx-auto pt-12 bg-slate-30 ">
               <p className="text-lg text-teal-500 md:text-xl  font-bold pt-20">Hi there, &#x1F44B; i'm</p>
               <h1 className="text-4xl tracking-wider md:text-7xl font-black text-slate-100 mt-3 md:mt-12 md:tracking-wide">Olagbegi 
                 <span className="ml-4 underline text-teal-500 ">Daniel.</span>
               </h1>
               <h3 className=" text-3xl tracking-wide mt-4 md:text-6xl font-extrabold text-slate-400 md:mt-6 md:tracking-tight">I create web-based projects.</h3>
             
              <div className="lg:w-[60%] w-[100%] mt-7 bg-slate-20">
                  <p className="text-slate-400 font-semibold md:text-2xl">As a <span className="text-teal-500 font-normal tracking-wide">Frontend Developer</span> , I specialize in building and launching dynamic user interfaces and 
                  experiences that captivate both clients and companies. I harness the power of the efficient 
                  technologies and design systems to create interactive solutions that leave a lasting impression. 
                  My primary objective is to deliver  the best, easiest, and most functional long-term solutions that 
                  not only meet the requirements of the company but also exceed the expectations of clients. With a strong 
                  commitment to user satisfaction, I strive to create seamless and engaging experiences that seamlessly blend aesthetic appeal with practical functionality. 
                </p>
              </div>
              <div className="flex justify-start">
                <Link href='/'>
                  <button className="w-32 h-12 flex justify-center rounded-md bg-slate-800 mt-6">
                      <p className="text-white my-auto">Hire me </p>
                      <svg className="text-white h-5 w-5 my-auto ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z" fill="currentColor"></path></svg>
                  </button>
                </Link>

                <Link href='/'>
                  <button className="w-44 h-12 flex ml-8 justify-center rounded-md bg-slate-800 mt-6">
                    <p className="text-white my-auto">View resume </p>
                    <svg className=" text-white h-5 w-5 my-auto ml-3"  width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.55908 12.0276V12.9095C1.55908 13.6112 1.83782 14.2841 2.33398 14.7803C2.83014 15.2764 3.50307 15.5552 4.20475 15.5552H13.0236C13.7253 15.5552 14.3982 15.2764 14.8944 14.7803C15.3906 14.2841 15.6693 13.6112 15.6693 12.9095V12.0276M12.1417 8.50006L8.61419 12.0276M8.61419 12.0276L5.08664 8.50006M8.61419 12.0276V1.44495" stroke="white" stroke-width="2.64567" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </Link>
              </div>

              <Link href='/'>
                <div className="pb-28">
                  <button className="w-36 h-12 flex justify-center rounded-md border border-slate-400 mt-6">
                    <p className="text-white my-auto">About me</p>
                    <svg className=" text-white h-5 w-5 my-auto ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="currentColor"></path></svg>
                  </button>
                </div>
              </Link>        
     </div>
    <Footer />     
    </main>
  )
}
