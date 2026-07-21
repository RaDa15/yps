import { Link } from "react-router-dom";


const Login = () => {


  const roles = [
    {
      initials:"TP",
      role:"Youth / Volunteer",
      name:"Tshering Pem",
      color:"bg-green-600",
      path:"/dashboard"
    },

    {
      initials:"SD",
      role:"YC Manager",
      name:"Sonam Dorji",
      color:"bg-blue-700",
      path:"/yc-manager-dashboard"
    },

    {
      initials:"KW",
      role:"PYCD Focal (Admin)",
      name:"Karma Wangmo",
      color:"bg-yellow-600",
      path:"/admin-dashboard"
    }
  ];



  return (

    <div className="
    min-h-screen
    bg-blue-50
    flex
    flex-col
    ">


      {/* Navbar */}

      <header className="
      h-20
      flex
      justify-between
      items-center
      px-8
      bg-white/70
      backdrop-blur
      border-b
      ">


        <h2 className="
        text-xl
        font-bold
        text-blue-700
        ">
          Bhutan Youth Portal
        </h2>


        <button className="
        bg-blue-700
        text-white
        px-6
        py-2
        rounded-xl
        ">

          Register

        </button>


      </header>





      {/* Login Card */}

      <main className="
      flex-grow
      flex
      justify-center
      items-center
      px-4
      py-16
      ">



        <div className="
        bg-white
        rounded-3xl
        p-8
        md:p-12
        w-full
        max-w-lg
        shadow-xl
        ">



          {/* Icon */}

          <div className="
          w-12
          h-12
          rounded-xl
          bg-green-100
          flex
          items-center
          justify-center
          text-3xl
          mb-6
          ">

            🔒

          </div>




          <h1 className="
          text-3xl
          font-bold
          text-gray-800
          mb-3
          ">

            Sign in with NDI

          </h1>



          <p className="
          text-gray-500
          mb-8
          ">

            National Digital Identity —
            secure government verified login.

          </p>






          {/* CID */}

          <label className="
          text-sm
          font-semibold
          text-gray-600
          ">

            Citizenship ID (CID)

          </label>



          <input

          placeholder="11 XXX XXXXX XXX"

          className="
          w-full
          mt-2
          px-4
          py-3
          rounded-xl
          bg-blue-50
          border
          outline-none
          "

          />





          {/* NDI Login */}

          <Link

          to="/dashboard"

          className="
          w-full
          mt-6
          bg-blue-700
          text-white
          py-4
          rounded-xl
          font-bold
          flex
          items-center
          justify-center
          hover:bg-blue-800
          transition
          "

          >

            Continue with NDI

          </Link>







          {/* Divider */}


          <div className="
          my-10
          flex
          items-center
          ">


            <div className="
            flex-grow
            border-t
            "></div>


            <span className="
            px-4
            text-xs
            text-gray-500
            ">

              OR PREVIEW AS

            </span>



            <div className="
            flex-grow
            border-t
            "></div>


          </div>








          {/* Role Selection */}


          <div className="space-y-3">



          {

          roles.map((role,index)=>(


            <Link

            key={index}

            to={role.path}

            className="
            w-full
            flex
            items-center
            justify-between
            p-4
            rounded-xl
            border
            hover:bg-blue-50
            transition
            "

            >




              <div className="
              flex
              items-center
              gap-4
              ">




                <div

                className={`
                w-10
                h-10
                rounded-full
                ${role.color}
                text-white
                flex
                items-center
                justify-center
                font-bold
                `}

                >

                  {role.initials}

                </div>






                <div className="text-left">


                  <p className="
                  font-semibold
                  ">

                    {role.role}

                  </p>



                  <p className="
                  text-xs
                  text-gray-500
                  ">

                    {role.name}

                  </p>


                </div>





              </div>






              <span>

                →

              </span>






            </Link>



          ))

          }



          </div>





        </div>



      </main>







      {/* Footer */}


      <footer className="
      py-6
      text-center
      text-sm
      text-gray-500
      border-t
      bg-white
      ">


        © 2026 Royal Government of Bhutan.
        All rights reserved.


      </footer>





    </div>


  )

}


export default Login;