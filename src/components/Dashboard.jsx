const Dashboard = () => {

  const features = [
    {
      icon: "📊",
      title: "Real-time Tracking",
      description:
        "Monitor your applications, programmes and activities with instant status updates."
    },

    {
      icon: "🪪",
      title: "Verified Digital ID",
      description:
        "Securely access youth services using your National Digital Identity (NDI)."
    },

    {
      icon: "🏆",
      title: "Gamified Growth",
      description:
        "Earn badges, achievements and certificates as you grow."
    }
  ];


  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Experience the Portal
          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">

            A unified digital home for Bhutanese youth.
            Track programmes, certificates and opportunities.

          </p>

        </div>



        <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-12 
        gap-10 
        items-center
        ">



          {/* Dashboard Preview */}

          <div className="
          lg:col-span-8
          bg-gray-100
          rounded-3xl
          shadow-xl
          overflow-hidden
          border
          ">


            {/* Browser Header */}

            <div className="
            bg-gray-200
            px-5
            py-3
            flex
            items-center
            gap-2
            ">


              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>


              <div className="
              mx-auto
              bg-white
              px-6
              py-1
              rounded-full
              text-xs
              text-gray-500
              ">

                portal.yps.gov.bt/dashboard

              </div>


            </div>



            {/* Fake Dashboard */}

            <div className="
            h-80
            bg-gradient-to-br
            from-blue-50
            to-blue-100
            flex
            items-center
            justify-center
            ">


              <div className="text-center">

                <div className="
                text-6xl
                mb-4
                ">
                  🚀
                </div>


                <h3 className="
                text-2xl
                font-bold
                text-blue-700
                ">
                  Youth Dashboard Preview
                </h3>


                <p className="text-gray-600 mt-2">

                  Your digital youth ecosystem

                </p>


              </div>


            </div>


          </div>




          {/* Feature Cards */}


          <div className="
          lg:col-span-4
          space-y-6
          ">


          {
            features.map((feature,index)=>(

              <div
              key={index}
              className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border
              hover:-translate-y-2
              hover:shadow-xl
              transition
              "
              >


                <div className="
                flex
                items-center
                gap-4
                mb-3
                ">


                  <div className="
                  w-12
                  h-12
                  rounded-xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-2xl
                  ">

                    {feature.icon}

                  </div>


                  <h3 className="
                  font-bold
                  text-blue-700
                  ">

                    {feature.title}

                  </h3>


                </div>



                <p className="
                text-gray-600
                text-sm
                ">

                  {feature.description}

                </p>



              </div>


            ))
          }


          </div>



        </div>


      </div>


    </section>

  )

}


export default Dashboard;