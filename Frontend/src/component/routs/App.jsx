import Header from '../Navbar'
import Footer from '../Footer'
import "../routs/App.css"
import "../FreeBook.css"
import 'swiper/css';
import 'swiper/css/pagination'; // Optional if you're using pagination
import 'swiper/css/navigation'; // Optional if you're using navigation 
import { Outlet } from 'react-router-dom'

function App() {

  return (
  <div className='bg-white dark:bg-black dark:text-white'>
  <Header/>
  <Outlet/>
  <Footer/>
  </div>
  )
}

export default App
