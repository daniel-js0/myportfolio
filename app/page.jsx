import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
  
   
     <div className=" w-[100%] lg:w-[100%] relative overflow-hidden min-h-screen mx-auto pt-6 bg-neutral-50 ">
               
      
               <Image className='mx-auto mt-2 grayscale  hover:grayscale-0 rounded-full h-40 w-40 md:w-60 md:h-60  border border-blue-700
                    delay-100 duration-700 hover:scale-105' src='/me.png' width={810} height={510} quality={100}/>

               <h1 className="text-center mt-4 font-sans text-2xl tracking-wider md:text-3xl font-black text-gray-900  md:tracking-wide">Hi there, I'm <span className=" tracking-widest underline underline-offset-8">Olagbegi <span className="text-blue-700">Daniel</span>  </span> </h1>
              

             
              <div className="lg:w-[70%] w-[90%] mt-5  bg-slate-20 mx-auto">
                  <p className="text-gray-950 md:text-lg  text-center">I'm a <span className=" text-blue-700 font-bold tracking-wide">Frontend Developer</span> ,
                  with a focus on crafting and deploying dynamic user interfaces and experiences that captivate clients and companies alike. I leverage 
                  <span className=" text-blue-700 font-bold tracking-wide"> cutting-edge technologies</span> and <span className=" text-blue-700 font-bold tracking-wide"> design systems</span>  to craft interactive solutions that make a lasting impact. 
                </p>
              </div> 

              <Link href='/about'>
                 <div className="h-12 w-40 mx-auto  mt-6">
                    <button className="w-40 h-12 flex justify-center rounded-md bg-slate-800">
                     <p className="text-white font-semibold my-auto">Come along</p>
                     <svg className="invert h-5 w-5 ml-1.5 mt-4"  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"><path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/><path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/></svg>
                   </button>
                 </div>
             </Link> 

           

            <Image class="absolute md:-top-24 md:-start-24 max-[780px]:h-32 max-[780px]:w-32 grayscale
            max-[780px]:-top-10 max-[780px]:-start-14 max-[285px]:hidden" src="/img4.png" alt="side" width={220} height={110} quality={100}/>
            <Image class="absolute -top-20 -end-24 max-[780px]:h-32 max-[780px]:w-32 grayscale
            max-[780px]:-top-10 max-[780px]:-end-12 max-[285px]:hidden" src="/img3.png" alt="side" width={220} height={110} quality={100} />
            <Image class="absolute -bottom-8 -end-12 max-[780px]:h-32 max-[780px]:w-32 grayscale
            max-[780px]:-bottom-14 max-[780px]:-end-6 max-[285px]:hidden" src="/img1.png" alt="side" width={220} height={110} quality={100}/>
            <Image class="absolute -bottom-12 -start-20 max-[780px]:h-32 max-[780px]:w-32 grayscale
            max-[780px]:-bottom-14 max-[780px]:-start-12 max-[285px]:hidden" src="/img2.png" alt="side" width={220} height={110} quality={100}/>      
     </div>
  
    </main>
  )
}
