import { MdEmail } from "react-icons/md";

export default function InputBanner(){
  return (
    <>
    <div className="input-banner mt-5">
      <MdEmail className="font-semibold text-black text-xl dark:text-white" /> 
     <input type="search" className="input bg-white h-9 text-black font-bold  dark:bg-black dark:text-white" placeholder="Email" aria-label="Search"/>

    </div>
    <button 
     className='btn mt-5 text-white border-none' 
     style={{ background:"rgb(241, 129, 228)",fontWeight:"650"} }>
      Get started
     </button>
    </>
  )
}