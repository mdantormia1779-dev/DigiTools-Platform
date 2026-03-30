import { useState } from 'react'
import Banner from './Components/Banner/Banner'
import Mainsection from './Components/Main/Mainsection'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import './index.css'

function App() {
  const [active, setActive] = useState("Products");
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Mainsection />
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs bg-transparent justify-center mb-4">
          <div className='border-gray-400 border-2 rounded-full text-black'>
            <input onClick={() => setActive("Products")} type="radio" name="my_tabs_1" className={`rounded-full tab w-30 ${active === "Products" ? "bg-[#9514FA] text-white" : "bg-white text-black}"} `} aria-label="Products" defaultChecked />
            <input onClick={() => setActive("Cart")} type="radio" name="my_tabs_1" className={`rounded-full tab w-30 ${active === "Cart" ? "bg-[#9514FA] text-white" : "bg-white text-black}"}`} aria-label="Cart (2)" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
