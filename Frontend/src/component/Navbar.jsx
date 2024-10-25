import { useEffect, useState} from "react"
import { Link } from "react-router-dom";
import ThemeComp from "./ThemeComp";
import Login from './Login.jsx';

export default function Header(){
  let [sticky,setSticky] = useState(false);





  // scroll navbar effect
  useEffect(()=>{
    let handleScroll = ()=>{
      if(window.scrollY > 0){
       setSticky(true);
      }else{
      setSticky(false);
      }
    }

    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll);
      }

  },[]);

  return(
      <div className={`navbar bg-white  bg-base-100 border-b-2 sticky top-0 z-10 ${sticky && 'bg-neutral-200 transition'}
      dark:bg-black dark:text-white`}>
  <div className="navbar-start lg:w-2/4">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu bg-white text-base font-semibold	 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
         <li><Link to='/' className="text-black">Home</Link></li>
      <li><Link to='/course' className="text-black">Course</Link></li>
      <li><Link to='/' className="text-black">About</Link></li>
      <li><Link to='/' className="text-black">Contact</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-black text-xl font-bold dark:text-white">BookStore</Link>
  </div>
  <div className="navbar-center  hidden lg:flex lg:w-2/6 justify-end">
    <ul className="menu text-black text-base font-semibold menu-horizontal px-1 dark:text-white">
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/course' >Course</Link></li>
      <li><Link to='/' >About</Link></li>
      <li><Link to='/'>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex lg:gap-x-9 gap-x-4 lg:w-1/6">
    <ThemeComp />
    <a 
    className="btn login-btn dark:bg-red-500"
    onClick={()=>document.getElementById('my_modal_3').showModal()}
    >LogIn</a>
    <Login/>
  </div>
</div>

  )
}