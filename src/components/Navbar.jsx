import { Link } from "react-scroll"

function Navbar() {

  
  return (
    <div className="md:flex md:justify-between">
        <div>
            <img src='logo.jpg' className="w-72 md:w-44 md:ml-12 mt-3 m-auto" />
        </div>

        <div className="font-mono text-2xl mt-14 underline flex justify-around">
            <Link to="about" spy={true} smooth={true} offset={0} duration={700} className="md:mr-52 transition duration-500 hover:scale-125">About</Link>
            <Link to="menu" spy={true} smooth={true} offset={0} duration={700} className="md:mr-52 transition duration-500 hover:scale-125">Menu</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} className="md:mr-52 transition duration-500 hover:scale-125">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar