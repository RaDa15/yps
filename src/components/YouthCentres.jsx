const YouthCentres = () => {


  const centres = [

    {
      name: "Thimphu Youth Innovation Hub",
      description:
        "A creative space for collaboration, digital skills and innovation.",
      tags: [
        "Technology",
        "Innovation",
        "Fast Internet"
      ]
    },


    {
      name: "Paro Makerspace",
      description:
        "A place combining traditional Bhutanese creativity with modern design.",
      tags:[
        "Design Studio",
        "VR Lab",
        "Crafts"
      ]
    },


    {
      name:"Punakha Youth Centre",
      description:
        "Supporting youth development through learning and community activities.",
      tags:[
        "Training",
        "Sports",
        "Community"
      ]
    },


    {
      name:"Haa Youth Centre",
      description:
        "A rural youth hub supporting skills development and opportunities.",
      tags:[
        "Skills",
        "Culture",
        "Wellness"
      ]
    }

  ];



  return (

    <section className="
    py-24
    bg-gray-50
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Heading */}

        <div className="
        text-center
        mb-16
        ">


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-blue-700
          ">

            Our Youth Centres

          </h2>


          <p className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          ">

            Explore nationwide hubs designed for learning,
            creativity and community development.

          </p>


        </div>




        <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
        ">




          {/* Search + Map */}


          <div className="
          bg-black
          text-white
          rounded-3xl
          p-8
          ">


            <h3 className="
            text-2xl
            font-bold
            mb-6
            ">

              Find a Centre Near You

            </h3>



            <div className="
            relative
            mb-6
            ">


              <input

              type="text"

              placeholder="Search Dzongkhag..."

              className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              outline-none
              placeholder-gray-400
              "

              />


              <span className="
              absolute
              right-4
              top-3
              ">
                🔍
              </span>


            </div>




            {/* Map Placeholder */}

            <div className="
            h-52
            rounded-2xl
            bg-white/10
            border
            border-white/20
            flex
            items-center
            justify-center
            mb-6
            ">


              <div className="text-center">


                <div className="text-5xl">
                  🗺️
                </div>


                <p className="
                mt-3
                text-gray-300
                ">

                  Interactive Map

                </p>


              </div>


            </div>




            <button className="
            w-full
            bg-white
            text-black
            py-3
            rounded-xl
            font-semibold
            hover:bg-gray-200
            transition
            ">

              View Map

            </button>


          </div>







          {/* Centre Cards */}


          <div className="
          lg:col-span-2
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          ">



          {
            centres.map((centre,index)=>(


              <div

              key={index}

              className="
              bg-white
              rounded-3xl
              p-6
              shadow-md
              border
              hover:-translate-y-2
              hover:shadow-xl
              transition
              ">



                {/* Image Placeholder */}

                <div className="
                h-40
                rounded-2xl
                bg-gradient-to-br
                from-blue-100
                to-blue-200
                flex
                items-center
                justify-center
                mb-5
                ">


                  <span className="text-5xl">
                    🏫
                  </span>


                </div>




                <h3 className="
                text-xl
                font-bold
                text-blue-700
                mb-3
                ">

                  {centre.name}

                </h3>




                <p className="
                text-gray-600
                text-sm
                mb-4
                ">

                  {centre.description}

                </p>




                <div className="
                flex
                flex-wrap
                gap-2
                ">


                {
                  centre.tags.map((tag,i)=>(

                    <span

                    key={i}

                    className="
                    px-3
                    py-1
                    bg-blue-50
                    text-blue-700
                    text-xs
                    rounded-full
                    ">

                      {tag}

                    </span>

                  ))
                }


                </div>



                <button className="
                mt-5
                text-blue-600
                font-semibold
                text-sm
                ">

                  View Details →

                </button>



              </div>


            ))
          }



          </div>




        </div>


      </div>


    </section>

  )

}



export default YouthCentres;