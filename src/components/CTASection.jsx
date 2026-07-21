const CTASection = () => {


  return (

    <section className="
    py-20
    px-6
    bg-white
    ">


      <div className="
      max-w-7xl
      mx-auto
      ">


        <div className="
        rounded-[32px]
        bg-gradient-to-r
        from-blue-900
        via-blue-700
        to-blue-600
        text-white
        px-8
        py-16
        md:px-16
        text-center
        shadow-2xl
        overflow-hidden
        relative
        ">



          {/* Decorative circles */}

          <div className="
          absolute
          -top-20
          -right-20
          w-64
          h-64
          bg-white/10
          rounded-full
          ">
          </div>


          <div className="
          absolute
          -bottom-20
          -left-20
          w-64
          h-64
          bg-white/10
          rounded-full
          ">
          </div>





          <div className="
          relative
          z-10
          ">


            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            ">

              Your Future Starts Here

            </h2>



            <p className="
            mt-6
            text-blue-100
            max-w-2xl
            mx-auto
            text-lg
            leading-relaxed
            ">

              Join thousands of Bhutanese youth who are
              building their skills, discovering opportunities,
              and creating a brighter future.

            </p>





            <div className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            ">




              <button className="
              bg-white
              text-blue-700
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-50
              transition
              shadow-lg
              ">

                Sign Up Now

              </button>





              <button className="
              bg-white/10
              border
              border-white/30
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-white/20
              transition
              ">

                Learn More

              </button>




            </div>


          </div>



        </div>



      </div>


    </section>


  );


};


export default CTASection;