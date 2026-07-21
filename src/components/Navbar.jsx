import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/30
      backdrop-blur-lg
      border-b
      border-white/20
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">


        {/* Logo */}

        <div className="text-black">

          <h1 className="
            text-2xl
            font-bold
          ">
            YPS
          </h1>

          <p className="
            text-xs
            text-black
          ">
            Youth Portal System
          </p>

        </div>



        {/* Menu */}

        <div className="
          hidden
          md:flex
          gap-8
          text-black
          font-medium
        ">

          <a href="#">
            Home
          </a>

          <a href="#">
            Programmes
          </a>

          <a href="#">
            Youth Centres
          </a>

          <a href="#">
            Opportunities
          </a>

          <a href="#">
            Contact
          </a>


        </div>



        {/* Button */}

        <Link
  to="/login"
  className="
    bg-blue-600
    text-white
    px-6
    py-2
    rounded-xl
    hover:bg-blue-700
    transition
  "
>
  Login
</Link>


      </div>

    </nav>
  )

}


export default Navbar;