import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar/>  
        </div>
    </div>
  )
}

export default Home

//sass: really easy to handle css files, nested css file, handle global variable
