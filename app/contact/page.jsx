import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Contact = () => {
  return (
  <main>
      <Navbar/>
      <div className='mt-32 mb-28 h-[37rem] w-[90%] md:w-[65%] lg:w-[40%] bg-slate-00 mx-auto'>

        <h1 className='text-center  mt-32 text-blue-800 font-sans text-4xl tracking-wider md:text-5xl font-extrabold md:tracking-wide'>Get In Touch</h1>
        <p className='mt-6 px-5 md:px-1 text-lg text-slate-900 font-semibold dark:text-slate-100  md:text-xl  text-center'>Do you have an Idea about anything? or want to bring your idea or presence to the web?. 
            Have a chat with me about your idea via any of the links below or send me an email by 
            filling the form below. My inbox is always open.</p>
        
        <input type="text" 
        className="w-[100%] mx-auto h-16 focus:outline-blue-500 placeholder:text-slate-100 placeholder:text-lg px-5  rounded bg-neutral-500  mt-14"
        placeholder="what's your name?"
        />

        <input type="email" 
        className="w-[100%] h-16 focus:outline-blue-500 placeholder:text-slate-100 placeholder:text-lg px-5 rounded bg-neutral-500 mt-6"
        placeholder="what's your @email address?"
        />

        <input type="text" 
        className="w-[100%] h-16 focus:outline-blue-500 placeholder:text-slate-100 placeholder:text-lg px-5 rounded bg-neutral-500 mt-6"
        placeholder="what do you have for me/ offer?"
        />

        <button className="w-[100%] h-16 bg-blue-800 rounded-lg mt-7 text-xl font-bold text-slate-200">
              send it to me !
        </button>
      </div>
      <Footer/>
  </main>
  )
}

export default Contact